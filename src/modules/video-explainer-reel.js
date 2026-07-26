/**
 * Reel vertical da seção 02 (vídeo da oferta recorrente).
 *
 * Estratégia para tocar COM SOM logo de cara:
 *  1. Não autoplay no carregamento da página.
 *  2. IntersectionObserver detecta quando o vídeo entra no viewport.
 *  3. Como o vídeo fica abaixo do hero, o usuário TEM que rolar pra
 *     chegar até ele. Esse scroll conta como "sticky activation" para
 *     o browser, o que libera reprodução com som.
 *  4. Ao entrar em viewport, tenta tocar sem mute. Se o browser
 *     bloquear (usuário ainda não interagiu — caso raro), cai pra muted.
 *
 * Assim, na grande maioria dos casos o vídeo começa direto com áudio
 * assim que aparece na tela do usuário.
 */
export function initVideoExplainerReel() {
  const wrap = document.getElementById('video-explainer-reel');
  if (!wrap) return;
  const video = wrap.querySelector('video');
  const muteBtn = document.getElementById('video-explainer-mute');
  if (!video) return;

  // Remove qualquer intenção de autoplay no boot; controlamos manualmente.
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
    // Tentativa 1: com som (funciona se o browser reconhece que o
    // usuário já interagiu com a página — ex: rolou até aqui).
    video.muted = false;
    try {
      await video.play();
      updateBtnLabel();
      return;
    } catch (_) {
      // Bloqueado. Fallback pra muted (autoplay muted sempre funciona).
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
    // Fallback sem IntersectionObserver: tenta assim mesmo.
    tryPlayWithSound();
  }
}
