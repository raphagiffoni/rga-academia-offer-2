/**
 * Countdown regressivo até a data limite da oferta.
 * Aceita múltiplos widgets .countdown na página, sincroniza todos.
 *
 * Uso:
 *   <div class="countdown" data-countdown data-target="2026-07-25T23:59:00-03:00">
 *     <span class="countdown__value" data-unit="days">--</span>
 *     ...
 *   </div>
 */

export function computeRemaining(nowMs, targetMs) {
  const diff = Math.max(0, targetMs - nowMs);
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds, expired: diff === 0 };
}

function pad2(n) {
  return n.toString().padStart(2, '0');
}

function paintOne(container, r) {
  const map = { days: r.days, hours: r.hours, minutes: r.minutes, seconds: r.seconds };
  for (const unit of Object.keys(map)) {
    const el = container.querySelector(`[data-unit="${unit}"]`);
    if (!el) continue;
    const value = unit === 'days' ? r.days.toString() : pad2(map[unit]);
    if (el.textContent !== value) {
      el.textContent = value;
    }
  }
}

function markExpired(container) {
  container.classList.add('countdown--expired');
  const units = container.querySelectorAll('[data-unit]');
  units.forEach((u) => { u.textContent = '0'; });
}

export function initCountdowns() {
  const nodes = Array.from(document.querySelectorAll('[data-countdown]'));
  if (!nodes.length) return () => {};

  const containers = nodes.map((n) => ({
    node: n,
    targetMs: new Date(n.dataset.target).getTime(),
  })).filter((c) => !Number.isNaN(c.targetMs));

  let expiredHandled = false;

  const tick = () => {
    const now = Date.now();
    let anyLive = false;
    containers.forEach(({ node, targetMs }) => {
      const r = computeRemaining(now, targetMs);
      paintOne(node, r);
      if (r.expired) markExpired(node);
      else anyLive = true;
    });
    if (!anyLive && !expiredHandled) {
      expiredHandled = true;
      onExpired();
    }
  };

  tick();
  const id = setInterval(tick, 1000);

  return () => clearInterval(id);
}

function onExpired() {
  // Após 25/jul 23:59, muda os CTAs de "Ser Membro Original" para "Falar no WhatsApp"
  // e adiciona texto explicativo. Não bloqueia — cliente final decide.
  document.body.classList.add('offer-expired');
}
