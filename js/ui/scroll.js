export function scrollBehavior() {
  window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    const cards = document.querySelectorAll(".page");
    const lastCard = cards[cards.length - 1];

    const pageHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    if (scrollPosition >= pageHeight) {
      footer.style.opacity = "1";
      footer.style.transform = "translateY(0%)";
    } else {
      footer.style.opacity = "0";
      footer.style.transform = "translateY(100%)";
    }
  });
}
