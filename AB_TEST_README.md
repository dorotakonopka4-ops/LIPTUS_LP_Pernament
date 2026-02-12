# A/B Test Setup - Liptus® Landing Page

## 📊 Test Overview

**Hypothesis:** Quiz-first hero section will increase engagement and conversion rates compared to traditional storytelling hero.

**Variants:**
- **Variant A (Control):** Traditional storytelling hero → quiz in middle → products
- **Variant B (Treatment):** Quiz-first hero → products → storytelling

**Distribution:** 50/50 random split

**Duration:** Minimum 2 weeks or until statistical significance

---

## 🎯 Key Metrics to Track

### Primary Metrics
1. **Quiz Completion Rate** - % of visitors who complete the quiz
2. **Email Capture Rate** - % of visitors who provide email
3. **Click-Through Rate (CTR)** - % of visitors who click product links
4. **Conversion Rate** - % of visitors who make a purchase (track via Klaudyna's store)

### Secondary Metrics
1. **Bounce Rate** - % of visitors who leave immediately
2. **Time on Page** - Average session duration
3. **Scroll Depth** - How far users scroll
4. **Quiz Start Rate** - % of visitors who start the quiz

---

## 🔧 How to Use

### For Regular Visitors
- Visitors are automatically assigned to Variant A or B (50/50 split)
- Assignment is saved in a cookie for 7 days
- Returning visitors see the same variant

### For Testing/Preview
You can force a specific variant using URL parameters:

- **Variant A:** `https://your-domain.com/?variant=A`
- **Variant B:** `https://your-domain.com/?variant=B`

Or use direct routes:
- **Variant A:** `https://your-domain.com/variant-a`
- **Variant B:** `https://your-domain.com/variant-b`

---

## 📈 Analytics Integration

The A/B test automatically tracks events to Umami Analytics:

### Tracked Events
- `ab_test_assigned` - When a variant is assigned to a user
- `quiz_started` - When user clicks "Start Quiz"
- `quiz_completed` - When user completes all questions
- `email_captured` - When user provides email
- `product_clicked` - When user clicks product link

### Viewing Results
1. Go to Umami dashboard
2. Filter events by `variant: A` or `variant: B`
3. Compare conversion rates between variants

---

## 🧪 Statistical Significance

**Minimum Sample Size:** 
- At least 100 conversions per variant
- Or 1,000 visitors per variant (whichever comes first)

**Confidence Level:** 95%

**Tools to Calculate Significance:**
- [Optimizely's A/B Test Calculator](https://www.optimizely.com/sample-size-calculator/)
- [VWO's A/B Test Significance Calculator](https://vwo.com/tools/ab-test-significance-calculator/)

---

## 📝 Implementation Details

### Files Modified/Created
- `client/src/lib/abtest.ts` - A/B test logic and tracking
- `client/src/components/QuizHero.tsx` - Quiz-first hero component
- `client/src/pages/HomeVariantB.tsx` - Variant B page
- `client/src/App.tsx` - Router with A/B test logic

### Cookie Details
- **Name:** `liptus_ab_variant`
- **Value:** `A` or `B`
- **Duration:** 7 days
- **Path:** `/`

---

## 🎬 Next Steps

1. **Deploy both variants** to production
2. **Run test for 2-4 weeks** (or until statistical significance)
3. **Monitor key metrics** in Umami dashboard
4. **Analyze results** and choose winning variant
5. **Implement winner** as default for all users

---

## 🚀 Expected Results

Based on industry benchmarks and LUXGROVE analysis:

### If Variant B Wins (Quiz-First)
- **Quiz Start Rate:** +40-60%
- **Email Capture:** +150-250%
- **Overall Conversion:** +20-35%

### If Variant A Wins (Storytelling)
- Better for **brand awareness** and **trust building**
- Higher **time on page** and **scroll depth**
- Better for **organic/SEO traffic**

---

## 💡 Recommendations

### During Test
- ✅ Don't change anything on either variant
- ✅ Drive equal traffic to both variants
- ✅ Monitor for technical issues
- ❌ Don't stop test early

### After Test
- If **Variant B wins:** Make it default, keep Variant A as `/about` page
- If **Variant A wins:** Keep as default, use quiz as popup/modal
- If **no clear winner:** Run longer or test different elements

---

## 📞 Support

For questions about the A/B test setup, contact the development team or refer to:
- [Umami Analytics Docs](https://umami.is/docs)
- [A/B Testing Best Practices](https://vwo.com/ab-testing/)
