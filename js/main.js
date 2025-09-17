import { toggleBurgerMenu } from "./burger-menu.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { themeToggle } from "./theme-toggle.js";

document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        once: true,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 0,
        easing: 'ease',
        duration: 1400,
    });

    const header = document.querySelector(".header");
    const heroText = document.querySelector(".hero__text-container");
    const heroImage = document.querySelector(".hero__main-image");

    if (header) {
        header.setAttribute("data-aos", "fade-down");
        header.setAttribute("data-aos-easing", "linear");
        header.setAttribute("data-aos-delay", "100");
        header.setAttribute("data-aos-duration", "1200");
    }

    if (heroText) {
        heroText.setAttribute("data-aos", "fade-down");
        heroText.setAttribute("data-aos-easing", "linear");
        heroText.setAttribute("data-aos-delay", "200");
        heroText.setAttribute("data-aos-duration", "1200");
    }

    if (heroImage) {
        heroImage.setAttribute("data-aos", "fade-down");
        heroImage.setAttribute("data-aos-easing", "linear");
        heroImage.setAttribute("data-aos-delay", "300");
        heroImage.setAttribute("data-aos-duration", "1200");
    }

    AOS.refresh();
});

toggleBurgerMenu();
themeToggle();

