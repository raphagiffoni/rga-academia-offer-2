/**
 * Menu mobile overlay + sticky compact nav (hide-on-scroll-down).
 */

const REVEAL_AT = 500;

export function initMobileMenu() {
  const open = document.getElementById('mobile-menu-open');
  const close = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;

  const setState = (isOpen) => {
    menu.classList.toggle('is-open', isOpen);
    menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  if (open) open.addEventListener('click', () => setState(true));
  if (close) close.addEventListener('click', () => setState(false));

  // Close on any nav link click
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setState(false));
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setState(false);
  });
}

export function initStickyNav() {
  const nav = document.getElementById('sticky-nav');
  if (!nav) return;

  let lastY = 0;
  let ticking = false;

  const update = () => {
    const y = window.scrollY || window.pageYOffset;
    const scrolledEnough = y > REVEAL_AT;
    const scrollingUp = y < lastY;

    if (scrolledEnough && (scrollingUp || y - lastY < 4)) {
      nav.classList.add('is-visible');
    } else if (!scrolledEnough || y - lastY > 6) {
      nav.classList.remove('is-visible');
    }
    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}
