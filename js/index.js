import { backToTopButton } from "./ui/backToTop.js";
import { formValidator } from "./ui/validator.js";



    if (window.location.pathname) {

        backToTopButton();
        const form = document.querySelector("#contactForm");
        form.addEventListener("submit", formValidator);
        
    } else
        console.log("404 - not found");