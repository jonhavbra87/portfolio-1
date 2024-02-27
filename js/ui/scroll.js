export function scrollBehavior() {
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach((card) => {
      const { top, bottom } = card.getBoundingClientRect();
      const vh = window.innerHeight;

      // Beregn prosentvis synlighet av kortet i viewporten
      let visibleRatio = 0;
      if (bottom > 0 && top < vh) {
        // Kortet er delvis synlig
        const visiblePortion = Math.min(bottom, vh) - Math.max(0, top);
        const cardHeight = bottom - top;
        visibleRatio = visiblePortion / cardHeight;
      }

      // Juster opasiteten basert på synligheten
      // Dette vil sørge for at opasiteten endres mer gradert
      card.style.opacity = Math.max(0, Math.min(1, visibleRatio));
    });
  });
}

// export function scrollBehavior() {
//   window.addEventListener("scroll", () => {
//     document.querySelectorAll(".card").forEach((card) => {
//       const { top, bottom } = card.getBoundingClientRect();
//       const vh = window.innerHeight;

//       //justering av synlighet av kortene
//       if (top < vh && bottom > 0) {
//         card.style.opacity = 1 - Math.abs(top) / vh;
//       }
//     });
//   });
// }

//Mer smooth scroll
// export function scrollBehavior() {
//   window.addEventListener("scroll", () => {
//     document.querySelectorAll(".card").forEach((card) => {
//       const { top, bottom } = card.getBoundingClientRect();
//       const vh = window.innerHeight;

//       if (top < vh && bottom > 0) {
//         // Beregn en verdi mellom 0 og 1, der 0 er helt utenfor viewporten og 1 er midt i viewporten
//         let visibleRatio = 1 - Math.abs(top - vh / 2) / (vh / 2);

//         // Bruk en ease-in-out funksjon for å glatte ut endringen
//         visibleRatio = visibleRatio < 0 ? 0 : visibleRatio; // Sikrer at verdiene ikke går under 0
//         const easedRatio =
//           visibleRatio < 0.5
//             ? 2 * visibleRatio * visibleRatio
//             : -1 + (4 - 2 * visibleRatio) * visibleRatio;

//         // Juster opacity basert på den glattede verdi
//         card.style.opacity = easedRatio;
//       }
//     });
//   });
// }
