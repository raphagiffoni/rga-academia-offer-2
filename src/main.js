/**
 * Entry point da landing page RGA-BH · Oferta 1 (Membros Originais).
 * Wire-up dos módulos de interação e animação.
 */

import './style.css';
import './sections.css';

import { initCountdowns } from './modules/countdown.js';
import { initWhatsAppFloat } from './modules/whatsapp-float.js';
import { initFAQ } from './modules/faq.js';
import { initMobileMenu, initStickyNav } from './modules/menu.js';
import { initCartLinks } from './modules/cta-links.js';
import { initSeminarVideo } from './modules/seminar-video.js';
import { initVideoPlayer } from './modules/video-player.js';
import { initVideoExplainerReel } from './modules/video-explainer-reel.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initScrollAnimations } from './modules/scroll-animations.js';

function boot() {
  // Wire content-driven bits first
  initCartLinks();
  initWhatsAppFloat();
  initFAQ();

  // Interactions
  initMobileMenu();
  initStickyNav();
  initVideoPlayer();
  initVideoExplainerReel();
  initSeminarVideo();
  initCountdowns();

  // Smooth scroll before animations (so ScrollTrigger picks it up)
  initSmoothScroll();
  initScrollAnimations();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
