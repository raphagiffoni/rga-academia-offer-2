/**
 * FAQ accordion.
 * Renderiza itens a partir de content.js e controla abrir/fechar.
 * Uma resposta aberta por vez (comportamento default).
 */

import { faq } from '../copy/content.js';

function faqIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke-linecap="round" />
  </svg>`;
}

function renderItem(item, i) {
  const article = document.createElement('article');
  article.className = 'faq__item';
  article.innerHTML = `
    <button class="faq__q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">
      <span>${item.q}</span>
      <span class="faq__toggle" aria-hidden="true">${faqIcon()}</span>
    </button>
    <div class="faq__a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">
      ${item.a}
    </div>
  `;
  return article;
}

export function initFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  const items = faq.items.map(renderItem);
  items.forEach((el) => list.appendChild(el));

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq__q');
    if (!btn) return;
    const item = btn.closest('.faq__item');
    if (!item) return;

    const isOpen = item.classList.contains('is-open');

    // Close all others
    list.querySelectorAll('.faq__item.is-open').forEach((el) => {
      el.classList.remove('is-open');
      const q = el.querySelector('.faq__q');
      if (q) q.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}
