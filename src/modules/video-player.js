/**
 * Video player.
 * Suporta dois modos, mutuamente exclusivos:
 *  - data-yt-id="XXXX"           → embed YouTube iframe (autoplay + rel=0)
 *  - data-video-src="/foo.mp4"   → inline <video> self-hosted (autoplay via user gesture)
 * Se ambos estiverem vazios, o click só balança o botão (nada configurado ainda).
 */

export function initVideoPlayer() {
  const player = document.getElementById('video-player');
  if (!player) return;

  const ytId = player.dataset.ytId?.trim();
  const videoSrc = player.dataset.videoSrc?.trim();
  const playBtn = player.querySelector('.video-player__play');
  if (!playBtn) return;

  if (!ytId && !videoSrc) {
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
    if (videoSrc) {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.controls = true;
      video.playsInline = true;
      video.setAttribute('preload', 'auto');
      video.style.cssText = 'width: 100%; height: 100%; object-fit: contain; background: #000;';
      player.innerHTML = '';
      player.appendChild(video);
      // play() dentro do handler de click herda o user gesture, então áudio funciona.
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(ytId)}?autoplay=1&rel=0`;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title = 'Vídeo explicativo da oferta RGA-BH';
    player.innerHTML = '';
    player.appendChild(iframe);
  });
}
