/**
 * Aplica o link do carrinho w12 em todos os CTAs marcados com [data-cart-link].
 *
 * Cada CTA escolhe entre 2 URLs via [data-cart-type]:
 *   - "parcelado"  → CART_URL_PARCELADO  (12x no cartão à vista)
 *   - "recorrente" → CART_URL_RECORRENTE (cobrança mensal automática)
 * Ausência do atributo = parcelado (default, mantém CTAs genéricos
 * como hero, sticky nav, seção CTA e final CTA apontando pro parcelado).
 *
 * Também dispara Meta Pixel `Lead` + GA4 `generate_lead` no clique,
 * pra sinalizar intenção de compra antes de sair pro carrinho externo.
 */

import { CART_URL_PARCELADO, CART_URL_RECORRENTE } from '../copy/content.js';

export function initCartLinks() {
  document.querySelectorAll('[data-cart-link]').forEach((el) => {
    const type = el.dataset.cartType || 'parcelado';
    el.href = type === 'recorrente' ? CART_URL_RECORRENTE : CART_URL_PARCELADO;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.addEventListener('click', () => {
      const ctaName = el.dataset.cta || 'unknown';
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: ctaName, cart_type: type });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { cta_name: ctaName, cart_type: type });
      }
    });
  });
}
