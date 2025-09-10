import { toggleBurgerMenu } from "./burger-menu.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(
    {
        startEvent: 'DOMContentLoaded',
        once: true,
        // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        // throttleDelay: 99,
        offset: 0,
        easing: 'ease',
        duration: 1400,
    }
);
toggleBurgerMenu();