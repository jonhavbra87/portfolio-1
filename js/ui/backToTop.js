export function backToTopButton() {
  document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function () {
      if (window.innerWidth > 600) {
        if (window.pageYOffset > 300) {
          backToTopButton.style.display = "block";
          backToTopButton.classList.add("back-to-top");
        } else {
          backToTopButton.style.display = "none";
        }
      } else {
        backToTopButton.style.display = "none";
      }
    };

    backToTopButton.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  });
}
