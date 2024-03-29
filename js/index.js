import { backToTopButton } from "./ui/backToTop.js";
import { flipCard } from "./ui/flipCard.js";
import { initializeNavigation } from "./ui/navigation.js";
import { navigationObserver } from "./ui/intersectionObserver.js";
import { scrollBehavior } from "./ui/scroll.js";
import { setupFormValidator } from "./ui/validator.js";

if (window.location.pathname) {
  initializeNavigation();
  navigationObserver();
  backToTopButton();
  scrollBehavior();
  setupFormValidator();
  flipCard();
} else console.log("404 - not found");
