/**
 * Reel vertical da seção 02 (vídeo da oferta recorrente).
 * Padrão idêntico ao seminar-video: autoplay muted + loop + playsinline,
 * IntersectionObserver pausa quando sai do viewport.
 *
 * Extra: tenta desmutar automaticamente no primeiro gesto do usuário
 * (click/touch/scroll). Browsers permitem áudio depois de qualquer
 * interação, então é boa chance da pessoa ouvir sem precisar clicar
 * no botão de mute. Se falhar, mantém muted e o botão continua disponível.
 */
export function initVideoExplainerReel() {
  const wrap = document.getElementById('video-explainer-reel');
  if (!wrap) return;
  const video = wrap.querySelector('video');
  const muteBtn = document.getElementById('video-explainer-mute');
  if (!video) return;

  // Play/pause conforme visibilidade (>= 40% visível)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    }, { threshold: 0.4 });
    io.observe(wrap);
  }

  const updateBtnLabel = () => {
    if (!muteBtn) return;
    muteBtn.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Silenciar');
  };
  updateBtnLabel();

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      updateBtnLabel();
    });
  }

  // Tenta desmutar após o primeiro gesto do usuário na página.
  const attemptUnmute = () => {
    if (video.muted) {
      video.muted = false;
      video.play().catch(() => { video.muted = true; });
      updateBtnLabel();
    }
    document.removeEventListener('click', attemptUnmute, true);
    document.removeEventListener('touchstart', attemptUnmute, true);
    document.removeEventListener('scroll', attemptUnmute, { capture: true, passive: true });
  };
  document.addEventListener('click', attemptUnmute, true);
  document.addEventListener('touchstart', attemptUnmute, true);
  document.addEventListener('scroll', attemptUnmute, { capture: true, passive: true });
}
