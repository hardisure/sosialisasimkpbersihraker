// Integritas page specific JS
import { initNavbar } from '../components/navbar.js';
import { initFooter } from '../components/footer.js';
import { initScrollAnimations } from '../components/scroll-animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initFooter();

    // Integrity meter logic
    window.cM = function () {
        let s = 0;
        for (let i = 1; i <= 10; i++) {
            if (document.getElementById('q' + i).checked) s += 10;
        }
        document.getElementById('mS').textContent = s;
        document.getElementById('mB').style.width = s + '%';
        const l = document.getElementById('mL');
        if (s <= 30) { l.textContent = 'Risiko Tinggi'; l.style.color = 'var(--red)'; }
        else if (s <= 60) { l.textContent = 'Perlu Peningkatan'; l.style.color = '#ff9800'; }
        else if (s < 100) { l.textContent = 'Integritas Kuat'; l.style.color = 'var(--teal)'; }
        else { l.textContent = '⭐ Duta Integritas MKP ⭐'; l.style.color = '#2e7d32'; }
    };

    initScrollAnimations();
});
