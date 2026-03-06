// Generic page JS (for kebijakan, pengawasan, lapor)
import { initNavbar } from '../components/navbar.js';
import { initFooter } from '../components/footer.js';
import { initScrollAnimations, initAccordions } from '../components/scroll-animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initFooter();
    initAccordions();
    initScrollAnimations();
});
