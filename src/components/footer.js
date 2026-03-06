// Footer component with branding, links, and reporting channels
export function initFooter() {
    const footer = document.createElement('footer');
    footer.className = 'ft';
    footer.innerHTML = `
    <div class="ft-inner">
      <div>
        <div class="ft-brand">
          <img src="./assets/mkp-logo.png" alt="Logo MKP" />
          <span>MKP Bersih</span>
        </div>
        <p class="ft-desc">Membangun ekosistem perusahaan yang bersih, transparan, dan bebas dari Korupsi, Kolusi, dan Nepotisme melalui Good Corporate Governance.</p>
      </div>
      <div>
        <h4>Navigasi</h4>
        <div class="ft-links">
          <a href="index.html">Beranda</a>
          <a href="kebijakan.html">Kebijakan</a>
          <a href="gratifikasi.html">Gratifikasi</a>
          <a href="pengawasan.html">Pengawasan</a>
          <a href="integritas.html">Integritas</a>
          <a href="lapor.html">Kanal Pelaporan</a>
        </div>
      </div>
      <div>
        <h4>Pelaporan</h4>
        <div class="ft-links">
          <a href="mailto:wbs@mitrakaryaprima.com">📧 WBS Email</a>
          <a href="mailto:lapor@mitrakaryaprima.com">📧 Gratifikasi</a>
          <a href="lapor.html">📋 Panduan Lapor</a>
        </div>
      </div>
    </div>
    <div class="ft-bottom">
      &copy; ${new Date().getFullYear()} PT Mitra Karya Prima &mdash; MKP Bersih dan Berintegritas
    </div>
  `;

    document.body.appendChild(footer);
}
