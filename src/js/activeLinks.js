// Når DOM'en er færdigindlæst og klar til at blive manipuleret
document.addEventListener("DOMContentLoaded", function () {
  // Brug en forsinkelse (setTimeout) for at sikre, at navigationen (fx hentet via fetch) er fuldt indlæst
  setTimeout(() => {
    // Henter alle links (<a> elementer) i navigationen
    const links = document.querySelectorAll("nav a");

    // Finder den aktuelle URL-sti, normaliserer den og fjerner trailing slashes ("/")
    const currentPath = normalizePath(window.location.pathname);

    // Itererer over alle links i navigationen
    links.forEach((link) => {
      // Henter linkets sti (href-attributten) og normaliserer det
      const linkPath = normalizePath(new URL(link.href, window.location.origin).pathname);

      // Sammenligner linkets sti med den aktuelle sti
      if (linkPath === currentPath) {
        // Hvis de matcher, tilføjes aktive klasser til det pågældende link
        link.classList.add(
          "text-accent", // Fremhæv linket med en accentfarve
          "font-bold", // Gør teksten fed
          "border-b-2", // Tilføj en 2px bundkant
          "border-accent", // Brug accentfarve til bundkanten
          "bg-gray-200" // Tilføj en baggrundsfarve for visuel feedback
        );
      }
    });
  }, 100); // Forsinkelse på 100 millisekunder for at sikre, at alle elementer er tilgængelige
});

/**
 * Funktion til at normalisere stier
 * - Fjerner trailing slashes fra en URL-sti
 * - Dette sikrer, at "/path" og "/path/" behandles som identiske
 *
 * @param {string} path - URL-stien, der skal normaliseres
 * @returns {string} - Normaliseret sti uden trailing slash
 */
function normalizePath(path) {
  return path.replace(/\/$/, ""); // Fjern eventuel "/" i slutningen af stien
}
