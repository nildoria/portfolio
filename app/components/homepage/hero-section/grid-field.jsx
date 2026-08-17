'use client';

import { useEffect, useRef } from "react";

const SPACING = 34;      // px between grid intersections
const RADIUS = 190;      // cursor influence radius
const STRENGTH = 30;     // max outward displacement, px
const EASE = 0.09;       // cursor follow easing
const POWER_EASE = 0.07; // fade-in/out of the whole effect
const DOT_CUTOFF = 0.18; // below this influence, skip the dot entirely

/** `#rrggbb` -> `r, g, b` so we can build rgba() strings. */
function toRgbParts(hex) {
  const h = hex.trim().replace("#", "");
  const n = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(", ");
}

function GridField() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Colours come from the design tokens, never hardcoded — retinting the
    // palette in globals.css retints the animation for free.
    const root = getComputedStyle(document.documentElement);
    const LINE = toRgbParts(root.getPropertyValue("--color-line") || "#23262c");
    const MID = toRgbParts(root.getPropertyValue("--color-mid") || "#9ba1a8");
    const ACCENT = toRgbParts(root.getPropertyValue("--color-accent") || "#7c9cc4");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let raf = null;

    // Smoothed cursor, its target, and the overall effect strength.
    let cx = -9999;
    let cy = -9999;
    let tx = -9999;
    let ty = -9999;
    let power = 0;
    let targetPower = 0;

    function resize() {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    /** Push a point away from the cursor, falling off as (1 - d/R)^2. */
    function displace(x, y) {
      if (power < 0.001) return [x, y, 0];
      const dx = x - cx;
      const dy = y - cy;
      const d = Math.hypot(dx, dy);
      if (d > RADIUS || d < 0.0001) return [x, y, 0];
      const f = (1 - d / RADIUS) ** 2 * power;
      return [x + (dx / d) * STRENGTH * f, y + (dy / d) * STRENGTH * f, f];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      if (w <= 0 || h <= 0) return;

      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;

      // One stroke pass. A radial gradient centred on the cursor gives the
      // line-brightness ramp for free instead of per-segment restyling.
      if (power > 0.001) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, RADIUS * 1.5);
        g.addColorStop(0, `rgba(${MID}, ${0.55 * power + 0.28})`);
        g.addColorStop(1, `rgba(${LINE}, 0.95)`);
        ctx.strokeStyle = g;
      } else {
        ctx.strokeStyle = `rgba(${LINE}, 0.95)`;
      }
      ctx.lineWidth = 1;

      // Horizontal polylines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const [px, py] = displace(c * SPACING, r * SPACING);
          if (c === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Vertical polylines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const [px, py] = displace(c * SPACING, r * SPACING);
          if (r === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Intersection dots — only near the cursor, so the accent appears
      // under the pointer and nowhere else.
      if (power > 0.01) {
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const [px, py, f] = displace(c * SPACING, r * SPACING);
            if (f <= DOT_CUTOFF) continue;
            const strong = f > 0.62;
            ctx.beginPath();
            ctx.fillStyle = strong
              ? `rgba(${ACCENT}, ${Math.min(1, f * 1.15)})`
              : `rgba(${MID}, ${f * 0.75})`;
            ctx.arc(px, py, strong ? 1.9 : 1.3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    function frame() {
      cx += (tx - cx) * EASE;
      cy += (ty - cy) * EASE;
      power += (targetPower - power) * POWER_EASE;
      draw();

      const settled =
        targetPower === 0 &&
        power < 0.004 &&
        Math.abs(tx - cx) < 0.6 &&
        Math.abs(ty - cy) < 0.6;

      if (settled) {
        // Snap to a clean resting grid and stop burning frames entirely.
        power = 0;
        raf = null;
        draw();
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (raf === null) raf = requestAnimationFrame(frame);
    }

    function onPointerMove(e) {
      const rect = wrap.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      targetPower = 1;
      start();
    }

    function onPointerEnter(e) {
      const rect = wrap.getBoundingClientRect();
      // Jump the smoothed position to the entry point so the lens doesn't
      // fly in from wherever the cursor last was.
      cx = tx = e.clientX - rect.left;
      cy = ty = e.clientY - rect.top;
      targetPower = 1;
      start();
    }

    function onPointerLeave() {
      targetPower = 0;
      start();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    if (!reduceMotion) {
      wrap.addEventListener("pointerenter", onPointerEnter);
      wrap.addEventListener("pointermove", onPointerMove);
      wrap.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      ro.disconnect();
      if (raf !== null) cancelAnimationFrame(raf);
      wrap.removeEventListener("pointerenter", onPointerEnter);
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      data-grid-field=""
      className="relative h-[420px] w-full"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

export default GridField;
