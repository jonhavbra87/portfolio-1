// Updated scrollBehavior function
export function scrollBehavior() {
  const footer = document.querySelector("footer");
  const targetSection = document.getElementById("six"); // Target the last section directly

  const options = {
    root: null, // Observe changes relative to the viewport
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the target element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When the target section enters the viewport
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0%)";
      } else {
        // When the target section leaves the viewport
        footer.style.opacity = "0";
        footer.style.transform = "translateY(100%)";
      }
    });
  }, options);

  observer.observe(targetSection); // Start observing the last section
}



// export function scrollBehavior() {
//   window.addEventListener("scroll", () => {
//     const footer = document.querySelector("footer");
//     const page = document.querySelectorAll(".page");
//     const lastPage = page[page.length - 1];

//     const pageHeight = document.documentElement.scrollHeight;
//     const scrollPosition = window.innerHeight + window.scrollY;

//     if (scrollPosition >= pageHeight) {
//       footer.style.opacity = "1";
//       footer.style.transform = "translateY(0%)";
//     } else {
//       footer.style.opacity = "0";
//       footer.style.transform = "translateY(100%)";
//     }
//   });
// }
