// Scroll-based fade-in animation using IntersectionObserver
export function initScrollAnimations() {
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('vis');
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll('.fi').forEach((el) => obs.observe(el));
}

// Accordion toggle for .ah elements
export function initAccordions() {
    document.querySelectorAll('.ah').forEach((h) => {
        h.addEventListener('click', () => {
            const i = h.parentElement;
            const b = h.nextElementSibling;
            const wasActive = i.classList.contains('act');

            document.querySelectorAll('.ai').forEach((x) => {
                x.classList.remove('act');
                x.querySelector('.ab').style.maxHeight = null;
            });

            if (!wasActive) {
                i.classList.add('act');
                b.style.maxHeight = b.scrollHeight + 'px';
            }
        });
    });
}
