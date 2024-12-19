# Uddybning af Kode

## DOMContentLoaded:

- Denne event sikrer, at hele HTML-dokumentets struktur er indlæst, før scriptet kører.
- Garanterer, at elementer som `<nav>` og `<a>` findes i DOM’en, før vi forsøger at manipulere dem.

## setTimeout:

- Bruges til at forsinke eksekveringen af koden med 100 millisekunder.
- Dette er nyttigt, hvis navigationen bliver indlæst via JavaScript (`fetch` eller dynamisk rendering) og måske ikke er klar, når `DOMContentLoaded` trigges.

## querySelectorAll("nav a"):

- Finder alle `<a>`-elementer, der ligger indenfor `<nav>` i DOM’en.
- Returnerer en liste af elementer, som vi kan iterere over.

## window.location.pathname:

- Returnerer den aktuelle sti for siden, fx `/src/pages/opg-1_git.html`.
- Denne bruges til at sammenligne med linkene i navigationen for at finde det aktive link.

## new URL(link.href, window.location.origin).pathname:

- Dette sikrer, at linkets fulde sti behandles korrekt, selv hvis det er en relativ sti.
- **Eksempel:** Hvis `href="/pages/about.html"`, vil `pathname` returnere `/pages/about.html`.

## normalizePath:

- Funktion til at fjerne trailing slashes (`/`) fra URL-stier.
- Dette forhindrer fejl i sammenligningen mellem stier som `/src/index.html` og `/src/index.html/`.

## classList.add():

- Tilføjer en eller flere CSS-klasser til det aktuelle link, der matcher den nuværende side.
- Her bruges det til at fremhæve det aktive link visuelt.

## CSS-klasser:

- **`text-accent`**: Fremhæver teksten med en accentfarve.
- **`font-bold`**: Gør teksten fed.
- **`border-b-2`**: Tilføjer en 2px bundkant for at indikere, at linket er aktivt.
- **`border-accent`**: Gør bundkanten i accentfarven.
- **`bg-gray-200`**: Tilføjer en baggrundsfarve for yderligere fremhævning.

## Hvad Sikrer Denne Kode?

- Det korrekte link i navigationen markeres som aktivt, baseret på den aktuelle URL.
- Inkonsekvenser fra trailing slashes elimineres.
- Sikrer, at kodekørslen håndterer dynamisk indlæst navigation med forsinkelse.
- Gør det nemt at tilføje eller ændre styling via CSS-klasser.

Denne tilgang er robust og fleksibel til forskellige udviklingsscenarier. 🚀
