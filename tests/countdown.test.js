import { describe, it, expect } from 'vitest';
import { computeRemaining } from '../src/modules/countdown.js';

describe('computeRemaining', () => {
  it('returns days/hours/minutes/seconds for a future target', () => {
    const now = Date.parse('2026-07-01T00:00:00-03:00');
    const target = Date.parse('2026-07-05T02:30:45-03:00');
    const r = computeRemaining(now, target);
    expect(r.expired).toBe(false);
    expect(r.days).toBe(4);
    expect(r.hours).toBe(2);
    expect(r.minutes).toBe(30);
    expect(r.seconds).toBe(45);
  });

  it('returns all zeros and expired=true when now equals target', () => {
    const t = Date.parse('2026-07-25T23:59:00-03:00');
    const r = computeRemaining(t, t);
    expect(r).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
  });

  it('returns all zeros and expired=true when now is past target', () => {
    const t = Date.parse('2026-07-25T23:59:00-03:00');
    const r = computeRemaining(t + 500_000, t);
    expect(r.expired).toBe(true);
    expect(r.days).toBe(0);
    expect(r.hours).toBe(0);
    expect(r.minutes).toBe(0);
    expect(r.seconds).toBe(0);
  });

  it('handles just under 1 minute correctly', () => {
    const now = Date.parse('2026-07-01T00:00:00-03:00');
    const target = now + 45_000;
    const r = computeRemaining(now, target);
    expect(r.days).toBe(0);
    expect(r.hours).toBe(0);
    expect(r.minutes).toBe(0);
    expect(r.seconds).toBe(45);
  });

  it('handles multi-day gap correctly', () => {
    const now = Date.parse('2026-07-01T00:00:00-03:00');
    const target = Date.parse('2026-07-25T23:59:00-03:00');
    const r = computeRemaining(now, target);
    expect(r.days).toBe(24);
    expect(r.hours).toBe(23);
    expect(r.minutes).toBe(59);
    expect(r.seconds).toBe(0);
  });
});
