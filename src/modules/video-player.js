/**
 * Video player do YouTube.
 * Ao clicar no play button, injeta iframe do YouTube (com autoplay).
 * Se data-yt-id estiver vazio (ainda não subiu o vídeo), mantém placeholder.
 */

export function initVideoPlayer() {
  const player = document.getElementById('video-player');
  if (!player) return;

  const ytId = player.dataset.ytId?.trim();
  const playBtn = player.querySelector('.video-player__play');

  if (!playBtn) return;

  if (!ytId) {
    // No video yet: click just shakes button, no-op
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      playBtn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(0.92)' },
        { transform: 'scale(1)' },
      ], { duration: 300, easing: 'ease-out' });
    });
    return;
  }

  playBtn.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(ytId)}?autoplay=1&rel=0`;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title = 'Vídeo explicativo da oferta RGA-BH';
    player.innerHTML = '';
    player.appendChild(iframe);
  });
}
