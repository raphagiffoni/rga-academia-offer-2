/**
 * Controla o vídeo vertical do Rayron:
 *  - só reproduz quando >= 50% no viewport (poupa bateria/dados)
 *  - botão de mute toggle
 */

export function initSeminarVideo() {
  const wrap = document.getElementById('seminar-video');
  if (!wrap) return;
  const video = wrap.querySelector('video');
  const muteBtn = document.getElementById('seminar-mute');

  if (!video) return;

  // Intersection observer: only play when visible
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 });
    io.observe(wrap);
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Silenciar');
    });
  }
}
