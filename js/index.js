import { backToTopButton } from "./ui/backToTop.js";
import { scrollBehavior } from "./ui/scroll.js";
import { setupFormValidator } from "./ui/validator.js";
//import { formValidator } from "./ui/validator.js";



    if (window.location.pathname) {

        backToTopButton();
        scrollBehavior();
        setupFormValidator();
        
    } else
        console.log("404 - not found");