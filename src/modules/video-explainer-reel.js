/**
 * Reel vertical da seção 02 (vídeo da oferta recorrente).
 *
 * Estratégia:
 *  - <video autoplay muted loop> no HTML → play muted sempre funciona
 *    (Chrome libera muted sem restrição)
 *  - IntersectionObserver pausa quando sai do viewport (poupa bateria/dados)
 *  - Overlay "TOQUE PARA O SOM" cobre o vídeo enquanto estiver muted.
 *    Click no overlay = gesto real do usuário, então video.play()
 *    com áudio funciona no primeiro try em qualquer browser.
 *  - Ao desmutar, marca data-sound-on="true" no wrap, que esconde o
 *    overlay via CSS (transição suave). Também sincroniza o botão pequeno
 *    de mute toggle no canto.
 */
export function initVideoExplainerReel() {
  const wrap = document.getElementById('video-explainer-reel');
  if (!wrap) return;
  const video = wrap.querySelector('video');
  const cue = document.getElementById('video-explainer-sound-cue');
  const muteBtn = document.getElementById('video-explainer-mute');
  if (!video) return;

  const syncSoundState = () => {
    wrap.dataset.soundOn = video.muted ? 'false' : 'true';
    if (muteBtn) {
      muteBtn.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Silenciar');
    }
  };
  syncSoundState();

  const enableSound = async () => {
    video.muted = false;
    try {
      await video.play();
    } catch (_) {
      // Se o browser recusar mesmo com click (raro), volta pra muted.
      video.muted = true;
      try { await video.play(); } catch (__) {}
    }
    syncSoundState();
  };

  if (cue) cue.addEventListener('click', enableSound);
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      if (video.muted) {
        enableSound();
      } else {
        video.muted = true;
        syncSoundState();
      }
    });
  }

  // Play/pause conforme visibilidade (autoplay já iniciou no boot;
  // observer garante que só toca quando visível a partir daí).
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    }, { threshold: 0.4 });
    io.observe(wrap);
  }
}
