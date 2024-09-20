// Selecteer de navigatielinks en de animatie achtergrond
const navLinks = document.querySelectorAll("nav a");
const animation = document.querySelector(".animation");

// Voeg een hover event toe aan elke link
navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    const linkCoords = link.getBoundingClientRect(); // Verkrijg positie en afmetingen van de link
    const navCoords = link.parentElement.getBoundingClientRect(); // Verkrijg positie van de nav (om relatieve positie te bepalen)
    
    const width = linkCoords.width; // Breedte van de link
    const offsetLeft = linkCoords.left - navCoords.left; // Relatieve positie van de link tot de nav

    // Pas de breedte en positie van de animatie aan
    animation.style.width = `${width}px`;
    animation.style.transform = `translateX(${offsetLeft}px)`;
  });
});

// Optioneel: Zorg ervoor dat de animatie standaard op de actieve link blijft staan
const activeLink = document.querySelector("nav a.active");
if (activeLink) {
  const linkCoords = activeLink.getBoundingClientRect();
  const navCoords = activeLink.parentElement.getBoundingClientRect();
  const width = linkCoords.width;
  const offsetLeft = linkCoords.left - navCoords.left;

  // Stel de beginpositie van de animatie in op de actieve link
  animation.style.width = `${width}px`;
  animation.style.transform = `translateX(${offsetLeft}px)`;
}