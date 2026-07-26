/**
 * Botão flutuante do WhatsApp.
 * Aparece após scroll de 300px, some quando volta pro topo.
 */

import { buildWhatsAppLink, WHATSAPP_MESSAGE } from '../copy/content.js';

const REVEAL_AT = 300;

export function initWhatsAppFloat() {
  const btn = document.getElementById('wa-float');
  if (!btn) return;

  const href = buildWhatsAppLink(WHATSAPP_MESSAGE);
  btn.href = href;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';

  // Also set href on all elements with [data-wa-link]
  document.querySelectorAll('[data-wa-link]').forEach((el) => {
    el.href = href;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    btn.classList.toggle('is-visible', y > REVEAL_AT);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
