/**
 * Animações scroll-based com GSAP + ScrollTrigger.
 *
 * Estratégia:
 *  - Todos os elementos .reveal ganham fade + slide-up ao entrar no viewport
 *  - Hero tem animação especial de palavra por palavra
 *  - Imagens do hero e alguns tiles ganham parallax leve
 *  - respeita prefers-reduced-motion (usa fade curto sem transform)
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function animateHeroWords() {
  // Hero words animate via CSS keyframes (staggered animation-delay per word)
  // set below in sections.css. Nothing to do here.
}

function animateHeroSupporting() {
  // Hero kicker, sub, image and panel animate via CSS keyframes.
  // Kept as separate module for future overrides.
}

function revealOnScroll() {
  const items = gsap.utils.toArray('.reveal');
  items.forEach((el) => {
    // Skip hero reveals (handled separately by timeline)
    if (el.closest('#hero')) return;

    gsap.fromTo(el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
}

function heroParallax() {
  const desktopTarget = document.querySelector('.hero__bg-image');
  const mobileTarget = document.querySelector('.hero__image');
  const targets = [desktopTarget, mobileTarget].filter(Boolean);
  if (!targets.length) return;
  gsap.to(targets, {
    yPercent: 12,
    scale: 1.08,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

function galleryParallax() {
  const tiles = gsap.utils.toArray('.house__tile img');
  tiles.forEach((tile, i) => {
    const offset = 8 + (i % 3) * 4;
    gsap.fromTo(tile,
      { yPercent: -offset },
      {
        yPercent: offset,
        ease: 'none',
        scrollTrigger: {
          trigger: tile.closest('.house__tile'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}

function lineageTimelineReveal() {
  const line = document.querySelector('.lineage__timeline::before');
  const timeline = document.querySelector('.lineage__timeline');
  if (!timeline) return;
  gsap.fromTo(timeline,
    { '--tl-scale': 0 },
    {
      '--tl-scale': 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: timeline,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

function reducedMotionFallback() {
  // Simple fade-only reveals, no transforms
  const items = document.querySelectorAll('.reveal, .hero__word, .hero__image-wrap');
  items.forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

export function initScrollAnimations() {
  if (prefersReducedMotion()) {
    reducedMotionFallback();
    return;
  }

  // Wait a tick for layout + images
  requestAnimationFrame(() => {
    animateHeroWords();
    animateHeroSupporting();
    revealOnScroll();
    heroParallax();
    galleryParallax();
    lineageTimelineReveal();

    ScrollTrigger.refresh();
  });
}
