// Funktion til at indlæse HTML indhold fra en fil
const loadComponent = (elementId, file) => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading component:", error));
};

// Indlæs komponenterne
loadComponent("header", "./components/Header.html"); // Korrekt sti
loadComponent("header", "../components/Header.html"); // Korrekt sti
loadComponent("footer", "../components/Footer.html");
