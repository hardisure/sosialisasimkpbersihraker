// Navbar component with logo, page navigation, and mobile hamburger
export function initNavbar() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const pages = [
        { href: 'index.html', label: 'Beranda' },
        { href: 'kebijakan.html', label: 'Kebijakan' },
        { href: 'gratifikasi.html', label: 'Gratifikasi' },
        { href: 'pengawasan.html', label: 'Pengawasan' },
        { href: 'integritas.html', label: 'Integritas' },
        { href: 'lapor.html', label: 'Lapor' },
    ];

    const nav = document.createElement('nav');
    nav.innerHTML = `
    <div class="ctn">
      <a href="index.html" class="nav-brand">
        <img src="./assets/mkp-logo.png" alt="Logo MKP" />
        <span class="nl">MKP <span>BERSIH</span></span>
      </a>
      <ul class="nk" id="nk">
        ${pages.map(p => `<li><a href="${p.href}" class="${currentPage === p.href || (currentPage === '' && p.href === 'index.html') ? 'active' : ''}">${p.label}</a></li>`).join('')}
      </ul>
      <button class="hb" id="mb" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

    document.body.prepend(nav);

    // Hamburger toggle
    const mb = document.getElementById('mb');
    const nk = document.getElementById('nk');
    mb.addEventListener('click', () => {
        mb.classList.toggle('act');
        nk.classList.toggle('opn');
    });

    // Close menu on link click
    document.querySelectorAll('.nk a').forEach(a => {
        a.addEventListener('click', () => {
            mb.classList.remove('act');
            nk.classList.remove('opn');
        });
    });
}
