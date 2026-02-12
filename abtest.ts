/**
 * A/B Testing System for Liptus Landing Page
 * 
 * Variants:
 * - A: Traditional storytelling hero (original)
 * - B: Quiz-first hero (new)
 * 
 * Distribution: 50/50 split
 * Persistence: Cookie-based (7 days)
 */

export type ABTestVariant = 'A' | 'B';

const COOKIE_NAME = 'liptus_ab_variant';
const COOKIE_DAYS = 7;

/**
 * Get or assign A/B test variant for the user
 */
export function getABTestVariant(): ABTestVariant {
  // Check if variant is already assigned (cookie)
  const existingVariant = getCookie(COOKIE_NAME);
  
  if (existingVariant === 'A' || existingVariant === 'B') {
    return existingVariant;
  }

  // Assign new variant (50/50 split)
  const newVariant: ABTestVariant = Math.random() < 0.5 ? 'A' : 'B';
  
  // Save to cookie
  setCookie(COOKIE_NAME, newVariant, COOKIE_DAYS);
  
  // Track assignment
  trackABTestAssignment(newVariant);
  
  return newVariant;
}

/**
 * Force a specific variant (for testing/preview)
 */
export function setABTestVariant(variant: ABTestVariant): void {
  setCookie(COOKIE_NAME, variant, COOKIE_DAYS);
  trackABTestAssignment(variant);
}

/**
 * Track A/B test events
 */
export function trackABTestEvent(eventName: string, variant?: ABTestVariant): void {
  const currentVariant = variant || getABTestVariant();
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[A/B Test] Variant ${currentVariant}: ${eventName}`);
  }

  // Send to analytics (if available)
  if (typeof window !== 'undefined' && (window as any).umami) {
    (window as any).umami.track(eventName, {
      variant: currentVariant,
    });
  }
}

/**
 * Track variant assignment
 */
function trackABTestAssignment(variant: ABTestVariant): void {
  trackABTestEvent('ab_test_assigned', variant);
}

/**
 * Cookie utilities
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  
  return null;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

/**
 * Get variant from URL parameter (for testing)
 * Usage: ?variant=A or ?variant=B
 */
export function getVariantFromURL(): ABTestVariant | null {
  if (typeof window === 'undefined') return null;
  
  const params = new URLSearchParams(window.location.search);
  const variant = params.get('variant');
  
  if (variant === 'A' || variant === 'B') {
    return variant;
  }
  
  return null;
}
