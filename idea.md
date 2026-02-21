
Zbuduj dla mnie stronę wizytówkę + blog w stylu 'Minimalist Indie Web', inspirując się stroną steipete.me.

Context:
Strone bedzie przeznaczona dla Christophe Bach-Bourdelier
Pasjonate Ekologii, jest tez certyfikowanym ddoradca wg norm Europejskich. Na stronie bedzie oferowac swoje uslugo firmom ktore musz byc "compliant"


Wymagania:
Technologia: Astro (dla szybkości) + Tailwind CSS (??)

Design:
Skrajny minimalizm: białe tło, czarny tekst.
Użyj eleganckiej czcionki szeryfowej dla nagłówków i bezszeryfowej dla treści (np. Playfair Display i Inter).
Brak przycisków z tłami – tylko tekstowe linki z podkreśleniem przy hoverze.

Układ:
Prosty nagłówek z imieniem i nazwiskiem.
Sekcja 'About' (2-3 zdania).
Sekcja 'Projects' jako pionowa lista: [Rok] - [Nazwa Projektu] - [Krótki opis].
Sekcja 'Writing' (Blog) pobierająca wpisy z plików Markdown w src/content/blog/.

Wydajność: Zero niepotrzebnego JavaScriptu. Strona ma być 'lightweight'.

Mam wlasnego grafika. Bede mnial logo (niebiesko zielone nawiazujace do lisci i planety ziemia)

Planuje zrobic to w astro (https://astro.build/), ale zrobmy wstepna analize, techniczna. (framework, hosting, domena, etc)

Bardzo istotne: 
Robie teraz strone, ktora pozniej bedzie aktualizowana (nowe posty) przez osobe calkowicie nietechniczna.
Zalozylem ze poradzi sobie ze stworzeniem nowego pliku MD na githubie (zeby nie uzywac calego ciezkiego wordpress i backoffice, bo nie mamy poki co zadnych postow...)









Deployment:
- instructions do deploym, git, vercel



Add following changes:

UX:
 - In the heading (lets try in the center of the page) there will be logo
 - Tell me what kind of image (size format, theme,  etc) I need to request from the graphic designer?


Menu / Contents:
 - About
 - Posts
 - Offer / how I can help / why me <- not sure about wording here (use sth the is modern and currectnly "trendy")

Change language feature:
 - Supported: English, Franch, Polish
 - Default: English (can we detect user's language settings and use it if its supported? - if this is trivial we can do it otherwise default to English)

"About" contents:
 - will currently be in a form of a CV
 - Read PL/EN/FR pdf files under contents_prv folder and make the content based ONLY and exactly using this information


UX adjustements needed for header:

    Change name to 
        
        Andrew 
        Christophe 
        Rodolphe
        Bach-Bourdelier
        
    (Use line breaks as above so it takes less width)

We need [name + logo + menu] to be on the same line next to each other. You can slightly increase the overall width if needed

Langueage selection should be moved away. Lets put it on the top right corner (traditional place)

Also I used another file for logo: "logo.jpg", please adjust code to use it