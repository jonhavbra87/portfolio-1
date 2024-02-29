export function backToTopButton() {
  document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function () {
      // Sjekker om skjermen er større enn 1024 piksler i bredde
      if (window.innerWidth > 800) {
        if (window.pageYOffset > 300) {
          backToTopButton.style.display = "block";
          backToTopButton.classList.add("back-to-top");
        } else {
          backToTopButton.style.display = "none";
        }
      } else {
        // Skjuler knappen på mindre skjermer uavhengig av scroll-posisjon
        backToTopButton.style.display = "none";
      }
    };

    backToTopButton.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  });
}

// export function backToTopButton() {
//     document.addEventListener('DOMContentLoaded', function () {
//     const backToTopButton = document.getElementById('backToTop');

//     window.onscroll = function () {
//         if (window.pageYOffset > 300) {
//             backToTopButton.style.display = 'block';
//             backToTopButton.classList.add('back-to-top');
//         } else {
//             backToTopButton.style.display = 'none';
//         }
//     };

//     backToTopButton.onclick = function () {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };
// });
// }
