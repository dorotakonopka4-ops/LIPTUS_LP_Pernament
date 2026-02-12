# Integracja Facebook Pixel - Liptus®

## ✅ Status Integracji

Facebook Pixel został **pomyślnie zainstalowany i skonfigurowany**. Wszystkie kluczowe eventy z quizu są automatycznie trackowane.

**Pixel ID:** `1697874877112609`

---

## 📊 Trackowane Eventy

### 1. **PageView** (Standard Event)
- **Kiedy:** Automatycznie przy każdym załadowaniu strony
- **Gdzie:** `client/index.html` (Facebook Pixel base code)
- **Parametry:** Brak (automatyczne)

### 2. **QuizStarted** (Custom Event)
- **Kiedy:** Użytkownik otwiera quiz
- **Gdzie:** `QuizFunnel.tsx` - `useEffect` hook
- **Parametry:** Brak
- **Kod:**
  ```typescript
  trackFBCustomEvent(FBEvents.QUIZ_STARTED);
  ```

### 3. **Lead** (Standard Event) ⭐
- **Kiedy:** Użytkownik podaje email i ukończa quiz
- **Gdzie:** `QuizFunnel.tsx` - `handleEmailSubmit()`
- **Parametry:**
  - `content_name`: "Liptus Quiz Completed"
  - `content_category`: "Quiz"
  - `value`: Liczba rekomendowanych produktów
  - `currency`: "PLN"
- **Kod:**
  ```typescript
  trackFBEvent(FBEvents.LEAD, {
    content_name: "Liptus Quiz Completed",
    content_category: "Quiz",
    value: recommendedProducts.length,
    currency: "PLN",
  });
  ```

### 4. **QuizCompleted** (Custom Event)
- **Kiedy:** Użytkownik ukończa quiz (razem z Lead)
- **Gdzie:** `QuizFunnel.tsx` - `handleEmailSubmit()`
- **Parametry:**
  - `recommended_products`: Lista rekomendowanych produktów (string)
  - `quiz_answers`: Odpowiedzi użytkownika (object)
- **Kod:**
  ```typescript
  trackFBCustomEvent(FBEvents.QUIZ_COMPLETED, {
    recommended_products: recommendedProducts.join(", "),
    quiz_answers: quizAnswers,
  });
  ```

### 5. **ProductRecommendationViewed** (Custom Event)
- **Kiedy:** Użytkownik zobaczy rekomendacje produktów
- **Gdzie:** `QuizFunnel.tsx` - `handleEmailSubmit()` (po setShowResults)
- **Parametry:**
  - `recommended_products`: Lista rekomendowanych produktów
  - `num_products`: Liczba rekomendowanych produktów
- **Kod:**
  ```typescript
  trackFBCustomEvent(FBEvents.PRODUCT_RECOMMENDATION_VIEWED, {
    recommended_products: recommendedProducts.join(", "),
    num_products: recommendedProducts.length,
  });
  ```

### 6. **InitiateCheckout** (Standard Event) ⭐
- **Kiedy:** Użytkownik kliknie "Dodaj do Koszyka" na rekomendowanym produkcie
- **Gdzie:** `QuizFunnel.tsx` - przycisk "Dodaj do Koszyka"
- **Parametry:**
  - `content_name`: Nazwa produktu
  - `content_category`: "Liptus Product"
  - `value`: Cena produktu (float)
  - `currency`: "PLN"
- **Kod:**
  ```typescript
  trackFBEvent(FBEvents.INITIATE_CHECKOUT, {
    content_name: product.name,
    content_category: "Liptus Product",
    value: parseFloat(product.price.replace(/[^0-9,]/g, "").replace(",", ".")),
    currency: "PLN",
  });
  ```

### 7. **ViewContent** (Standard Event)
- **Kiedy:** Użytkownik kliknie "Zobacz wszystkie produkty Liptus®"
- **Gdzie:** `QuizFunnel.tsx` - przycisk "Zobacz wszystkie produkty"
- **Parametry:**
  - `content_name`: "All Liptus Products"
  - `content_category`: "Product Catalog"
- **Kod:**
  ```typescript
  trackFBEvent(FBEvents.VIEW_CONTENT, {
    content_name: "All Liptus Products",
    content_category: "Product Catalog",
  });
  ```

---

## 🔍 Jak sprawdzić czy Pixel działa?

### Metoda 1: Facebook Pixel Helper (Chrome Extension)

1. Zainstaluj **Facebook Pixel Helper** z Chrome Web Store:
   https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc

2. Otwórz stronę Liptus® w Chrome

3. Kliknij ikonę Facebook Pixel Helper w pasku narzędzi

4. Powinieneś zobaczyć:
   - ✅ **PageView** - załadowany automatycznie
   - ✅ **QuizStarted** - po otwarciu quizu
   - ✅ **Lead** - po podaniu emaila
   - ✅ **InitiateCheckout** - po kliknięciu "Dodaj do Koszyka"

### Metoda 2: Facebook Events Manager

1. Zaloguj się do **Meta Business Manager**

2. Idź do **Events Manager** → wybierz swój Pixel (1697874877112609)

3. Kliknij **Test Events** (w lewym menu)

4. Otwórz stronę Liptus® i wykonaj quiz

5. W czasie rzeczywistym zobaczysz wszystkie eventy w Events Manager:
   - `PageView`
   - `QuizStarted` (custom)
   - `Lead`
   - `QuizCompleted` (custom)
   - `ProductRecommendationViewed` (custom)
   - `InitiateCheckout`
   - `ViewContent`

### Metoda 3: Browser Console (Developer Tools)

1. Otwórz stronę Liptus® w przeglądarce

2. Naciśnij **F12** (lub Ctrl+Shift+I) żeby otworzyć Developer Tools

3. Idź do zakładki **Console**

4. Wykonaj quiz - zobaczysz logi:
   ```
   [FB Pixel] Tracked custom: QuizStarted
   [FB Pixel] Tracked: Lead { content_name: "Liptus Quiz Completed", ... }
   [FB Pixel] Tracked custom: QuizCompleted { recommended_products: "...", ... }
   [FB Pixel] Tracked custom: ProductRecommendationViewed { ... }
   [FB Pixel] Tracked: InitiateCheckout { content_name: "Sól do kąpieli Liptus®", ... }
   ```

---

## 📈 Jak wykorzystać dane z Pixel?

### 1. **Tworzenie Custom Audiences (Remarketingu)**

**Cel:** Retargetuj użytkowników, którzy ukończyli quiz, ale nie kupili produktu.

**Kroki:**

1. Idź do **Meta Ads Manager** → **Audiences**
2. Kliknij **Create Audience** → **Custom Audience**
3. Wybierz **Website**
4. Wybierz swój Pixel (1697874877112609)
5. Ustaw warunek:
   - **Include:** People who visited specific web pages
   - **Event:** `Lead` (lub custom event `QuizCompleted`)
   - **Time:** Last 30 days
6. **Exclude:** People who purchased (jeśli masz tracking Purchase)
7. Nazwij audience: **"Liptus Quiz Completed - No Purchase"**
8. Kliknij **Create Audience**

**Użycie:**
- Stwórz kampanię reklamową na Facebooku/Instagramie
- W sekcji **Audience** wybierz **"Liptus Quiz Completed - No Purchase"**
- Pokaż reklamy z kodem rabatowym QUIZ15 lub QUIZ20

---

### 2. **Tworzenie Lookalike Audiences**

**Cel:** Znajdź nowych użytkowników podobnych do tych, którzy ukończyli quiz.

**Kroki:**

1. Najpierw stwórz Custom Audience (jak wyżej) z eventami `Lead` lub `QuizCompleted`
2. Idź do **Audiences** → **Create Audience** → **Lookalike Audience**
3. Wybierz source: **"Liptus Quiz Completed"**
4. Wybierz lokalizację: **Poland**
5. Wybierz rozmiar: **1%** (najbardziej podobni) lub **5%** (szerszy zasięg)
6. Kliknij **Create Audience**

**Użycie:**
- Targetuj Lookalike Audience w kampaniach reklamowych
- Facebook znajdzie osoby podobne do tych, które ukończyły quiz

---

### 3. **Optymalizacja kampanii pod Lead**

**Cel:** Facebook automatycznie optymalizuje reklamy pod kątem osób, które prawdopodobnie ukończą quiz.

**Kroki:**

1. Stwórz nową kampanię w **Meta Ads Manager**
2. Wybierz cel: **Leads** (lub **Conversions**)
3. W sekcji **Conversion Event** wybierz: **Lead**
4. Facebook będzie pokazywał reklamy osobom, które najprawdopodobniej ukończą quiz

---

### 4. **Analiza lejka konwersji (Funnel Analysis)**

**Cel:** Zobacz gdzie użytkownicy "odpadają" w procesie quizu.

**Kroki:**

1. Idź do **Events Manager** → **Aggregated Event Measurement**
2. Stwórz funnel:
   - **Step 1:** `PageView` (wejście na stronę)
   - **Step 2:** `QuizStarted` (otwarcie quizu)
   - **Step 3:** `Lead` (ukończenie quizu)
   - **Step 4:** `InitiateCheckout` (kliknięcie "Dodaj do Koszyka")
   - **Step 5:** `Purchase` (zakup - jeśli masz tracking)

3. Zobacz conversion rate między krokami:
   - PageView → QuizStarted: **X%** (ile osób otwiera quiz)
   - QuizStarted → Lead: **Y%** (ile osób kończy quiz)
   - Lead → InitiateCheckout: **Z%** (ile osób klika "Dodaj do Koszyka")

**Optymalizacja:**
- Jeśli PageView → QuizStarted jest niski: Popraw CTA "Rozpocznij quiz"
- Jeśli QuizStarted → Lead jest niski: Skróć quiz lub zmień pytania
- Jeśli Lead → InitiateCheckout jest niski: Popraw rekomendacje lub zniżkę

---

### 5. **Tracking konwersji z reklam**

**Cel:** Zobacz ile osób z reklam ukończyło quiz i kupiło produkt.

**Kroki:**

1. Stwórz kampanię reklamową na Facebooku/Instagramie
2. W sekcji **Tracking** upewnij się, że Pixel jest włączony
3. Po uruchomieniu kampanii idź do **Ads Manager** → **Campaigns**
4. Zobacz metryki:
   - **Leads** - ile osób ukończyło quiz
   - **Cost per Lead** - koszt za jeden ukończony quiz
   - **InitiateCheckout** - ile osób kliknęło "Dodaj do Koszyka"
   - **Purchase** (jeśli masz tracking) - ile osób kupiło

**Optymalizacja:**
- Jeśli Cost per Lead > 10 zł: Popraw targeting lub kreację reklamy
- Jeśli Lead → Purchase jest niski: Popraw ofertę lub zniżkę

---

## 🎯 Najlepsze praktyki

### 1. **Weryfikuj Pixel regularnie**
- Sprawdzaj **Events Manager** co tydzień
- Upewnij się, że wszystkie eventy są trackowane poprawnie
- Jeśli widzisz spadek eventów, sprawdź czy Pixel działa

### 2. **Używaj Custom Conversions**
- Stwórz Custom Conversion dla `Lead` (quiz completed)
- Stwórz Custom Conversion dla `InitiateCheckout` (clicked "Add to Cart")
- Użyj ich w kampaniach reklamowych jako cel konwersji

### 3. **Testuj różne audiences**
- Testuj różne Custom Audiences (np. quiz completed vs. product viewed)
- Testuj różne Lookalike Audiences (1% vs. 5%)
- Zobacz która audience ma najlepszy ROI

### 4. **Monitoruj metryki**
- **Lead Conversion Rate** - ile osób kończy quiz
- **Cost per Lead** - koszt za jeden ukończony quiz
- **Lead to Purchase Rate** - ile osób kupuje po quizie
- **ROAS** (Return on Ad Spend) - zwrot z inwestycji w reklamy

---

## 🔧 Rozwiązywanie problemów

### Problem: Pixel nie trackuje eventów

**Rozwiązanie:**
1. Sprawdź czy Pixel jest załadowany: Otwórz Developer Tools (F12) → Console → wpisz `fbq` i naciśnij Enter. Powinieneś zobaczyć funkcję, nie `undefined`.
2. Sprawdź czy Pixel ID jest poprawny: `1697874877112609`
3. Sprawdź czy nie masz AdBlocka włączonego (wyłącz na czas testów)

### Problem: Custom events nie pojawiają się w Events Manager

**Rozwiązanie:**
1. Custom events mogą pojawić się z opóźnieniem (do 20 minut)
2. Sprawdź w **Test Events** (real-time tracking)
3. Upewnij się, że custom events są trackowane jako `trackCustom`, nie `track`

### Problem: InitiateCheckout nie trackuje wartości

**Rozwiązanie:**
1. Sprawdź czy cena produktu jest poprawnie parsowana:
   ```typescript
   parseFloat(product.price.replace(/[^0-9,]/g, "").replace(",", "."))
   ```
2. Jeśli cena zawiera zakres (np. "39,00-59,00 zł"), użyj średniej lub minimalnej wartości

---

## 📞 Wsparcie

Jeśli masz pytania dotyczące Facebook Pixel:
- **Facebook Help Center:** https://www.facebook.com/business/help/952192354843755
- **Meta Business Support:** https://www.facebook.com/business/help

---

## ✅ Checklist wdrożenia

- [x] Facebook Pixel zainstalowany w `index.html`
- [x] Helper `fbPixel.ts` utworzony
- [x] Event `PageView` trackowany automatycznie
- [x] Event `QuizStarted` (custom) trackowany
- [x] Event `Lead` trackowany po ukończeniu quizu
- [x] Event `QuizCompleted` (custom) trackowany
- [x] Event `ProductRecommendationViewed` (custom) trackowany
- [x] Event `InitiateCheckout` trackowany na przyciskach "Dodaj do Koszyka"
- [x] Event `ViewContent` trackowany na przycisku "Zobacz wszystkie produkty"
- [ ] Pixel zweryfikowany w Facebook Pixel Helper
- [ ] Eventy przetestowane w Events Manager
- [ ] Custom Audiences utworzone
- [ ] Lookalike Audiences utworzone
- [ ] Kampanie reklamowe skonfigurowane z Pixel tracking

---

**Data wdrożenia:** 2026-02-05  
**Wersja dokumentacji:** 1.0  
**Pixel ID:** 1697874877112609  
**Autor:** Manus AI Agent
