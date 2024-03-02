export function scrollBehavior() {
  const footer = document.querySelector("footer");
  const options = {
    root: null, // observerer endringer i forhold til viewporten
    rootMargin: '0px',
    threshold: 0 // utløser når 0% (dvs. så snart) av målelementets synlighet krysser rootMargin
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Når footer kommer inn i viewporten
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0%)";
      } else {
        // Når footer går ut av viewporten
        footer.style.opacity = "0";
        footer.style.transform = "translateY(100%)";
      }
    });
  }, options);

  // Observerer det siste kortet i stedet for hele siden
  const page = document.querySelectorAll(".page");
  const lastPage = page[page.length - 1];
  observer.observe(lastPage); // Starter observasjonen av det siste kortet
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
