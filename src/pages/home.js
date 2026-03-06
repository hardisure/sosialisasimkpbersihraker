// Home page specific JS
import { initNavbar } from '../components/navbar.js';
import { initFooter } from '../components/footer.js';
import { initScrollAnimations } from '../components/scroll-animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initFooter();

    // Pillar selector
    const pD = [
        { t: 'Transparansi (Keterbukaan)', d: 'Keterbukaan dalam seluruh proses bisnis dan pengambilan keputusan. Seluruh transaksi keuangan harus dapat dilacak melalui jalur perbankan. LHKPN wajib disetor secara periodik. Form A, B, C, dan D menjadi instrumen transparansi yang memastikan tidak ada aktivitas tersembunyi.' },
        { t: 'Akuntabilitas', d: 'Setiap pejabat dan karyawan bertanggung jawab penuh atas keputusan dan tindakannya. Sistem audit khusus dan investigasi independen memastikan setiap pelanggaran dapat ditelusuri dan dipertanggungjawabkan. Dewan Komisaris dan Direksi memiliki kewajiban pelaporan yang lebih ketat.' },
        { t: 'Integritas', d: 'Membangun manusia dan kultur berintegritas melalui kepatuhan terhadap GCG Code, Pedoman Etika Usaha, dan peningkatan integritas layanan. Setiap Insan MKP dituntut menerapkan standar etika terbaik dan berani berkata TIDAK pada segala bentuk suap dan KKN.' },
        { t: 'Partisipasi', d: 'Menumbuhkan dukungan dan rasa kepemilikan bersama dari seluruh elemen perusahaan. Karyawan bukan sekadar objek peraturan, melainkan motor penggerak utama dan garis pertahanan terdepan. Melalui WBS, setiap karyawan menjadi mata dan telinga perusahaan untuk deteksi dini pelanggaran.' }
    ];

    window.sP = function (i) {
        document.querySelectorAll('.pl').forEach((p, x) => p.classList.toggle('act', x === i));
        const d = document.getElementById('pD');
        d.innerHTML = `<h3 style="color:var(--td);margin-bottom:12px">${pD[i].t}</h3><p style="color:#555">${pD[i].d}</p>`;
        d.classList.add('show');
    };

    // Counter animation for stats
    const counters = document.querySelectorAll('.stat-number[data-target]');
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const suffix = el.dataset.suffix || '';
                let current = 0;
                const step = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current + suffix;
                }, 30);
                counterObs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObs.observe(c));

    initScrollAnimations();
});
