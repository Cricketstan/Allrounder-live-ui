/* =====================================================================
   FOOTBALL · premium card metadata
   Paste at the very END of football.css (or load it after football.css).
   Scoped to .allsports-section only, so Cricket and Willow are untouched.
   ===================================================================== */

.allsports-section {
  --as-live: #ff6a1f;
  --as-soon: #5b8cff;
  --as-done: #6c7389;
  --as-ink: #f1f3f8;
  --as-mute: #8d93a6;
}

/* Room for the shadow and press/hover lift so the rail never clips it.
   Padding and negative margin cancel out, so layout does not shift. */
.allsports-section .rail {
  padding-top: 6px;
  padding-bottom: 14px;
  margin-top: -6px;
  margin-bottom: -14px;
}

/* ---------- card shell: softer corners, hairline gradient edge ---------- */
.allsports-section .card {
  border: 1px solid transparent;
  border-radius: 14px;
  background:
    linear-gradient(180deg, #161b27, #0f131c) padding-box,
    linear-gradient(155deg, #ffffff30, #ffffff0a 40%, #ffffff06 100%) border-box;
  box-shadow: 0 18px 30px -22px #000;
}
.allsports-card {
  transition:
    transform 0.35s var(--out),
    box-shadow 0.35s var(--out);
}
.allsports-card:active {
  transform: scale(0.985);
}
@media (hover: hover) and (pointer: fine) {
  .allsports-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 26px 38px -22px #000;
  }
}

/* ---------- caption: state first, series second, colour-coded rail ---------- */
.allsports-card .caption {
  --sc: var(--as-done);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 13px 14px 14px 27px;
  line-height: 1.25;
  background: linear-gradient(90deg, color-mix(in srgb, var(--sc) 10%, transparent), transparent 62%);
}
.allsports-card:has(.badge) .caption {
  --sc: var(--as-live);
}
.allsports-card:has(.as-upcoming-icon) .caption {
  --sc: var(--as-soon);
}

/* the state rail: orange = live, blue = upcoming, grey = finished */
.allsports-card .caption::before {
  content: "";
  position: absolute;
  left: 14px;
  top: 14px;
  bottom: 15px;
  width: 3px;
  border-radius: 3px;
  background: linear-gradient(180deg, var(--sc), color-mix(in srgb, var(--sc) 30%, transparent));
}
.allsports-card:has(.badge) .caption::before {
  box-shadow: 0 0 14px -2px var(--sc);
}

.allsports-section .as-state {
  order: 1;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.005em;
  color: var(--as-ink);
  font-variant-numeric: tabular-nums;
}
.allsports-section .as-state small {
  margin-left: 0.3em;
  font-size: 0.8em;
  font-weight: 500;
  color: var(--as-mute);
}
.allsports-section .as-meta {
  order: 2;
  font-size: 12px;
  font-weight: 400;
  color: var(--as-mute);
}

/* ---------- thumbnail overlays: glass instead of flat white ---------- */
.allsports-card .badge {
  left: 10px;
  bottom: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px 5px 8px;
  border-radius: 999px;
  border: 1px solid #ffffff26;
  background: #08090d8c;
  -webkit-backdrop-filter: blur(10px) saturate(1.4);
  backdrop-filter: blur(10px) saturate(1.4);
  color: #fff;
  font-size: 11px;
  letter-spacing: 0.04em;
}
.allsports-card .badge:before {
  margin: 0;
  vertical-align: 0;
  background: #ff4b5c;
  animation: as-ping 1.8s ease-out infinite;
}
.allsports-card .as-upcoming-icon {
  left: 10px;
  bottom: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #ffffff26;
  background: #08090d8c;
  -webkit-backdrop-filter: blur(10px) saturate(1.4);
  backdrop-filter: blur(10px) saturate(1.4);
  color: #fff;
}
@keyframes as-ping {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 75, 92, 0.55);
  }
  70%,
  100% {
    box-shadow: 0 0 0 7px rgba(255, 75, 92, 0);
  }
}

/* ---------- tablet + desktop ---------- */
@media (min-width: 768px) {
  .allsports-card .caption {
    gap: 4px;
    padding: 15px 18px 17px 31px;
  }
  .allsports-card .caption::before {
    left: 18px;
    top: 16px;
    bottom: 17px;
  }
  .allsports-section .as-state {
    font-size: 15.5px;
  }
  .allsports-section .as-meta {
    font-size: 13px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .allsports-card {
    transition: none;
  }
  .allsports-card .badge:before {
    animation: none;
  }
    }
