export function flipCard() {
  document.querySelectorAll(".card-button").forEach((button) => {
    button.addEventListener("click", () => {
      const flipCard = button.closest(".flip-card");
      flipCard.classList.toggle("is-flipped");
    });
  });
}
