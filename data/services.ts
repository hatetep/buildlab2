export type WorkflowStep = { t: string; d: string };
export type FaqItem = { q: string; a: string };

export type ServicePricing = {
  from: string;
  timelineFast: string;
  timelineFull: string;
  timelineFastLabel?: string;
  timelineFullLabel?: string;
  note: string;
};

export type Service = {
  slug: string;
  icon: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; accent: string; description: string };
  intro: string;
  forWhom: string[];
  whatYouGet: string[];
  workflow: WorkflowStep[];
  pricing: ServicePricing;
  ctaLabel: string;
  techStack: string[];
  faq: FaqItem[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "nowa-strona-www",
    icon: "💻",
    meta: {
      title: "Nowa strona WWW od podstaw — projekt, kod, SEO",
      description:
        "Tworzymy szybkie strony internetowe od zera: indywidualny projekt, lekki kod (Next.js lub WordPress), techniczne SEO, hosting w cenie. Realizacja od 3 dni.",
    },
    hero: {
      eyebrow: "Strony WWW",
      title: "Nowa strona WWW",
      accent: "od podstaw",
      description:
        "Strony wizytówki, korporacyjne, portfolio i blogi. Projektujemy i kodujemy od zera, dopasowane do Twojej marki, branży i celów biznesowych.",
    },
    intro:
      "Strona internetowa to dziś pierwszy kontakt klienta z Twoją firmą — częściej niż wizytówka, telefon, czy nawet rozmowa twarzą w twarz. Jeśli ładuje się wolno, wygląda przeciętnie albo nie odpowiada na pytania, które klient ma w głowie, tracisz go w pierwszej minucie. Tworzymy strony, które działają inaczej: szybkie, czytelne, gotowe do indeksowania w Google od dnia publikacji. Każdy projekt zaczynamy od pytań o Twoich klientów i cele, a nie o kolory i fonty — bo dobry design to nie ozdoba, tylko narzędzie biznesowe.",
    forWhom: [
      "Firmy usługowe, które potrzebują profesjonalnej wizytówki online — kancelaria, biuro księgowe, klinika, agencja",
      "Startupy i nowe marki, które chcą zaistnieć z silną stroną od pierwszego dnia",
      "Producenci i usługodawcy z branż technicznych, gdzie liczy się klarowność oferty i autorytet",
      "Twórcy i specjaliści budujący markę osobistą — portfolio, blog, podstrona oferty",
      "Firmy z istniejącą stroną, która już nie spełnia oczekiwań — rebranding, zmiana strategii, nowe usługi",
    ],
    whatYouGet: [
      "Indywidualny projekt graficzny — bez gotowych szablonów, dopasowany do Twojej marki",
      "Wybór technologii pod sytuację: Next.js (szybkość, SEO, skalowalność) lub WordPress (samodzielna edycja przez nietechnicznych użytkowników)",
      "Projektowanie z myślą o mobile — większość ruchu z telefonów, więc tam zaczynamy",
      "Techniczne SEO od pierwszego dnia: schema.org, sitemap.xml, robots.txt, struktura nagłówków, canonical, Core Web Vitals",
      "CMS — możesz sam edytować treści, dodawać podstrony, zmieniać zdjęcia i opisy bez pomocy programisty",
      "Hosting na wydajnych serwerach (Cloudflare lub Vercel) + domena + SSL w cenie pierwszego roku",
      "Szkolenie z obsługi po publikacji + dokumentacja PDF",
      "3 miesiące wsparcia gwarancyjnego — naprawiamy bezpłatnie wszelkie błędy techniczne",
    ],
    workflow: [
      {
        t: "Brief i strategia",
        d: "Poznajemy Twoją firmę, klientów, konkurencję. Ustalamy cele strony i mapę treści. Pierwsze decyzje techniczne — Next.js czy WordPress, które integracje są potrzebne.",
      },
      {
        t: "Projekt graficzny",
        d: "Tworzymy szkice układu i pełny projekt w Figmie. Iterujemy razem z Tobą — dopóki nie powiesz, że to jest to. Sprawdzamy wersję mobilną i desktopową.",
      },
      {
        t: "Programowanie",
        d: "Kodujemy stronę. Co 1–3 dni dostajesz dostęp do wersji roboczej, możesz przeglądać i komentować na bieżąco. Optymalizujemy Core Web Vitals na końcu fazy.",
      },
      {
        t: "Publikacja i wsparcie",
        d: "Migrujemy treści, ustawiamy domenę i SSL, konfigurujemy Search Console i analitykę. Po publikacji — 3 miesiące gwarancji i opcja wejścia w abonament utrzymania.",
      },
    ],
    pricing: {
      from: "od 1 599 zł netto",
      timelineFast: "3–7 dni",
      timelineFull: "1–2 tygodnie",
      note: "Cena startowa dotyczy strony wizytówki (do 5 podstron). Większe projekty wyceniamy indywidualnie po briefie.",
    },
    ctaLabel: "Wyceń stronę",
    techStack: ["Next.js 14", "WordPress 6", "Tailwind CSS", "Sanity / Strapi", "Cloudflare Pages", "Vercel"],
    faq: [
      {
        q: "Ile kosztuje strona WWW?",
        a: "Wizytówka od 1 599 zł, strona firmowa od 3 999 zł, korporacyjna od 7 999 zł. Cena rośnie z liczbą podstron, integracjami i zakresem contentu. Wyślij brief — dokładną wycenę dostaniesz w jeden dzień roboczy.",
      },
      {
        q: "Ile czasu zajmuje wykonanie?",
        a: "Wizytówka: 3–7 dni samej pracy, 1–2 tygodnie z akceptacjami. Strona firmowa: 1–2 tygodnie pracy, 2–3 z buforem na poprawki. Najwięcej czasu zajmuje ustalenie treści, nie kod — dobry brief skraca cały proces o ok. 30%.",
      },
      {
        q: "Next.js czy WordPress — co wybrać?",
        a: "Next.js gdy zależy Ci na szybkości i nowoczesnym wyglądzie. WordPress gdy masz redaktorów bez HTML albo planujesz dużo treści (blog, kategorie). Decydujemy razem podczas briefu — nie ma jednej dobrej odpowiedzi.",
      },
      {
        q: "Czy mogę sam edytować treści po publikacji?",
        a: "Tak — każda strona ma CMS i szkolenie po publikacji. Drobne zmiany (literówka, zamiana zdjęcia) robisz sam w 30 sekund. WordPress ma klasyczny edytor, Next.js — Sanity lub Strapi.",
      },
      {
        q: "Co dostaję po zakończeniu?",
        a: "Pełen kod źródłowy, pliki Figma, wszystkie hasła i dostępy oraz dokumentację PDF. Strona jest 100% Twoją własnością — możesz ją przenieść do dowolnej innej agencji bez naszej zgody.",
      },
      {
        q: "Czy mam gwarancję na stronę?",
        a: "Tak — 3 miesiące gwarancji po publikacji: naprawiamy bezpłatnie wszelkie błędy techniczne. Po tym okresie możesz wejść w abonament utrzymania (od 199 zł/mies.) albo dalej pracować ad hoc.",
      },
    ],
    related: ["modernizacja-strony", "seo-pozycjonowanie", "branding"],
  },
  {
    slug: "sklep-internetowy",
    icon: "🛒",
    meta: {
      title: "Sklep internetowy zaprojektowany pod sprzedaż",
      description:
        "Tworzymy sklepy e-commerce na Shopify, WooCommerce lub headless. Krótka ścieżka zakupu, integracje płatności i logistyki, analityka konwersji. Od 7 999 zł.",
    },
    hero: {
      eyebrow: "E-commerce",
      title: "Sklep internetowy",
      accent: "zaprojektowany pod sprzedaż",
      description:
        "Shopify, WooCommerce lub dedykowane sklepy headless. Krótka ścieżka zakupu, integracje płatności i logistyki, analityka konwersji od pierwszego dnia.",
    },
    intro:
      "Sklep internetowy to nie strona z koszykiem — to maszyna do sprzedaży, która działa 24/7. Liczy się każde kliknięcie: od pierwszego wejścia, przez listę produktów, kartę produktu, dodanie do koszyka, aż po finalizację zamówienia. Każdy z tych kroków to potencjalne miejsce, w którym tracisz klienta. Budujemy sklepy z myślą o tym właśnie ścieżce — testujemy ją, mierzymy i optymalizujemy.",
    forWhom: [
      "Marki produktowe wchodzące do internetu — kosmetyki, odzież, akcesoria, żywność",
      "Firmy z istniejącym sklepem, który nie konwertuje — redesign i poprawa procesu zakupu",
      "Producenci sprzedający B2B i B2C jednocześnie — różne ceny, segmenty, panele",
      "Subskrypcje i sprzedaż cykliczna — diety pudełkowe, kawa miesięcznie, kursy",
      "Sklepy z konfiguratorem produktu lub niestandardowymi opcjami zamówienia",
    ],
    whatYouGet: [
      "Wybór platformy: Shopify, WooCommerce, sklep typu headless (np. Medusa, Saleor)",
      "Indywidualny projekt graficzny dopasowany do marki — bez korzystania z gotowych motywów",
      "Integracja płatności: Stripe, Przelewy24, BLIK, Apple Pay, Google Pay, raty",
      "Integracja logistyczna: InPost (paczkomaty + kurier), DHL, DPD, FedEx, własny magazyn",
      "Synchronizacja z magazynem lub ERP (Subiekt, Comarch, SAP) — opcja",
      "Zoptymalizowany proces zakupu: jeden ekran realizacji zamówienia, autouzupełnianie adresu, zakup bez zakładania konta",
      "Sprzedaż dodatkowa i krzyżowa, rekomendacje produktów na karcie i w koszyku",
      "Analityka e-commerce: GA4, Meta Pixel, raporty konwersji, lejki sprzedaży",
      "Szkolenie z obsługi sklepu (dodawanie produktów, zarządzanie zamówieniami, kupony)",
    ],
    workflow: [
      {
        t: "Audyt biznesu",
        d: "Analizujemy Twój asortyment, marże, kanały sprzedaży, konkurencję. Wybieramy platformę i projektujemy strukturę kategorii pod intencje zakupowe Twoich klientów.",
      },
      {
        t: "Projekt UX i graficzny",
        d: "Mapujemy ścieżkę zakupu od pierwszego wejścia po podziękowanie. Projektujemy listę produktów, kartę produktu, koszyk i finalizację zamówienia — każdy ekran osobno, bez kompromisów.",
      },
      {
        t: "Wdrożenie i integracje",
        d: "Stawiamy sklep, podłączamy płatności i logistykę, importujemy katalog produktów. Konfigurujemy automatyzacje: maile po porzuconym koszyku, wiadomości posprzedażowe, segmenty newsletterowe.",
      },
      {
        t: "Testy i publikacja",
        d: "Pełne testy zakupowe na różnych urządzeniach. Konfiguracja Search Console, GA4, Meta Pixel. Pierwsza kampania reklamowa w opcji — zwykle Google Shopping lub Meta Ads.",
      },
    ],
    pricing: {
      from: "od 7 999 zł netto",
      timelineFast: "1–2 tygodnie",
      timelineFull: "3–4 tygodnie",
      note: "Cena startowa dotyczy sklepu na Shopify do 50 produktów. Sklepy z integracją ERP, konfiguratorem produktu lub obsługą wielu walut wyceniamy indywidualnie.",
    },
    ctaLabel: "Wyceń sklep",
    techStack: ["Shopify", "WooCommerce + WordPress", "Medusa.js", "Stripe", "Przelewy24", "InPost API"],
    faq: [
      {
        q: "Ile kosztuje sklep internetowy?",
        a: "Sklep Start (do 50 produktów) — od 7 999 zł. Sklep Pro (do 500 produktów, integracje ERP) — od 15 999 zł. Większe lub headless wyceniamy indywidualnie. Cena obejmuje projekt, kod, integracje płatności i logistyki, szkolenie.",
      },
      {
        q: "Shopify czy WooCommerce — co wybrać?",
        a: "Shopify gdy chcesz minimum technicznych zmartwień i sklep gotowy do skalowania. WooCommerce gdy zależy Ci na pełnej kontroli kodu i niskim koszcie stałym. Sklep typu headless — przy bardzo dużych sklepach. Pomagamy wybrać po briefie.",
      },
      {
        q: "Ile produktów obsłuży mój sklep?",
        a: "Shopify komfortowo do 10 000 produktów. WooCommerce z dobrym hostingiem — do 5 000. Sklepy headless — bez praktycznego limitu.",
      },
      {
        q: "Czy mogę zaimportować produkty z obecnego sklepu?",
        a: "Tak — importujemy z CSV, przez API albo z plików dostawców. Migrujemy zdjęcia, opisy, kategorie, ceny i opinie.",
      },
      {
        q: "Czy sklep będzie się pozycjonować w Google?",
        a: "Tak — techniczne fundamenty SEO robimy od pierwszego dnia: schema.org Product, poprawne URL, meta tagi per produkt, sitemap, szybkie ładowanie.",
      },
      {
        q: "Co z integracjami z ERP, kurierami, marketplace'ami?",
        a: "Integrujemy z popularnymi systemami: Subiekt, Comarch, SAP, BaseLinker (Allegro/eBay/Amazon z jednego panelu), InPost, DHL, DPD.",
      },
    ],
    related: ["seo-pozycjonowanie", "landing-page", "stala-opieka"],
  },
  {
    slug: "landing-page",
    icon: "🚀",
    meta: {
      title: "Landing page pod kampanię reklamową",
      description:
        "Strona kampanii dopracowana pod jeden cel. Testy A/B, mapy ciepła, iteracje na danych. Pełna integracja z Google Ads, Meta, LinkedIn. Realizacja od 1 dnia.",
    },
    hero: {
      eyebrow: "Landing page",
      title: "Landing page,",
      accent: "który zamienia ruch w zapytania",
      description:
        "Strona kampanii dopracowana pod jeden cel — pozyskanie kontaktu lub sprzedaży. Testy A/B, mapy ciepła, iteracje na danych marketingowych.",
    },
    intro:
      "Landing page to strona, która ma zrobić jedną rzecz dobrze: zamienić odwiedzającego w klienta. Nie informować, nie inspirować, nie reprezentować całej marki — tylko przekonać do jednej akcji.",
    forWhom: [
      "Firmy uruchamiające kampanię reklamową — Google Ads, Meta Ads, LinkedIn Ads",
      "Twórcy nowych produktów lub usług, którzy testują pomysł na rynku przed pełnym wdrożeniem",
      "Sprzedawcy oferujący jeden flagowy produkt (kurs, e-book, konsultacja)",
      "Wydarzenia, webinary, konferencje — strony rejestracji",
      "Sklepy chcące zwiększyć konwersję pojedynczego produktu lub sezonowej promocji",
    ],
    whatYouGet: [
      "Strategia konwersji — przekaz, hierarchia treści, struktura sekcji pod konkretną kampanię",
      "Indywidualny projekt graficzny pod jeden cel — bez nawigacji do pobocznych podstron",
      "Testy A/B nagłówków, przycisków akcji, głównego obrazu, struktury formularza",
      "Pełna integracja z kampaniami: piksele Google Ads, Meta, LinkedIn, zdarzenia GA4",
      "Mapy ciepła i nagrywanie sesji (Hotjar lub Microsoft Clarity)",
      "Iteracje co tydzień przez pierwsze 4 tygodnie — optymalizacja na danych, nie domysłach",
      "Formularz zintegrowany z CRM lub narzędziem mailowym (Mailchimp, ActiveCampaign, HubSpot)",
      "Sekwencja maili po zostawieniu kontaktu — automatyczne podgrzewanie zainteresowania",
    ],
    workflow: [
      {
        t: "Cel i przekaz",
        d: "Definiujemy precyzyjnie jedną akcję, którą ma wykonać użytkownik. Piszemy hipotezę: kim jest grupa docelowa, czego się obawia, co ją skłoni do kliknięcia.",
      },
      {
        t: "Projekt i treści",
        d: "Tworzymy strukturę landingu (sekcja główna → korzyści → dowody społeczne → FAQ → CTA), piszemy teksty pod konkretną kampanię.",
      },
      {
        t: "Wdrożenie i pomiar",
        d: "Kodujemy stronę z naciskiem na szybkość ładowania. Konfigurujemy piksele, zdarzenia w GA4, integrację z CRM.",
      },
      {
        t: "Iteracje i wzrost",
        d: "Przez pierwsze 4 tygodnie analizujemy dane, robimy testy A/B, zmieniamy nagłówki i przyciski akcji.",
      },
    ],
    pricing: {
      from: "od 999 zł",
      timelineFast: "1–2 dni",
      timelineFull: "3–5 dni",
      note: "Standardowy landing page bez testów A/B i integracji CRM. Pełen pakiet z optymalizacją kampanii — od 2 999 zł.",
    },
    ctaLabel: "Wyceń landing",
    techStack: ["Next.js", "Astro", "Hotjar", "Microsoft Clarity", "GA4", "Mailchimp / ActiveCampaign"],
    faq: [
      {
        q: "Ile kosztuje landing page?",
        a: "Standardowy — od 999 zł. Pełny pakiet z testami A/B — od 2 999 zł.",
      },
      {
        q: "Ile czasu zajmuje wykonanie?",
        a: "Sama strona — 1–5 dni. Skuteczny landing dojrzewa przez 4–8 tygodni iteracji.",
      },
      {
        q: "Czy obietnica konkretnej konwersji jest realistyczna?",
        a: "Nie obiecujemy konkretnych liczb — zależą od jakości ruchu, oferty, branży. Naszym celem jest stopniowo podnosić wyniki.",
      },
      {
        q: "Jak wygląda integracja z moimi narzędziami?",
        a: "Formularz może wysyłać dane do e-mail, CRM (HubSpot, Pipedrive, ActiveCampaign). Plus piksele kampanii — wszystko skonfigurowane przed startem.",
      },
    ],
    related: ["nowa-strona-www", "seo-pozycjonowanie", "branding"],
  },
  {
    slug: "modernizacja-strony",
    icon: "🔧",
    meta: {
      title: "Modernizacja strony WWW bez utraty pozycji",
      description:
        "Twoja strona działa, ale wygląda przestarzale lub ładuje się wolno? Odświeżamy design, optymalizujemy wydajność, zachowujemy ranking SEO. Od 1 199 zł.",
    },
    hero: {
      eyebrow: "Modernizacja",
      title: "Modernizacja",
      accent: "istniejącej strony",
      description:
        "Twoja strona działa, ale wygląda przestarzale, ładuje się wolno albo nie konwertuje? Odświeżamy projekt, UX i wydajność — bez utraty pozycji w Google.",
    },
    intro:
      "Modernizacja strony jest trudniejsza niż budowanie od zera — bo trzeba pogodzić zmianę z zachowaniem tego, co dobrze działa.",
    forWhom: [
      "Firmy z istniejącą stroną sprzed 5+ lat — wygląda przestarzale, ale ma duży ruch",
      "Sklepy, w których konwersja spadła i nie wiadomo dlaczego",
      "Strony z dobrą pozycją w Google — nie chcesz stracić rankingu",
      "Strony, które nie działają na mobile lub mają problemy z dostępnością (WCAG)",
      "Firmy zmieniające markę, nazwę lub pozycjonowanie",
    ],
    whatYouGet: [
      "Audyt obecnej strony przed startem — co działa dobrze, co trzeba zostawić, co wymienić",
      "Odświeżenie interfejsu z zachowaniem struktury treści i adresów URL",
      "Optymalizacja Core Web Vitals i wydajności (LCP, INP, CLS)",
      "Migracja na nowoczesną technologię lub odświeżenie obecnej",
      "Pełna mapa przekierowań 301 — żaden adres URL nie ginie",
      "Dostosowanie do mobile i dostępności WCAG 2.1 AA",
      "Monitoring pozycji w Google Search Console przez pierwsze 4 tygodnie po publikacji",
      "Pełne testy przed wdrożeniem — bez przerwy w działaniu strony",
    ],
    workflow: [
      {
        t: "Audyt obecnej strony",
        d: "Analizujemy ruch, pozycje SEO, konwersje, listę adresów URL, problemy techniczne.",
      },
      {
        t: "Plan migracji",
        d: "Tworzymy mapę adresów URL stary → nowy. Plan przekierowań 301. Strategia treści.",
      },
      {
        t: "Wdrożenie na środowisku testowym",
        d: "Pracujemy na osobnym środowisku, niezależnym od produkcji. Klient widzi postępy bez ryzyka dla obecnej strony.",
      },
      {
        t: "Migracja produkcyjna",
        d: "Przepinamy stronę nocą — bez przerwy w działaniu. Przez pierwsze 4 tygodnie monitorujemy pozycje i ruch.",
      },
    ],
    pricing: {
      from: "od 1 199 zł",
      timelineFast: "3–7 dni",
      timelineFull: "1–2 tygodnie",
      note: "Cena startowa dotyczy małej strony wizytówki. Modernizacja sklepów lub portali z setkami URL wyceniamy po audycie.",
    },
    ctaLabel: "Wyceń modernizację",
    techStack: ["Next.js", "WordPress", "Tailwind CSS", "Screaming Frog", "Google Search Console", "Cloudflare"],
    faq: [
      {
        q: "Ile kosztuje modernizacja vs nowa strona?",
        a: "Zwykle 50–70% ceny nowej strony — od 1 199 zł dla wizytówki. Po audycie mówimy szczerze co się opłaca.",
      },
      {
        q: "Jak nie stracić pozycji w Google?",
        a: "Zachowujemy stare adresy URL, robimy przekierowania 301, zachowujemy strukturę treści. Po publikacji 4 tygodnie monitoringu.",
      },
      {
        q: "Czy będzie przerwa w działaniu?",
        a: "Nie. Pracujemy na osobnym środowisku testowym, przepinamy DNS nocą.",
      },
    ],
    related: ["nowa-strona-www", "audyt-strony", "seo-pozycjonowanie"],
  },
  {
    slug: "audyt-strony",
    icon: "🔍",
    meta: {
      title: "Audyt strony WWW — UX, SEO, wydajność",
      description:
        "Pełna diagnoza strony: UX, SEO techniczne, Core Web Vitals, dostępność WCAG, bezpieczeństwo. Otrzymujesz raport z konkretnymi priorytetami. Od 399 zł.",
    },
    hero: {
      eyebrow: "Audyt",
      title: "Audyt strony",
      accent: "WWW",
      description:
        "Pełna diagnoza Twojej strony: UX, SEO, wydajność, dostępność, bezpieczeństwo. Otrzymujesz pisemny raport z listą priorytetów i szacunkowym kosztem napraw.",
    },
    intro:
      "Czasem Twoja strona robi coś źle, ale nie wiesz co. Audyt to systematyczna analiza w 5 obszarach: UX, SEO, wydajność, dostępność, bezpieczeństwo.",
    forWhom: [
      "Firmy z istniejącą stroną, które chcą wiedzieć co poprawić",
      "Inwestorzy i kupujący biznes online — weryfikacja techniczna",
      "Firmy z problemem konwersji, pozycji lub szybkości",
      "Strony wymagające certyfikatu WCAG 2.1 lub zgodności z EAA",
      "Sklepy przed sezonem szczytu — sprawdzenie wytrzymałości",
    ],
    whatYouGet: [
      "Audyt UX — heurystyki Nielsena, mapa ścieżek użytkownika",
      "Audyt SEO techniczne — meta tagi, schema.org, sitemap, robots.txt",
      "Audyt SEO treściowy — analiza słów kluczowych, luki treściowe",
      "Audyt wydajności — Core Web Vitals, czas odpowiedzi, waga zasobów",
      "Audyt dostępności (WCAG 2.1 AA)",
      "Audyt bezpieczeństwa — SSL/TLS, nagłówki HTTP",
      "Pisemny raport PDF (~15–45 stron) z listą priorytetów",
      "Krótkie odpowiedzi na pytania mailowo po przekazaniu raportu",
    ],
    workflow: [
      {
        t: "Konfiguracja i dostępy",
        d: "Otrzymujemy dostępy do Search Console i GA4. Określamy zakres audytu.",
      },
      {
        t: "Skanowanie automatyczne",
        d: "Używamy: Lighthouse, Screaming Frog, axe DevTools, Mozilla Observatory, GTmetrix.",
      },
      {
        t: "Analiza manualna",
        d: "Klikanie przez stronę, próby ścieżek użytkownika, analiza struktury treści.",
      },
      {
        t: "Raport i przekazanie",
        d: "Pisemny raport PDF. Każdy problem dostaje priorytet i szacunkowy koszt naprawy.",
      },
    ],
    pricing: {
      from: "od 399 zł",
      timelineFast: "1–3 dni",
      timelineFull: "3–5 dni",
      timelineFastLabel: "Strona standardowa",
      timelineFullLabel: "Sklep lub większy serwis",
      note: "Audyt jest darmowy, gdy zlecasz u nas naprawę lub nową stronę — koszt zaliczany na poczet projektu.",
    },
    ctaLabel: "Zamów audyt",
    techStack: ["Lighthouse", "Screaming Frog", "axe DevTools", "Mozilla Observatory", "GTmetrix", "GA4"],
    faq: [
      {
        q: "Ile kosztuje audyt?",
        a: "Strona standardowa — od 399 zł. Sklep lub serwis — od 599 zł. Audyt jest darmowy, gdy zlecasz u nas naprawę lub nową stronę.",
      },
      {
        q: "Ile trwa audyt i co dostaję?",
        a: "1–3 dni dla strony standardowej. Otrzymujesz raport PDF z problemami podzielonymi na priorytety.",
      },
      {
        q: "Czy mogę zlecić tylko audyt, bez naprawy?",
        a: "Tak — audyt to niezależna usługa.",
      },
      {
        q: "Czym audyt różni się od PageSpeed?",
        a: "Lighthouse pokazuje ~30% obrazu. Nasz audyt obejmuje też UX, treści, dostępność i bezpieczeństwo.",
      },
    ],
    related: ["modernizacja-strony", "seo-pozycjonowanie", "stala-opieka"],
  },
  {
    slug: "seo-pozycjonowanie",
    icon: "📈",
    meta: {
      title: "SEO i pozycjonowanie organiczne stron WWW",
      description:
        "Stały wzrost ruchu z Google bez kupowania kliknięć. Techniczne SEO, treści pod intencje wyszukiwania, link building. Abonament od 999 zł / mies.",
    },
    hero: {
      eyebrow: "SEO i pozycjonowanie",
      title: "SEO i pozycjonowanie",
      accent: "organiczne",
      description:
        "Stały wzrost ruchu z Google bez kupowania każdego kliknięcia. Techniczne SEO, treści pod intencje wyszukiwania, link building, mierzenie efektów.",
    },
    intro:
      "SEO to inwestycja, nie kampania. Ruch z Google jest tańszy niż reklamy w długiej perspektywie, ale wymaga czasu — pierwsze efekty po 4–8 tygodniach, stabilny wzrost po 3–6 miesiącach.",
    forWhom: [
      "Firmy z istniejącą stroną, ale niewidzialne w Google",
      "Sklepy, które chcą zmniejszyć zależność od płatnych reklam",
      "Branże B2B z długim cyklem sprzedaży",
      "Lokalne firmy chcące być widoczne na frazy z miastem",
      "Firmy planujące ekspansję do nowych segmentów",
    ],
    whatYouGet: [
      "Techniczne SEO — schema.org, sitemap, robots.txt, canonical, Core Web Vitals",
      "Analiza słów kluczowych — mapa intencji, luki treściowe wobec konkurencji",
      "Marketing treści — 2–5 artykułów miesięcznie pod konkretne frazy",
      "Optymalizacja na stronie — meta tagi, nagłówki, linkowanie wewnętrzne",
      "Pozyskiwanie linków z wartościowych domen",
      "Lokalne SEO — Google Business Profile, spójność danych NAP",
      "Miesięczny raport — pozycje, ruch organiczny, konwersje",
      "Cotygodniowe spotkania robocze",
    ],
    workflow: [
      {
        t: "Audyt i strategia",
        d: "Pełen audyt SEO. Analiza konkurencji. Mapa słów kluczowych z priorytetami. Plan działań na 6 miesięcy.",
      },
      {
        t: "Optymalizacja techniczna",
        d: "Pierwsze 4–6 tygodni: Core Web Vitals, struktura URL, schema.org, indeksacja.",
      },
      {
        t: "Treści i linki",
        d: "Od 2 miesiąca regularne publikacje i pozyskiwanie linków.",
      },
      {
        t: "Pomiar i iteracja",
        d: "Co miesiąc raport z pozycji, ruchu, konwersji. Co kwartał weryfikacja strategii.",
      },
    ],
    pricing: {
      from: "abonament od 999 zł / mies.",
      timelineFast: "4–8 tygodni",
      timelineFull: "min. 6 miesięcy",
      timelineFastLabel: "Pierwsze efekty",
      timelineFullLabel: "Pełne efekty",
      note: "Pakiet startowy: techniczne SEO + 2 artykuły + raport. Większy pakiet (5 artykułów + link building) — od 2 499 zł / mies.",
    },
    ctaLabel: "Zacznij współpracę SEO",
    techStack: ["Google Search Console", "Screaming Frog", "Ahrefs", "Semrush", "GA4", "schema.org"],
    faq: [
      {
        q: "Ile kosztuje SEO?",
        a: "Pakiet startowy — od 999 zł/mies. Większy pakiet — od 2 499 zł/mies. Bez umów na 12 miesięcy.",
      },
      {
        q: "Kiedy zobaczę pierwsze efekty?",
        a: "Pierwsze ruchy w Search Console — 2–4 tygodnie. Wyraźny wzrost ruchu — 3–4 miesiące.",
      },
      {
        q: "Czy gwarantujecie konkretne pozycje?",
        a: "Nie — i nikt uczciwy nie powinien. Obiecujemy pracę, przejrzyste raporty i regularne treści.",
      },
    ],
    related: ["nowa-strona-www", "audyt-strony", "stala-opieka"],
  },
  {
    slug: "branding",
    icon: "🎨",
    meta: {
      title: "Branding i identyfikacja wizualna firmy",
      description:
        "Logo, kolory, typografia, brand book. Spójna marka online i offline — od strony WWW po wizytówki. Strategia + projekt + materiały. Od 1 999 zł.",
    },
    hero: {
      eyebrow: "Branding",
      title: "Branding",
      accent: "i identyfikacja",
      description:
        "Logo, kolory, typografia, brand book. Spójna marka online i offline — od strony WWW po wizytówki, ofertę i social media.",
    },
    intro:
      "Branding to nie logo. Logo to jeden z elementów. Branding to całościowa odpowiedź na pytanie: jak ludzie mają zapamiętać Twoją firmę.",
    forWhom: [
      "Nowe firmy startujące — od razu z silną marką",
      "Firmy istniejące, których wizualna tożsamość nie nadąża za biznesem",
      "Marki rozwijające się w nową niszę",
      "Firmy łączące się lub przejmujące inne",
      "Marki osobiste — eksperci, konsultanci, twórcy",
    ],
    whatYouGet: [
      "Strategia marki — pozycjonowanie, persona, archetyp, kluczowe wartości",
      "Projekt logo — 3 różne propozycje, iteracje, finalna wersja w wektorze",
      "Identyfikacja wizualna — paleta kolorów, typografia, system ikon",
      "Brand book (~30–50 stron) z zasadami użycia",
      "Materiały marketingowe — wizytówki, papier firmowy, szablony social media",
      "Pliki źródłowe — wszystko w wektorze i bitmapach",
      "Przykłady zastosowania — jak logo wygląda na stronie, ofercie, billboardzie",
    ],
    workflow: [
      {
        t: "Strategia marki",
        d: "Warsztaty z Tobą — kim jesteś, dla kogo, co Cię wyróżnia. Analizujemy konkurencję wizualnie.",
      },
      {
        t: "Koncepcja wizualna",
        d: "3 różne propozycje logo + identyfikacji. Każda z innym charakterem — wybierasz kierunek.",
      },
      {
        t: "Finalizacja systemu",
        d: "Pełen system: kolory, typografia, ikonografia. Przykłady zastosowania.",
      },
      {
        t: "Brand book i wdrożenie",
        d: "Przekazujemy pliki źródłowe i brand book. Plus pomoc we wdrożeniu — strona WWW, social media.",
      },
    ],
    pricing: {
      from: "od 1 999 zł",
      timelineFast: "5–7 dni",
      timelineFull: "1–2 tygodnie",
      note: "Cena startowa: logo + paleta + typografia + brand book. Pełna identyfikacja z materiałami — od 4 999 zł.",
    },
    ctaLabel: "Wyceń branding",
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva Pro", "Google Fonts", "Brand.ai"],
    faq: [
      {
        q: "Ile kosztuje branding?",
        a: "Logo + paleta + typografia + brand book — od 1 999 zł. Pełna identyfikacja z materiałami — od 4 999 zł.",
      },
      {
        q: "Ile czasu zajmuje stworzenie marki?",
        a: "Strategia + identyfikacja + brand book — 2–4 tygodnie.",
      },
      {
        q: "Co jeśli nie spodoba mi się żadna propozycja?",
        a: "Robimy brief zwrotny i kolejną rundę 2–3 propozycji.",
      },
    ],
    related: ["nowa-strona-www", "landing-page", "modernizacja-strony"],
  },
  {
    slug: "stala-opieka",
    icon: "🛡️",
    meta: {
      title: "Stała opieka — hosting, aktualizacje, wsparcie",
      description:
        "Hosting, aktualizacje, kopie zapasowe, monitoring i wsparcie techniczne — zanim coś się zepsuje. Abonament od 199 zł / mies.",
    },
    hero: {
      eyebrow: "Utrzymanie",
      title: "Stała opieka nad stroną",
      accent: "bez gaszenia pożarów",
      description:
        "Hosting, aktualizacje, kopie zapasowe, monitoring i wsparcie techniczne — zanim coś się zepsuje. Twoja strona zawsze działa.",
    },
    intro:
      "Strona internetowa to nie produkt jednorazowy — to system, który wymaga dbania. WordPress aktualizuje się co 2–3 tygodnie. Bez systematycznego utrzymania strona pogarsza się stopniowo.",
    forWhom: [
      "Firmy z aktywną stroną generującą zapytania lub sprzedaż",
      "Sklepy internetowe — każda godzina niedziałania to utracona sprzedaż",
      "Strony WordPress wymagające regularnych aktualizacji",
      "Firmy bez własnego programisty",
      "Strony z formularzami i integracjami API",
    ],
    whatYouGet: [
      "Hosting na wydajnych serwerach (Cloudflare, Vercel, AWS)",
      "Codzienne kopie zapasowe (off-site) z 30-dniową retencją",
      "Aktualizacje CMS, wtyczek, bibliotek — co tydzień (Pro) lub co miesiąc (Light)",
      "Monitorowanie dostępności 24/7 + automatyczne alerty SMS/email",
      "Wsparcie techniczne email/telefon — czas reakcji do 24h (Light) lub 4h (Pro)",
      "Drobne zmiany w treści w cenie — do 2h (Pro) miesięcznie",
      "Miesięczny raport z aktualizacji i czasu działania",
      "Kontakt przez email lub Slack",
    ],
    workflow: [
      {
        t: "Przejęcie strony",
        d: "Przejmujemy stronę — dostępy do hostingu, CMS, domeny, analityki. Pełen audyt techniczny.",
      },
      {
        t: "Konfiguracja monitorowania",
        d: "Monitoring dostępności, alerty SMS/email, automatyczne kopie zapasowe.",
      },
      {
        t: "Cykl miesięczny",
        d: "Aktualizacje co tydzień/miesiąc, kopie codziennie, drobne zmiany w treści.",
      },
      {
        t: "Raport miesięczny",
        d: "Raport: aktualizacje, czas działania, zmiany w treści, planowane prace.",
      },
    ],
    pricing: {
      from: "abonament od 199 zł / mies.",
      timelineFast: "1 dzień roboczy",
      timelineFull: "co tydzień (Pro) lub miesiąc (Light)",
      timelineFastLabel: "Start opieki",
      timelineFullLabel: "Cykl prac",
      note: "Pakiet Light (199 zł/mies.) — aktualizacje miesięczne, 1h zmian, czas reakcji 24h. Pakiet Pro (449 zł/mies.) — aktualizacje tygodniowe, 2h zmian, telefon, czas reakcji 4h.",
    },
    ctaLabel: "Wybierz pakiet opieki",
    techStack: ["Cloudflare", "Vercel", "AWS", "UptimeRobot", "WordPress", "Slack"],
    faq: [
      {
        q: "Ile kosztuje stała opieka?",
        a: "Light — 199 zł/mies.: aktualizacje miesięczne, 1h zmian, 24h reakcja. Pro — 449 zł/mies.: aktualizacje tygodniowe, 2h zmian, telefon, 4h reakcja.",
      },
      {
        q: "Czy mogę zrezygnować w dowolnym momencie?",
        a: "Tak — wystarczy mail na 7 dni przed końcem okresu. Bez kar.",
      },
      {
        q: "Czy zajmujecie się stronami, których nie tworzyliście?",
        a: "Tak, przejmujemy każdą stronę. Obsługujemy WordPress, Next.js, Shopify, Webflow.",
      },
    ],
    related: ["nowa-strona-www", "audyt-strony", "seo-pozycjonowanie"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const allServiceSlugs = () => services.map((s) => s.slug);
