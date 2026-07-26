/**
 * Controla o vídeo vertical do Rayron:
 *  - só reproduz quando >= 40% no viewport (poupa bateria/dados)
 *  - tenta play COM SOM ao entrar em viewport (aproveita sticky
 *    activation do scroll do usuário); fallback pra muted se o
 *    browser bloquear
 *  - botão de mute toggle sempre disponível como controle manual
 */

export function initSeminarVideo() {
  const wrap = document.getElementById('seminar-video');
  if (!wrap) return;
  const video = wrap.querySelector('video');
  const muteBtn = document.getElementById('seminar-mute');
  if (!video) return;

  // Anula qualquer autoplay declarado no HTML; controlamos manualmente
  // pra poder tentar com som primeiro.
  video.removeAttribute('autoplay');
  video.pause();

  const updateBtnLabel = () => {
    if (!muteBtn) return;
    muteBtn.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Silenciar');
  };
  updateBtnLabel();

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (!video.muted) video.play().catch(() => {});
      updateBtnLabel();
    });
  }

  const tryPlayWithSound = async () => {
    video.muted = false;
    try {
      await video.play();
      updateBtnLabel();
      return;
    } catch (_) {
      video.muted = true;
      try { await video.play(); } catch (__) {}
      updateBtnLabel();
    }
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) tryPlayWithSound();
        else video.pause();
      });
    }, { threshold: 0.4 });
    io.observe(wrap);
  } else {
    tryPlayWithSound();
  }
}
