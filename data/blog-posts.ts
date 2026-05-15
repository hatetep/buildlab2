export type BlogSection = {
  type: "p" | "h2" | "h3" | "ul" | "quote" | "code";
  text?: string;
  items?: string[];
  lang?: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  hot: boolean;
  body: BlogSection[];
  takeaways: string[];
  related: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "core-web-vitals-2025",
    category: "Wydajność",
    title: "Core Web Vitals 2025 — wynik PageSpeed, który ma znaczenie",
    excerpt:
      "Konkretny przewodnik: LCP, INP, CLS. Co optymalizować jako pierwsze i jak mierzyć efekty.",
    date: "20 kwi 2025",
    time: "8 min",
    hot: true,
    body: [
      {
        type: "p",
        text: "Core Web Vitals to zestaw trzech wskaźników, które Google używa do oceny doświadczenia użytkownika na stronie. Od 2024 roku INP (Interaction to Next Paint) zastąpił FID jako oficjalny wskaźnik interaktywności. W 2025 roku pomiaru CWV dokonuje się na realnych użytkownikach — dane z Lighthouse to tylko wskazówka, nie decydujący wynik.",
      },
      {
        type: "h2",
        text: "LCP — Largest Contentful Paint",
      },
      {
        type: "p",
        text: "LCP mierzy czas od załadowania strony do wyrenderowania największego elementu widocznego w oknie — najczęściej hero image lub nagłówka H1. Dobry wynik to poniżej 2,5 sekundy. Złe LCP wynika głównie z trzech powodów: obraz hero jest za ciężki, font blokuje renderowanie, lub serwer odpowiada wolno.",
      },
      {
        type: "ul",
        items: [
          "Dodaj `<link rel=\"preload\" as=\"image\">` dla hero image w `<head>` — skraca LCP o 300–800ms",
          "Konwertuj obrazy do WebP lub AVIF — zmniejsza rozmiar o 40–60% bez utraty jakości",
          "Użyj `fetchpriority=\"high\"` na img LCP — przeglądarka pobiera go priorytetowo",
          "Wyeliminuj render-blocking CSS — inline krytyczne style, resztę ładuj async",
          "CDN z edge nodes blisko użytkownika skraca TTFB, co bezpośrednio poprawia LCP",
        ],
      },
      {
        type: "h2",
        text: "INP — Interaction to Next Paint",
      },
      {
        type: "p",
        text: "INP mierzy czas od interakcji użytkownika (kliknięcie, tap, wpisanie) do wyrenderowania kolejnej klatki. Dobry wynik to poniżej 200ms. Problemy z INP najczęściej wynikają z długich zadań JavaScript blokujących główny wątek przeglądarki.",
      },
      {
        type: "ul",
        items: [
          "Podziel długie zadania JS na mniejsze przy użyciu `scheduler.yield()` lub `setTimeout(0)`",
          "Lazy-load ciężkie biblioteki — GSAP, chart.js, player wideo — dopiero gdy są potrzebne",
          "Unikaj synchronicznych operacji DOM w event handlerach — używaj requestAnimationFrame",
          "Profiluj z Chrome DevTools Performance tab — szukaj zadań powyżej 50ms (Long Tasks)",
          "Rozważ przeniesienie obliczeń do Web Worker jeśli masz złożone operacje nieblokujące UI",
        ],
      },
      {
        type: "h2",
        text: "CLS — Cumulative Layout Shift",
      },
      {
        type: "p",
        text: "CLS mierzy sumę nieoczekiwanych przesunięć elementów w trakcie ładowania strony. Dobry wynik to poniżej 0,1. Najczęstsze przyczyny to brakujące wymiary obrazów, fonty bez size-adjust, i dynamicznie wstrzykiwana treść (bannery cookie, reklamy).",
      },
      {
        type: "ul",
        items: [
          "Zawsze podawaj width i height na elementach `<img>` — przeglądarka rezerwuje miejsce przed pobraniem",
          "Użyj `font-display: optional` lub `size-adjust` w @font-face — eliminuje FOUT/FOIT",
          "Dla dynamicznych treści (bannery, skeletons) rezerwuj miejsce z min-height",
          "Unikaj wstawiania treści nad fold po załadowaniu strony — to najgorszy CLS",
          "Animacje CSS transform/opacity nie generują CLS — używaj ich zamiast animowania top/left/margin",
        ],
      },
      {
        type: "h2",
        text: "Narzędzia do pomiaru",
      },
      {
        type: "p",
        text: "PageSpeed Insights pokazuje dane z Chrome User Experience Report (crUX) — to dane z realnych użytkowników Chrome w ciągu ostatnich 28 dni. Lighthouse w DevTools to dane z laboratorium (twój komputer + twoja sieć). Oba są potrzebne, ale crUX jest decydujący dla rankingu Google.",
      },
      {
        type: "ul",
        items: [
          "PageSpeed Insights (pagespeed.web.dev) — sprawdź wynik dla mobile i desktop osobno",
          "Search Console → Core Web Vitals — raport dla całej domeny w czasie",
          "Chrome DevTools → Performance → Web Vitals — szczegółowy profil",
          "web-vitals npm library — zbieranie metryk z realnych użytkowników do GA4",
          "GTmetrix — waterfall requests, filmstrip, analiza LCP element",
        ],
      },
      {
        type: "h2",
        text: "Kolejność optymalizacji",
      },
      {
        type: "p",
        text: "Jeśli masz ograniczony czas, zacznij od LCP — ma największy wpływ na ranking i doświadczenie użytkownika. Następnie CLS, bo złe przesunięcia są frustrujące. INP na końcu, chyba że strona jest wyjątkowo interaktywna. Zawsze mierz po każdej zmianie — niektóre optymalizacje mogą pogorszyć inne wskaźniki.",
      },
    ],
    takeaways: [
      "LCP poniżej 2,5s — preload hero image, WebP, CDN",
      "INP poniżej 200ms — unikaj Long Tasks, lazy-load JS",
      "CLS poniżej 0,1 — podawaj wymiary img, font-display: optional",
      "Mierz crUX (PSI), nie tylko Lighthouse — Google używa danych realnych",
      "Optymalizuj w kolejności: LCP → CLS → INP",
    ],
    related: ["seo-techniczne-podstawy", "next-js-dla-firm", "audyt-strony-www"],
  },
  {
    slug: "shopify-vs-woocommerce",
    category: "E-commerce",
    title: "Shopify czy WooCommerce — co wybrać w 2025?",
    excerpt:
      "Porównanie kosztów, możliwości, skalowalności. Z perspektywy agencji, która buduje na obu.",
    date: "5 kwi 2025",
    time: "10 min",
    hot: false,
    body: [
      {
        type: "p",
        text: "To pytanie zadaje co drugi klient e-commerce. I nie ma na nie jednej odpowiedzi — bo obie platformy mają swoje miejsca, w których wygrywają. Po kilkudziesięciu wdrożeniach na obu platformach widzimy wzorzec: Shopify wygrywa prostotą i szybkością startu, WooCommerce wygrywa elastycznością i kosztami przy dużej skali.",
      },
      {
        type: "h2",
        text: "Shopify — dla kogo?",
      },
      {
        type: "p",
        text: "Shopify to SaaS — płacisz miesięcznie za platformę, nie martwisz się o hosting, aktualizacje bezpieczeństwa, ani skalowanie serwera. Dla firmy, która chce się skupić na sprzedaży, a nie na zarządzaniu infrastrukturą, to często lepszy wybór.",
      },
      {
        type: "ul",
        items: [
          "Prosty start — sklep gotowy do sprzedaży w ciągu dnia, bez programisty",
          "Hosting, SSL, bezpieczeństwo, aktualizacje — wszystko w cenie abonamentu",
          "Shopify Payments — brak prowizji za bramkę, mniejsza liczba integracji",
          "Shopify Plus dla enterprise — nielimitowane konto pracownicze, B2B, wielojęzyczność",
          "Ekosystem aplikacji — ponad 8 000 wtyczek, ale najlepsze płatne",
        ],
      },
      {
        type: "h2",
        text: "WooCommerce — dla kogo?",
      },
      {
        type: "p",
        text: "WooCommerce to wtyczka do WordPressa — open source, instalujesz na własnym serwerze. Pełna kontrola nad kodem, bazą danych, i funkcjonalnością. Wymaga więcej technicznej wiedzy lub agencji, ale w zamian daje nieograniczoną elastyczność.",
      },
      {
        type: "ul",
        items: [
          "Zero prowizji od sprzedaży — Shopify pobiera 0,5–2% przy zewnętrznych bramkach",
          "Pełna kontrola nad kodem — możesz zrobić dosłownie wszystko",
          "Integracja z WordPress — blog, SEO treściowe, elastyczny CMS",
          "Tańszy przy niskich obrotach — hosting od 20–50 zł/mies., wtyczki często bezpłatne",
          "Wymaga więcej zarządzania — aktualizacje, bezpieczeństwo, backupy",
        ],
      },
      {
        type: "h2",
        text: "Porównanie kosztów",
      },
      {
        type: "p",
        text: "Porównanie kosztów w czasie jest kluczowe dla decyzji. Shopify ma przewidywalne koszty stałe, WooCommerce ma niższy koszt start, ale koszty skalowania i utrzymania mogą go dogonić przy większym sklepie.",
      },
      {
        type: "ul",
        items: [
          "Shopify Basic: 29 USD/mies. + 2% prowizji przy zewnętrznych bramkach",
          "Shopify Standard: 79 USD/mies. + 1% prowizji",
          "WooCommerce hosting: 20–100 zł/mies. + domeny + backup + dev czas",
          "Przy obrocie 50k/mies.: WooCommerce zwykle tańszy o 500–1000 zł/mies.",
          "Przy obrocie poniżej 10k/mies.: Shopify często korzystniejszy całościowo",
        ],
      },
      {
        type: "h2",
        text: "Co z headless e-commerce?",
      },
      {
        type: "p",
        text: "Coraz popularniejsze jest podejście headless — Shopify lub Medusa jako backend (koszyk, płatności, magazyn), a Next.js lub Astro jako frontend. Efekt: szybkość statycznej strony z pełnym backoffice'em e-commerce. To rozwiązanie dla większych sklepów z wymaganiami wydajnościowymi, ale koszt startu jest wyższy.",
      },
      {
        type: "h2",
        text: "Nasza rekomendacja",
      },
      {
        type: "p",
        text: "Wybierz Shopify jeśli: startujesz, nie masz dev na etat, chcesz skupić się na marketingu. Wybierz WooCommerce jeśli: masz WordPress blog z ruchem, chcesz pełną kontrolę, lub koszty Shopify przy Twoich obrotach są za wysokie. Headless — przy wyraźnych wymaganiach wydajnościowych lub bardzo specyficznym UX.",
      },
    ],
    takeaways: [
      "Shopify wygrywa prostotą, szybkością startu i przewidywalnymi kosztami",
      "WooCommerce wygrywa przy pełnej kontroli kodu i niskim koszcie przy mniejszej skali",
      "Prowizje Shopify przy zewnętrznych bramkach to 0,5–2% — liczy się przy dużym obrocie",
      "Headless (Shopify + Next.js) — dla wymagań wydajnościowych, wyższy koszt startu",
      "Przy wątpliwościach: Shopify na start, migracja gdy outgrowth",
    ],
    related: ["ux-checkout-ecommerce", "landing-page-konwersja", "core-web-vitals-2025"],
  },
  {
    slug: "landing-page-konwersja",
    category: "Konwersja",
    title: "10 zasad landing page'a, który skuteczniej zamienia ruch w zapytania",
    excerpt:
      "Co decyduje o konwersji: nagłówek, social proof, CTA, formularz. Z przykładami.",
    date: "22 mar 2025",
    time: "7 min",
    hot: true,
    body: [
      {
        type: "p",
        text: "Landing page to specyficzny rodzaj strony — nie wizytówka firmy, nie sklep, nie blog. To strona z jednym celem: skłonić konkretną grupę odbiorców do jednej konkretnej akcji. I właśnie dlatego rządzi się innymi prawami niż reszta strony internetowej.",
      },
      {
        type: "h2",
        text: "1. Jeden cel, jedno CTA",
      },
      {
        type: "p",
        text: "Najczęstszy błąd: landing z trzema przyciskami CTA ('Zapisz się', 'Pobierz demo', 'Zadzwoń'). Im więcej opcji, tym trudniejsza decyzja. Wybierz jedną akcję i powtarzaj ją co 2–3 sekcje, zmieniając tylko kontekst.",
      },
      {
        type: "h2",
        text: "2. Nagłówek odpowiada na pytanie 'co dostaję'",
      },
      {
        type: "p",
        text: "Użytkownik ma 3–5 sekund na decyzję czy zostać. Nagłówek musi w tym czasie odpowiedzieć na jedno pytanie: co dostaję. Nie kim jesteście, nie jak długo działacie — co JA z tego mam. Testuj nagłówki jako pierwsze w testach A/B.",
      },
      {
        type: "h2",
        text: "3. Social proof we właściwym miejscu",
      },
      {
        type: "p",
        text: "Social proof (opinie, logotypy klientów, liczby) jest najsilniejszy tuż przed formularzem — gdy użytkownik już jest przekonany do produktu, ale potrzebuje potwierdzenia. Logos 'zaufali nam' nad foldem to dobre miejsce jeśli są rozpoznawalne marki.",
      },
      {
        type: "ul",
        items: [
          "Opinie: imię + firma + konkretny wynik ('skróciłem czas wdrożenia o 3 tygodnie')",
          "Logotypy klientów — tylko jeśli są rozpoznawalne, inaczej nie działają",
          "Liczby — '2400 firm', 'od 2018 roku', 'SLA 99,9%' — konkretne, nie ogólne",
          "Gwiazdki i oceny — ważne w e-commerce, mniej w B2B",
          "Case studies zamiast opinii — gdy cykl sprzedaży jest dłuższy",
        ],
      },
      {
        type: "h2",
        text: "4. Formularz — mniej pól = więcej konwersji",
      },
      {
        type: "p",
        text: "Każde dodatkowe pole formularza obniża konwersję o 10–15%. Zapytaj tylko o to, co absolutnie niezbędne na tym etapie lejka. Numer telefonu jest opcjonalny — jeśli musisz go zbierać, oznacz wyraźnie 'opcjonalne'. Nazwa firmy tylko gdy jest potrzebna do kwalifikacji.",
      },
      {
        type: "h2",
        text: "5. Szybkość ładowania",
      },
      {
        type: "p",
        text: "Każda sekunda opóźnienia ładowania kosztuje 7% konwersji (badania Google, 2023). Landing page musi ładować się poniżej 2,5 sekundy LCP na mobile. To ważniejsze niż wygląd — szybka brzydka strona konwertuje lepiej niż wolna piękna.",
      },
      {
        type: "h2",
        text: "6–10. Pozostałe zasady",
      },
      {
        type: "ul",
        items: [
          "6. Brak nawigacji — usuń menu główne z landinga, zostaw tylko logo i CTA",
          "7. Above the fold — CTA powinno być widoczne bez scrollowania na desktop i mobile",
          "8. Mobilna wersja najpierw — większość ruchu z kampanii trafia na mobile",
          "9. FAQ tuż przed formularzem — usuwa ostatnie wątpliwości przed konwersją",
          "10. Dziękuję strona z next step — po zapisie zaproponuj następną akcję (webinar, demo call)",
        ],
      },
    ],
    takeaways: [
      "Jeden cel + jedno CTA — każde dodatkowe dzieli uwagę i obniża konwersję",
      "Nagłówek: 'co dostaję' — nie 'kim jesteśmy', nie 'od 2010 roku'",
      "Social proof tuż przed formularzem — najsilniejszy efekt tam",
      "Formularz: usuń każde nieobowiązkowe pole — każde obniża konwersję o ~10%",
      "Mierz przez Hotjar lub Clarity — heatmapy pokazują gdzie odpada uwaga",
    ],
    related: ["core-web-vitals-2025", "shopify-vs-woocommerce", "ux-checkout-ecommerce"],
  },
  {
    slug: "seo-techniczne-podstawy",
    category: "SEO",
    title: "SEO techniczne — 12 punktów, które musisz mieć",
    excerpt:
      "Sitemap, schema.org, robots.txt, canonical, hreflang. Lista, którą przejdziesz w godzinę.",
    date: "10 mar 2025",
    time: "9 min",
    hot: false,
    body: [
      {
        type: "p",
        text: "SEO techniczne to fundament — bez niego treści i linki nie działają tak efektywnie. Dobra wiadomość: większość technicznego SEO to praca jednorazowa, którą można wykonać w jeden dzień roboczy. Zła wiadomość: wiele stron ma podstawowe błędy, które blokują indeksację od lat.",
      },
      {
        type: "h2",
        text: "1–4: Indeksacja i crawlowanie",
      },
      {
        type: "ul",
        items: [
          "1. robots.txt — sprawdź czy nie blokujesz przypadkowo ważnych katalogów; `Disallow: /` to katastrofa",
          "2. sitemap.xml — generuj automatycznie, zgłoś w Search Console, aktualizuj przy nowych podstronach",
          "3. Canonical — każda strona powinna mieć self-referencing canonical; unikaj duplikatów",
          "4. Noindex sprawdź — czy strony z treścią nie mają przypadkowo `<meta name='robots' content='noindex'>`",
        ],
      },
      {
        type: "h2",
        text: "5–8: Dane strukturalne i meta",
      },
      {
        type: "ul",
        items: [
          "5. Schema.org Organization/LocalBusiness na stronie głównej — pozwala Google rozumieć firmę",
          "6. Schema.org Article na wpisach blogowych — data, autor, opis — rich snippets w wynikach",
          "7. Meta title — unikalny dla każdej strony, 50–60 znaków, słowo kluczowe blisko początku",
          "8. Meta description — 140–160 znaków, opis korzyści (nie tylko słowa kluczowe), CTA",
        ],
      },
      {
        type: "h2",
        text: "9–12: Wydajność i linki",
      },
      {
        type: "ul",
        items: [
          "9. Core Web Vitals — LCP <2,5s, INP <200ms, CLS <0,1 — szczegóły w osobnym artykule",
          "10. Linkowanie wewnętrzne — każda podstrona powinna być osiągalna w 3 kliknięciach od home",
          "11. Anchor text — linki wewnętrzne z opisowymi słowami kluczowymi, nie 'kliknij tutaj'",
          "12. HTTPS wszędzie — brak mixed content (HTTP zasobów na HTTPS stronie), HSTS header",
        ],
      },
      {
        type: "h2",
        text: "Narzędzia do weryfikacji",
      },
      {
        type: "p",
        text: "Screaming Frog (darmowy do 500 URL) przeskanuje całą stronę i pokaże błędy w jednym miejscu. Google Search Console pokazuje jak Google widzi Twoją stronę — raporty Core Web Vitals, indeksacja, błędy crawlowania. Ahrefs lub Semrush do profilu linków i rankingów.",
      },
      {
        type: "h2",
        text: "Najczęstsze błędy",
      },
      {
        type: "ul",
        items: [
          "Staging site bez `noindex` — Google indeksuje stronę testową",
          "Duplikaty z www i bez www — przekierowanie 301 na jeden wariant + canonical",
          "Strony paginacji bez rel=canonical lub rel=prev/next",
          "Obrazy bez alt text — tracisz ruch z Google Images i punkty za dostępność",
          "404 na ważnych stronach — sprawdzaj regularnie w Search Console",
        ],
      },
    ],
    takeaways: [
      "Sprawdź robots.txt pierwszego dnia — przypadkowe `Disallow: /` to częsty błąd",
      "Sitemap.xml + Search Console — podstawa monitorowania indeksacji",
      "Schema.org na każdej ważnej stronie — różnice w klikalności z Google",
      "Core Web Vitals wpływają na ranking — LCP i CLS pierwsze do naprawy",
      "Screaming Frog (darmowy) wystarczy do podstawowego audytu technicznego",
    ],
    related: ["core-web-vitals-2025", "redesign-strony-bez-utraty-seo", "audyt-strony-www"],
  },
  {
    slug: "redesign-strony-bez-utraty-seo",
    category: "Modernizacja",
    title: "Redesign strony bez utraty pozycji w Google — jak to zrobić?",
    excerpt:
      "Mapa 301, zachowanie URL, audyt przed i po. Krok po kroku.",
    date: "28 lut 2025",
    time: "11 min",
    hot: false,
    body: [
      {
        type: "p",
        text: "Redesign strony to jeden z najbardziej ryzykownych momentów dla SEO. Widziałem firmy, które po redesignie traciły 60–80% ruchu organicznego na kilka miesięcy. I takie, które wychodziły z redesignu ze wzrostem ruchu. Różnica tkwi w przygotowaniu.",
      },
      {
        type: "h2",
        text: "Audyt przed redesignem",
      },
      {
        type: "p",
        text: "Zanim zaczniesz projektować, zbierz dane o tym co obecnie działa. Które strony generują ruch organiczny? Które mają cenne linki zewnętrzne? Które konwertują? Te strony to Twój kapitał SEO — musisz go zachować.",
      },
      {
        type: "ul",
        items: [
          "Eksportuj wszystkie URL z Screaming Frog lub sitemap.xml",
          "Sprawdź w GA4 które strony mają największy ruch organiczny",
          "W Search Console pobierz raport zapytań dla każdej ważnej podstrony",
          "W Ahrefs/Semrush sprawdź które URL mają linki zewnętrzne (backlinks)",
          "Oznacz URL jako: zachować identyczne / zmienić URL (wymagane 301) / usunąć",
        ],
      },
      {
        type: "h2",
        text: "Mapa przekierowań 301",
      },
      {
        type: "p",
        text: "Przekierowanie 301 mówi Google: 'ta strona przeniosła się na nowy adres'. Google przekazuje ok. 90–99% wartości SEO (link equity) przez 301. Mapa to arkusz: stary URL → nowy URL. Jeden błąd w mapie może kosztować pozycje przez miesiące.",
      },
      {
        type: "ul",
        items: [
          "Stary URL → Nowy URL: dokładny adres, z HTTPS, bez trailing slash chyba że nowy też ma",
          "Redirect chains — unikaj łańcuchów 301 → 301 → 301, Google traci moc przy każdym skoku",
          "Nie redirectuj wszystkiego na home — to sygnał dla Google że treść nie istnieje",
          "Testuj przekierowania przed wdrożeniem — narzędzie httpstatus.io lub curl -I",
          "Zachowaj mapę po wdrożeniu — po kilku miesiącach możesz usunąć stare przekierowania",
        ],
      },
      {
        type: "h2",
        text: "Wdrożenie bez downtime",
      },
      {
        type: "p",
        text: "Pracuj na środowisku staging (osobna domena lub subdomena) z `noindex`. Nigdy nie wdrażaj zmian w piątek — cokolwiek pójdzie nie tak, będziesz naprawiać przez weekend. Optymalne okno: wtorek–środa rano.",
      },
      {
        type: "h2",
        text: "Monitoring po redesignie",
      },
      {
        type: "p",
        text: "Przez pierwsze 4 tygodnie po redesignie codziennie sprawdzaj Search Console — zakładkę Indeksacja i Core Web Vitals. Spadki pozycji w pierwszych 2 tygodniach są normalne (Google przelicza wartości stron). Jeśli po 4 tygodniach ruch nie wraca — szukaj błędów w przekierowaniach lub canonical.",
      },
      {
        type: "h2",
        text: "Najczęstsze błędy",
      },
      {
        type: "ul",
        items: [
          "Zmiana struktury URL bez mapy 301 — najczęstszy i najdroższy błąd",
          "Usunięcie treści, która miała linki zewnętrzne — bez przekierowania tracimy te linki",
          "Staging site bez noindex — Google indeksuje starą stronę w wersji testowej",
          "Zmiana anchor text linków wewnętrznych — Google to notice, może wpłynąć na pozycje",
          "Zbyt agresywne zmiany naraz — technologia + treść + URL + design jednocześnie",
        ],
      },
    ],
    takeaways: [
      "Audyt SEO przed redesignem — bez danych nie wiesz co chronić",
      "Mapa 301 dla każdego zmienionego URL — to najważniejszy plik w redesignie",
      "Nie redirectuj wszystkiego na home — każda strona do odpowiednika tematycznego",
      "Staging z noindex — nigdy nie wdrażaj na live bez testów na środowisku testowym",
      "Monitoring 4 tygodnie po wdrożeniu — Search Console codziennie",
    ],
    related: ["seo-techniczne-podstawy", "audyt-strony-www", "core-web-vitals-2025"],
  },
  {
    slug: "branding-w-startupie",
    category: "Branding",
    title: "Branding w startupie — kiedy i ile inwestować?",
    excerpt:
      "Czy potrzebujesz brand booka na starcie? Jakie elementy są kluczowe, a co może poczekać.",
    date: "15 lut 2025",
    time: "6 min",
    hot: false,
    body: [
      {
        type: "p",
        text: "Startup to sytuacja, w której każda złotówka budżetu jest decyzją strategiczną. Pytanie nie brzmi 'czy inwestować w branding' — branding zawsze istnieje, nawet gdy go nie projektujesz. Pytanie brzmi: kiedy i w co inwestować, żeby inwestycja miała sens.",
      },
      {
        type: "h2",
        text: "Etap 0–6 miesięcy: minimum viable brand",
      },
      {
        type: "p",
        text: "Na samym początku potrzebujesz minimum: logo, kolory (2–3), font (1–2), i ton komunikacji. To nie musi kosztować 10 000 zł — ale musi być spójne. Spójność jest ważniejsza niż perfekcja.",
      },
      {
        type: "ul",
        items: [
          "Logo — profesjonalne, skalowalne (wektor), działające w bieli i czerni",
          "2–3 kolory bazowe — główny, neutralny, ewentualnie akcent",
          "Font — jeden lub dwa. System (Google Fonts) jest OK na start",
          "Ton komunikacji — zdecyduj: formal vs casual, 'ty' vs 'Pan/Pani', techniczny vs przystępny",
          "Szablony social media — Canva wystarczy jeśli masz ustalone kolory i font",
        ],
      },
      {
        type: "h2",
        text: "Etap 6–18 miesięcy: rozbudowa systemu",
      },
      {
        type: "p",
        text: "Gdy masz produkt-market fit i pierwsze przychody, czas na inwestycję w spójny system. Brand book, ikonografia, system ilustracji, dokumenty ofertowe, prezentacje. W tym momencie brandingowa niespójność zaczyna kosztować — potencjalni klienci porównują Cię do dojrzałej konkurencji.",
      },
      {
        type: "h2",
        text: "Kiedy przeprojektować markę?",
      },
      {
        type: "p",
        text: "Trzy sygnały, że czas na rebranding: (1) pozycjonowanie się zmieniło — celujesz w inny segment lub premium, (2) rosjesz przez akwizycje i masz kilka niespójnych tożsamości, (3) marka evokuje coś czego nie chcesz kojarzyć. Rebranding to kosztowny projekt — lepiej zrobić go rzadziej i głębiej.",
      },
      {
        type: "h2",
        text: "Co możesz zrobić samodzielnie",
      },
      {
        type: "ul",
        items: [
          "Ton komunikacji — napisz 3–5 zdań opisujących jak mówisz do klientów; to brand voice",
          "Proste logo w Figma lub Canva — geometryczne formy, liternictwo, inicjały",
          "Paleta kolorów — coolors.co lub Figma Color Picker z harmonią kolorów",
          "Szablony w Canva — post social media, prezentacja, oferta PDF",
          "Ale: nie oszczędzaj na logo jeśli jesteś w premium — tu agencja ma sens",
        ],
      },
      {
        type: "h2",
        text: "Budżet: kiedy zatrudnić agencję",
      },
      {
        type: "p",
        text: "Agencję warto zatrudnić gdy: masz produkt potwierdzony przez rynek, chcesz się pozycjonować premium, lub skalujesz do nowych segmentów. Nie warto: przy MVP bez product-market fit, gdy nie masz budżetu na wdrożenie — logo bez systemu to tylko obrazek.",
      },
    ],
    takeaways: [
      "Na start: logo + 2-3 kolory + font + ton komunikacji — minimum viable brand",
      "Spójność > perfekcja — lepsza prosta spójna marka niż drogi chaos",
      "Agencję warto gdy masz PMF i celujesz w premium segment",
      "Rebranding przy: zmianie pozycjonowania, skalowaniu premium, akwizycjach",
      "Canva wystarczy do szablonów social media jeśli masz ustalone tokeny designu",
    ],
    related: ["landing-page-konwersja", "next-js-dla-firm", "seo-techniczne-podstawy"],
  },
  {
    slug: "next-js-dla-firm",
    category: "Technologia",
    title: "Next.js dla firm — dlaczego warto wybrać go w 2025",
    excerpt:
      "Plusy i minusy Next.js z perspektywy biznesu. Kiedy się sprawdza, a kiedy lepiej zostać przy WP.",
    date: "1 lut 2025",
    time: "8 min",
    hot: true,
    body: [
      {
        type: "p",
        text: "Next.js to framework React od Vercel — i jest dziś dominującym wyborem dla firmowych stron internetowych w środowisku agencji webowych na całym świecie. Ale jego popularność nie oznacza, że jest zawsze właściwym wyborem. Decyzja technologiczna powinna wynikać z potrzeb biznesowych, nie z trendów.",
      },
      {
        type: "h2",
        text: "Dlaczego Next.js wygrywa w performance",
      },
      {
        type: "p",
        text: "Next.js generuje strony statycznie podczas buildu (Static Site Generation — SSG). Wynikowy plik HTML trafia na CDN Cloudflare lub Vercel i jest serwowany z cache'u z datacenter blisko użytkownika. Czas odpowiedzi: 20–50ms zamiast 200–600ms przy PHP/WordPress. To bezpośrednio przekłada się na wyniki Core Web Vitals.",
      },
      {
        type: "ul",
        items: [
          "SSG — strona generowana raz przy deployu, potem serwowana z CDN — bez TTFB",
          "ISR — Incremental Static Regeneration — strona odświeżana co N sekund bez pełnego rebuildu",
          "Image Optimization — automatyczne WebP, lazy-loading, srcset — bez konfiguracji",
          "Font Optimization — automatyczne preloadowanie fontów Google/local — zero FOIT",
          "Bundle splitting — każda strona dostaje tylko potrzebny JS — mniejsze paczki",
        ],
      },
      {
        type: "h2",
        text: "App Router vs Pages Router",
      },
      {
        type: "p",
        text: "Od Next.js 13 istnieje nowy App Router (katalog app/) obok starszego Pages Router (katalog pages/). App Router umożliwia React Server Components — rendering na serwerze bez JS po stronie klienta. Dla firm: użyj App Router dla nowych projektów, Pages Router jeśli przejmujesz starszy projekt.",
      },
      {
        type: "h2",
        text: "Kiedy Next.js NIE jest właściwym wyborem",
      },
      {
        type: "ul",
        items: [
          "Gdy klient chce sam edytować treści bez programisty i bez nauki CMS — WordPress jest prosty",
          "Gdy budżet nie pozwala na agencję techniczną — WP z Elementorem jest tańszy",
          "Gdy projekt to prosty blog z 10 wpisami — Astro lub Hugo są szybsze do wdrożenia",
          "Gdy potrzebna jest rozbudowana WooCommerce/e-commerce z tysięcami produktów — Shopify",
          "Gdy zespół zna tylko PHP/WordPress i nie ma sensu zmieniać stosu",
        ],
      },
      {
        type: "h2",
        text: "Next.js i SEO",
      },
      {
        type: "p",
        text: "Next.js jest doskonały dla SEO z jednego powodu: serwuje gotowy HTML do crawlera Google. Nie ma problemu z 'JavaScript SEO' — Google nie musi wykonywać JS żeby zindeksować treść. Metadata API w App Router pozwala generować meta tagi dynamicznie dla każdej podstrony.",
      },
      {
        type: "h2",
        text: "CMS do Next.js",
      },
      {
        type: "p",
        text: "Next.js nie ma wbudowanego CMS — dane mogą pochodzić skądkolwiek: pliki Markdown, Sanity, Contentful, Strapi, Notion API, Google Sheets. Najpopularniejszy wybór to Sanity (real-time, dobre DX) lub Markdown (dla developerów). Dla klientów bez technicznej wiedzy — Sanity Studio jest intuicyjne.",
      },
    ],
    takeaways: [
      "Next.js SSG + CDN to najlepsza architektura dla Core Web Vitals",
      "App Router (React Server Components) dla nowych projektów — mniejszy bundle JS",
      "WordPress nadal wygrywa gdy: klient edytuje sam, prosty blog, małe projekty",
      "Metadata API w Next.js = SEO bez konfiguracji dla każdej podstrony",
      "Sanity lub Markdown jako CMS do Next.js — wybór zależy od profilu klienta",
    ],
    related: ["core-web-vitals-2025", "seo-techniczne-podstawy", "shopify-vs-woocommerce"],
  },
  {
    slug: "audyt-strony-www",
    category: "Audyt",
    title: "Jak zrobić mini-audyt strony WWW samodzielnie",
    excerpt:
      "10 narzędzi i listy kontrolne, które pozwolą Ci ocenić stan własnej strony.",
    date: "18 sty 2025",
    time: "9 min",
    hot: false,
    body: [
      {
        type: "p",
        text: "Pełny audyt strony wykonany przez agencję to kilka dni pracy i raport na 30+ stron. Ale 80% najważniejszych problemów możesz znaleźć samodzielnie w 2–3 godziny, korzystając z darmowych narzędzi. Ten przewodnik pokazuje jak.",
      },
      {
        type: "h2",
        text: "Krok 1: Wydajność i Core Web Vitals",
      },
      {
        type: "p",
        text: "Zacznij od PageSpeed Insights (pagespeed.web.dev). Wpisz URL strony głównej i sprawdź wyniki dla mobile i desktop osobno. Wyniki poniżej 50 w mobile to sygnał, że strona ma poważne problemy wydajnościowe, które mogą blokować pozycje w Google.",
      },
      {
        type: "ul",
        items: [
          "pagespeed.web.dev — wyniki mobile i desktop, Core Web Vitals, konkretne sugestie",
          "gtmetrix.com — waterfall requests, filmstrip, które zasoby są najcięższe",
          "webpagetest.org — test z różnych lokalizacji, TTFB, visual complete",
          "Sprawdź TTFB — powyżej 600ms to problem serwera lub CDN",
          "Sprawdź LCP element — co jest najwolniejsze: obraz, font, czy tekst?",
        ],
      },
      {
        type: "h2",
        text: "Krok 2: SEO techniczne",
      },
      {
        type: "ul",
        items: [
          "search.google.com/search-console — sprawdź indeksację, błędy crawlowania, Core Web Vitals",
          "Wpisz `site:twojadomena.pl` w Google — które strony są zaindeksowane?",
          "Sprawdź robots.txt (twojadomena.pl/robots.txt) — czy nie blokujesz ważnych katalogów?",
          "Sprawdź sitemap.xml (twojadomena.pl/sitemap.xml) — czy istnieje i jest aktualna?",
          "Screaming Frog (darmowy do 500 URL) — skanuje cały serwis pod kątem błędów SEO",
        ],
      },
      {
        type: "h2",
        text: "Krok 3: UX i dostępność",
      },
      {
        type: "ul",
        items: [
          "Chrome DevTools → Lighthouse → Accessibility — wynik i lista błędów",
          "wave.webaim.org — wizualna analiza dostępności: kontrasty, labele formularzy, alt text",
          "Sprawdź manualnie: czy strona działa bez myszy (tylko klawiatura)?",
          "Sprawdź na telefonie — nie emulator, prawdziwy telefon z 4G",
          "Przetestuj formularz kontaktowy — czy wysyła, czy pokazuje błędy walidacji?",
        ],
      },
      {
        type: "h2",
        text: "Krok 4: Bezpieczeństwo",
      },
      {
        type: "ul",
        items: [
          "observatory.mozilla.org — nagłówki bezpieczeństwa: CSP, HSTS, X-Frame-Options",
          "ssllabs.com/ssltest/ — test certyfikatu SSL, ocena konfiguracji TLS",
          "Sprawdź czy wszystkie zasoby to HTTPS — mixed content blokuje bezpieczeństwo",
          "Jeśli WordPress: czy wtyczki są aktualne? WPScan Online Scanner",
          "Sprawdź czy strona ma backup — kiedy ostatni?",
        ],
      },
      {
        type: "h2",
        text: "Interpretacja wyników",
      },
      {
        type: "p",
        text: "Nie musisz naprawiać wszystkiego od razu. Priorytetyzuj według wpływu: (1) błędy indeksacji — natychmiast, (2) Core Web Vitals poniżej 50 — w ciągu tygodnia, (3) błędy dostępności krytyczne — w ciągu miesiąca, (4) usprawnienia wydajności — planowo. Miej listę i odhaczaj po kolei.",
      },
    ],
    takeaways: [
      "PageSpeed Insights — pierwszy stop: wyniki poniżej 50 mobile to priorytet",
      "Search Console — sprawdź indeksację zanim zaczniesz optymalizować",
      "Screaming Frog (500 URL free) — pełny przegląd błędów technicznych",
      "Mozilla Observatory — nagłówki bezpieczeństwa w 30 sekund",
      "Priorytetyzuj: błędy indeksacji > Core Web Vitals > dostępność > bezpieczeństwo",
    ],
    related: ["core-web-vitals-2025", "seo-techniczne-podstawy", "redesign-strony-bez-utraty-seo"],
  },
  {
    slug: "ux-checkout-ecommerce",
    category: "E-commerce",
    title: "Optymalizacja checkoutu — jak ograniczyć porzucanie koszyka",
    excerpt:
      "Konkretne taktyki, które redukują porzucania koszyka o 20–40%.",
    date: "5 sty 2025",
    time: "7 min",
    hot: false,
    body: [
      {
        type: "p",
        text: "Średni wskaźnik porzucania koszyka w e-commerce wynosi 70% (Baymard Institute, 2024). Oznacza to, że 7 na 10 osób, które dodały produkt do koszyka, nigdy nie finalizuje zakupu. Poprawa tego wskaźnika nawet o 10 punktów procentowych może znacznie zwiększyć przychody bez zwiększania ruchu.",
      },
      {
        type: "h2",
        text: "Najczęstsze powody porzucania koszyka",
      },
      {
        type: "ul",
        items: [
          "Nieoczekiwane koszty na końcu (dostawa, podatki, opłaty) — 49% przypadków",
          "Konieczność zakładania konta — 24% przypadków",
          "Zbyt długi lub skomplikowany checkout — 18% przypadków",
          "Brak zaufania do bezpieczeństwa płatności — 17% przypadków",
          "Strona za wolna lub błędy techniczne — 13% przypadków",
        ],
      },
      {
        type: "h2",
        text: "Taktyka 1: Jeden ekran checkoutu",
      },
      {
        type: "p",
        text: "Multi-step checkout (krok 1: adres, krok 2: dostawa, krok 3: płatność) jest intuicyjny, ale generuje więcej porzuceń niż single-page checkout. Pokaż wszystko na jednym ekranie z wyraźnymi sekcjami. Shopify's checkout jest tym przykładem — konwertuje lepiej niż większość customowych rozwiązań.",
      },
      {
        type: "h2",
        text: "Taktyka 2: Zakup bez rejestracji",
      },
      {
        type: "p",
        text: "Guest checkout to obowiązek. Rejestrację zaproponuj po zakupie — na stronie dziękujemy, gdy klient ma już powód (śledzenie zamówienia, historia). Nigdy nie blokuj zakupu obowiązkową rejestracją.",
      },
      {
        type: "h2",
        text: "Taktyka 3: Pokaż koszty wcześniej",
      },
      {
        type: "p",
        text: "Koszt dostawy pokaż już na karcie produktu lub w koszyku — nie dopiero na końcu checkoutu. Nieoczekiwany koszt dostawy to najczęstszy powód porzucenia. Darmowa dostawa od X zł działa jak magnes — ustaw próg na 10–20% powyżej średniego koszyka.",
      },
      {
        type: "h2",
        text: "Taktyka 4: Autouzupełnianie adresu",
      },
      {
        type: "p",
        text: "Google Places Autocomplete API lub podobne — użytkownik wpisuje 3 litery, reszta adresu wypełnia się automatycznie. Redukuje błędy, skraca czas wypełniania, zwiększa konwersję. Koszt API jest pomijalny przy wolumenie sprzedaży.",
      },
      {
        type: "h2",
        text: "Taktyka 5: Maile o porzuconym koszyku",
      },
      {
        type: "p",
        text: "Jeśli klient zostawił email (np. wpisał go w kroku 1 checkoutu), wyślij mu automatyczny mail po 1 godzinie z przypomnieniem. Skuteczność: 10–15% powrotów. Trzy maile: po 1h, po 24h, po 72h ze zniżką. Skonfiguruj w Klaviyo lub Mailchimp.",
      },
      {
        type: "ul",
        items: [
          "Mail 1h: 'Zostawiłeś coś w koszyku' — prosty link do koszyka",
          "Mail 24h: pokaż produkt, podkreśl korzyści, social proof",
          "Mail 72h: opcjonalnie zniżka 5–10% lub darmowa dostawa jako last resort",
          "Zdjęcie produktu w mailu — klikalność wyższa o 40%",
          "Przycisk 'Wróć do koszyka' widoczny bez scrollowania — above fold",
        ],
      },
    ],
    takeaways: [
      "Guest checkout bez opcji — rejestracja tylko jako opcja po zakupie",
      "Koszty dostawy widoczne wcześniej — nie dopiero na ostatnim kroku",
      "Single-page checkout konwertuje lepiej niż multi-step przy prostych zakupach",
      "Autouzupełnianie adresu — Google Places API, redukuje błędy i czas",
      "Abandoned cart emails — 10–15% powrotów przy 3-mailowej sekwencji",
    ],
    related: ["shopify-vs-woocommerce", "landing-page-konwersja", "core-web-vitals-2025"],
  },
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const allBlogSlugs = () => blogPosts.map((p) => p.slug);
