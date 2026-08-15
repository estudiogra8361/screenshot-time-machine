// @ts-check
// Find the app running on localhost.
import http from 'node:http';

// Common dev-server ports, in the order we prefer them. The +1 ports are what
// Next, Vite and Astro fall back to when their default is busy.
export const PORTS = [3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200, 5000];

/**
 * Does anything answer on this port? Tries IPv4 and IPv6 loopback, since a
 * Node server bound to "::" and a Python server bound to 127.0.0.1 both count.
 * macOS AirPlay Receiver answers on 5000 with "Server: AirTunes", skip that.
 * @param {number} port
 * @param {number} timeoutMs
 * @returns {Promise<boolean>}
 */
export function probe(port, timeoutMs = 2000) {
  /** @param {string} host */
  const one = (host) =>
    new Promise((resolve) => {
      const req = http.get(
        { host, port, path: '/', timeout: timeoutMs, headers: { accept: 'text/html' } },
        (res) => {
          const server = String(res.headers.server || '');
          res.resume();
          resolve(!/^AirTunes/i.test(server));
        },
      );
      req.on('timeout', () => req.destroy());
      req.on('error', () => resolve(false));
    });
  return Promise.all([one('127.0.0.1'), one('::1')]).then(([a, b]) => a || b);
}

/**
 * Probe all ports in parallel and pick one.
 * If several answer, prefer the one this project used last time (agents leave
 * stale dev servers around), otherwise the first in PORTS order.
 * @param {{ ports?: number[], previousUrl?: string | null, timeoutMs?: number }} opts
 * @returns {Promise<{ url: string, others: string[] } | null>}
 */
export async function detect({ ports = PORTS, previousUrl = null, timeoutMs = 2000 } = {}) {
  const alive = await Promise.all(ports.map((p) => probe(p, timeoutMs)));
  const urls = alive.flatMap((ok, i) => (ok ? [`http://localhost:${ports[i]}`] : []));
  if (urls.length === 0) return null;
  let url = urls[0];
  if (previousUrl) {
    const prev = urls.find((u) => samePort(u, previousUrl));
    if (prev) url = prev;
  }
  return { url, others: urls.filter((u) => u !== url) };
}

/** @param {string} a @param {string} b */
function samePort(a, b) {
  try {
    return new URL(a).port === new URL(b).port;
  } catch {
    return false;
  }
}
