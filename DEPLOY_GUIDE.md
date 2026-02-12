# Instrukcja Wdrożenia Stałej Strony Liptus LP

Ten przewodnik pomoże Ci przenieść projekt z tymczasowego środowiska na stały serwer produkcyjny z podpiętą domeną `liptusquiz.com`.

## 🛠 Rekomendowana Platforma: Railway.app

Railway jest najprostszym rozwiązaniem dla tego projektu, ponieważ automatycznie obsłuży serwer Node.js (Express) oraz bazę danych MySQL.

### Krok 1: Przygotowanie Repozytorium
1. Utwórz nowe, prywatne repozytorium na swoim koncie **GitHub**.
2. Wgraj zawartość załączonej paczki ZIP do tego repozytorium.

### Krok 2: Wdrożenie na Railway
1. Zaloguj się na [Railway.app](https://railway.app/) za pomocą konta GitHub.
2. Kliknij **"New Project"** -> **"Deploy from GitHub repo"**.
3. Wybierz swoje repozytorium `liptus-landing-page`.
4. Railway automatycznie wykryje plik `railway.json` i zaproponuje konfigurację.

### Krok 3: Konfiguracja Zmiennych Środowiskowych
W panelu Railway (zakładka Variables) upewnij się, że masz ustawione następujące klucze (znajdziesz je w pliku `.env`):
- `SALESMANAGO_CLIENT_ID`
- `SALESMANAGO_API_KEY`
- `SALESMANAGO_API_SECRET`
- `SALESMANAGO_OWNER_EMAIL`
- `SALESMANAGO_ENDPOINT`
- `JWT_SECRET` (możesz wpisać dowolny silny ciąg znaków)

### Krok 4: Podpięcie Domeny liptusquiz.com
1. W panelu Railway przejdź do usługi backendowej.
2. Kliknij zakładkę **"Settings"** -> **"Domains"**.
3. Kliknij **"Custom Domain"** i wpisz `www.liptusquiz.com`.
4. Railway wyświetli Ci rekord **CNAME**, który musisz skopiować.

### Krok 5: Konfiguracja DNS (u Twojego dostawcy domeny)
Zaloguj się do panelu, gdzie kupiłeś domenę `liptusquiz.com` i ustaw:
- **Typ:** CNAME
- **Host:** www
- **Wartość:** (wklej adres otrzymany od Railway, np. `liptus-lp.up.railway.app`)

Dla głównej domeny (bez www) ustaw przekierowanie na `www.liptusquiz.com` lub dodaj rekord ALIAS/ANAME jeśli Twój dostawca na to pozwala.

---

## 🔒 Bezpieczeństwo i SSL
Railway automatycznie wygeneruje i odnowi certyfikat SSL (HTTPS) dla Twojej domeny, gdy tylko rekordy DNS zostaną poprawnie rozpropagowane (może to zająć od 1 do 24 godzin).

## 📊 Baza Danych
Projekt automatycznie połączy się z bazą MySQL utworzoną w Railway dzięki zmiennej `DATABASE_URL`. Przy pierwszym uruchomieniu system sam zainicjuje tabele użytkowników.

---
*Przygotowane przez Manus AI*
