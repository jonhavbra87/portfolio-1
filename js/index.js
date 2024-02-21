import { backToTopButton } from "./ui/backToTop.js";
import { setupFormValidator } from "./ui/validator.js";
//import { formValidator } from "./ui/validator.js";



    if (window.location.pathname) {

        backToTopButton();
        setupFormValidator();
        
    } else
        console.log("404 - not found");