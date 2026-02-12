# Design Ideas for Liptus® Landing Page

<response>
<text>
**Design Movement:** Modern Apothecary meets Scandinavian Minimalism

**Core Principles:**
1. **Botanical Authenticity** - Real eucalyptus, mint, and herbal imagery (not illustrations). Photography-first approach with natural textures.
2. **Breathing Space** - Generous whitespace that mirrors the product benefit ("weź głęboki oddech"). Never crowded, always room to breathe.
3. **Tactile Warmth** - Combining clinical precision with warmth through natural materials: marble, wood, linen textures.
4. **Asymmetric Balance** - Avoiding centered grid layouts. Offset hero images, staggered content blocks, diagonal transitions between sections.

**Color Philosophy:**
- **Primary:** Soft Sage Green (eucalyptus-inspired, #8B9D83) - calming, natural, medicinal
- **Secondary:** Warm Cream (#F5F1E8) - spa-like, inviting, premium
- **Accent:** Deep Forest Green (#2C4A3E) - trust, expertise, grounding
- **Neutrals:** Pure White + Warm Gray (#E8E4DD)
- **Emotional Intent:** Create a sense of "clinical spa" - trustworthy like a pharmacy, inviting like a wellness retreat.

**Layout Paradigm:**
- **Asymmetric Hero:** Large lifestyle image on left (60%), content on right (40%) with vertical rhythm
- **Diagonal Transitions:** Use CSS clip-path to create angled section breaks (like flowing water or breath)
- **Card-based Product Grid:** Elevated cards with subtle shadows, not flat tiles
- **Sidebar Quiz Flow:** Quiz appears as slide-in panel from right, not modal overlay

**Signature Elements:**
1. **Eucalyptus Branch Dividers:** SVG illustrations of eucalyptus branches as section separators
2. **Breath Animation:** Subtle pulsing/fading effect on hero CTA button (like breathing)
3. **Ingredient Circles:** Circular image frames for ingredient showcase (mortar & pestle aesthetic)

**Interaction Philosophy:**
- **Gentle Transitions:** 400-600ms ease-in-out, never jarring
- **Hover Depth:** Cards lift on hover with shadow increase (8px → 24px)
- **Scroll-triggered Fades:** Content fades in from bottom as user scrolls (IntersectionObserver)
- **Quiz Progress:** Horizontal progress bar with eucalyptus leaf icon moving along

**Animation:**
- **Hero:** Fade-in on load (1000ms) with slight upward movement
- **Product Cards:** Stagger animation (100ms delay between each)
- **Testimonials:** Slide-in from left/right alternating
- **CTA Buttons:** Subtle scale on hover (1.0 → 1.05) + shadow increase

**Typography System:**
- **Display Font:** Playfair Display (serif) for headlines - elegant, trustworthy, premium
  - H1: 56px/64px, font-weight 600
  - H2: 40px/48px, font-weight 600
- **Body Font:** Inter (sans-serif) for body text - clean, readable, modern
  - Body: 18px/28px, font-weight 400
  - Small: 16px/24px, font-weight 400
- **Hierarchy:** Large serif headlines + generous line-height body text = easy scanning
- **Polish Diacritics:** Ensure proper rendering of ą, ć, ę, ł, ń, ó, ś, ź, ż
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Design Movement:** Brutalist Wellness - Raw meets Refined

**Core Principles:**
1. **Honest Materials** - Exposed textures, raw edges, unpolished photography. No fake perfection.
2. **Bold Typography** - Oversized, unapologetic headlines. Text as visual element, not decoration.
3. **Grid Disruption** - Intentionally broken grids, overlapping elements, controlled chaos.
4. **Monochrome + Accent** - Black, white, gray with ONE bold accent (eucalyptus green).

**Color Philosophy:**
- **Primary:** Charcoal Black (#1A1A1A) - strength, confidence, no-nonsense
- **Secondary:** Off-White (#F8F8F6) - not pure white, slightly warmer
- **Accent:** Electric Eucalyptus (#00C896) - vibrant, energizing, unexpected
- **Emotional Intent:** "This isn't your grandmother's aromatherapy." Modern, bold, effective.

**Layout Paradigm:**
- **Full-bleed Hero:** Edge-to-edge image with text overlay (no padding)
- **Broken Grid:** 12-column grid with intentional breaks - some elements span 7 columns, others 5
- **Overlapping Layers:** Product images overlap text blocks (z-index play)
- **Horizontal Scroll Sections:** Quiz questions scroll horizontally (swipe on mobile)

**Signature Elements:**
1. **Thick Borders:** 8px solid borders around cards and images (brutalist aesthetic)
2. **Cut-out Text:** Large headlines with background images showing through (mix-blend-mode)
3. **Geometric Shapes:** Bold circles and rectangles as background elements

**Interaction Philosophy:**
- **Instant Feedback:** No easing, instant state changes (0ms transitions)
- **Hover Inversion:** Background/foreground colors swap on hover
- **Click Ripple:** Material Design-style ripple effect on buttons
- **Parallax Scroll:** Background images move slower than foreground (depth illusion)

**Animation:**
- **Hero:** No fade-in, instant display (brutalist = no fluff)
- **Scroll Snap:** Sections snap into place on scroll (CSS scroll-snap)
- **Quiz:** Slide transitions (left/right) with no easing
- **Micro-interactions:** Button press animation (scale 1.0 → 0.95)

**Typography System:**
- **Display Font:** Space Grotesk (geometric sans) - bold, modern, technical
  - H1: 72px/76px, font-weight 700, letter-spacing -2px
  - H2: 48px/52px, font-weight 700
- **Body Font:** IBM Plex Mono (monospace) for body text - technical, honest, raw
  - Body: 16px/26px, font-weight 400
  - Small: 14px/22px, font-weight 400
- **Hierarchy:** LOUD headlines + quiet body text = clear information architecture
</text>
<probability>0.06</probability>
</response>

<response>
<text>
**Design Movement:** Organic Maximalism - Nature's Abundance

**Core Principles:**
1. **Layered Richness** - Multiple textures, patterns, and elements coexisting harmoniously
2. **Botanical Illustration** - Hand-drawn botanical elements mixed with photography
3. **Curved Everything** - No sharp corners. Organic shapes, flowing lines, natural curves.
4. **Storytelling Depth** - Every section tells a micro-story with rich visual narrative

**Color Philosophy:**
- **Primary:** Moss Green (#4A6741) - earthy, grounding, natural
- **Secondary:** Terracotta (#D4866A) - warmth, human touch, handmade
- **Accent:** Golden Honey (#E8B55F) - premium, natural sweetness, light
- **Supporting:** Dusty Rose (#C9A9A3), Cream (#FFF8F0)
- **Emotional Intent:** "Step into a botanical garden meets artisan workshop." Rich, layered, immersive.

**Layout Paradigm:**
- **Curved Containers:** All sections have border-radius: 40px-80px
- **Overlapping Sections:** Each section slightly overlaps the previous (negative margin)
- **Organic Grid:** Masonry-style layout for products (varying heights)
- **Floating Elements:** Botanical illustrations float around content (absolute positioning)

**Signature Elements:**
1. **Hand-drawn Botanicals:** SVG illustrations of eucalyptus, mint, thyme scattered throughout
2. **Textured Backgrounds:** Subtle paper texture, linen weave, watercolor washes
3. **Circular Frames:** Product images in organic, hand-drawn circle frames (not perfect circles)

**Interaction Philosophy:**
- **Elastic Animations:** Spring physics (react-spring) for bouncy, organic feel
- **Hover Grow:** Elements gently scale up (1.0 → 1.08) with elastic easing
- **Cursor Trail:** Botanical elements follow cursor (subtle, not distracting)
- **Scroll Parallax:** Multiple layers moving at different speeds (depth illusion)

**Animation:**
- **Hero:** Fade-in with scale (0.95 → 1.0) + elastic bounce
- **Floating Botanicals:** Gentle floating animation (translate + rotate)
- **Product Cards:** Lift + tilt on hover (3D transform)
- **Quiz:** Page curl transition between questions (like turning book pages)

**Typography System:**
- **Display Font:** Cormorant Garamond (serif) - elegant, organic, editorial
  - H1: 64px/72px, font-weight 600, italic for emphasis
  - H2: 44px/52px, font-weight 500
- **Body Font:** Karla (humanist sans) - friendly, readable, warm
  - Body: 19px/32px, font-weight 400
  - Small: 17px/28px, font-weight 400
- **Hierarchy:** Flowing serif headlines + generous body text = editorial magazine feel
</text>
<probability>0.09</probability>
</response>

## Selected Approach: Modern Apothecary meets Scandinavian Minimalism

This approach perfectly balances:
- **Trust & Expertise** (apothecary aesthetic)
- **Calm & Clarity** (Scandinavian minimalism)
- **Premium Quality** (photography-first, natural materials)
- **Breathing Space** (literally and metaphorically)

Perfect for Liptus® because it communicates both the scientific/clinical credibility (Klaudyna's expertise) and the natural/wellness benefit (taking a deep breath).
