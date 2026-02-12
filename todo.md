# Project TODO

## Integracja Facebook Pixel
- [x] Dodać Facebook Pixel (ID: 1697874877112609) do index.html
- [x] Skonfigurować tracking eventów w quizie (PageView, ViewContent, Lead, InitiateCheckout)
- [x] Przetestować eventy w Facebook Events Manager
- [x] Dodać dokumentację Facebook Pixel (FACEBOOK_PIXEL_INTEGRATION.md)

## SEO Optimization
- [x] Dodać meta description (50-160 znaków) do index.html
- [x] Dodać meta keywords do index.html
- [x] Dodać alt text do brakujących obrazków (2/2 - HeroSection, QuizHero)
- [ ] Zweryfikować SEO w Google Search Console

## Grafika edukacyjna TRPM8
- [x] Wygenerować nową grafikę medyczną TRPM8 (styl podręcznika anatomicznego - białe tło, czcionka Inter)
- [x] Upload grafiki do S3
- [x] Zastąpić starą grafikę w Home.tsx i HomeVariantB.tsx

## Animacja grafiki TRPM8
- [x] Stworzyć komponent AnimatedTRPM8 z Framer Motion
- [x] Dodać animacje cząsteczek (eukaliptol, menthol)
- [x] Dodać animacje aktywacji receptorów
- [x] Dodać animacje sygnału nerwowego do mózgu
- [x] Zastąpić statyczną grafikę w Home.tsx i HomeVariantB.tsx

## Google Tag Manager
- [x] Zastąpić Facebook Pixel kodem GTM (GTM-M7TJL95)
- [x] Dodać GTM script do head i body w index.html
- [x] Zaktualizować tracking eventów z fbPixel na gtm dataLayer

## SALESmanago Tracking Script
- [x] Dodać SALESmanago monitoring code do index.html
- [x] Dodać identyfikację użytkownika (smclient) po wypełnieniu quizu
- [x] Dodać tracking eventu quiz_completed
- [ ] Przetestować tracking w SALESmanago

## Naprawa tagów SALESmanago
- [x] Zdiagnozować dlaczego tagi nie są wysyłane do SALESmanago (tagi były wysyłane jako string zamiast array)
- [x] Naprawić kod backendu (server/salesmanago.ts - zmieniono tags z string na array, customFields na properties)
- [ ] Przetestować wysyłanie tagów do SALESmanago API

## Zmiana linków w quizie
- [x] Zmienić link "Dodaj do koszyka" na https://klaudynahebda.pl/sklep/ (wszystkie 9 produktów)

## Zmiana linku Olejku Liptus
- [x] Zmienić link Olejku Liptus® na https://klaudynahebda.pl/sklep/zatoki-i/

## Naprawa błędu SALESmanago 400
- [x] Sprawdzić logi serwera żeby zobaczyć dokładną odpowiedź z SALESmanago API (znaleziono błąd 400)
- [x] Naprawić format requestu - dodano pole owner, zmieniono properties na array, poprawiono requestTime na ms
- [ ] Przetestować wysyłanie danych do SALESmanago
