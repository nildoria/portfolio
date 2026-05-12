'use client';

const ExperienceIllustration = () => (
  <div className="relative w-full flex items-center justify-center select-none">
    <svg viewBox="0 0 300 225" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
      <defs>
        {/* Midnight Neon gradients */}
        <linearGradient id="mn-g1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff2d78"/>
          <stop offset="50%" stopColor="#8b2cff"/>
          <stop offset="100%" stopColor="#00e5ff"/>
        </linearGradient>
        <linearGradient id="mn-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.8"/>
        </linearGradient>
        <filter id="mn-glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="mn-glow2"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>

        <style>{`
          @keyframes mn-float  { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-8px)} }
          @keyframes mn-float2 { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-6px)} }
          @keyframes mn-trace1 { 0%{stroke-dashoffset:480} 100%{stroke-dashoffset:0} }
          @keyframes mn-trace2 { 0%{stroke-dashoffset:900} 100%{stroke-dashoffset:0} }
          @keyframes mn-trace3 { 0%{stroke-dashoffset:360} 100%{stroke-dashoffset:0} }
          @keyframes mn-blink  { 0%,100%{opacity:1}  50%{opacity:0} }
          @keyframes mn-pulse  { 0%,100%{opacity:.4} 50%{opacity:1} }
          @keyframes mn-spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          @keyframes mn-badge  { 0%{opacity:0;transform:scale(.7)} 100%{opacity:1;transform:scale(1)} }
          @keyframes mn-steam  { 0%{transform:translateY(0);opacity:.6} 100%{transform:translateY(-14px);opacity:0} }

          .mn-scene { animation: mn-float  5s ease-in-out infinite }
          .mn-badge1 { animation: mn-badge  .5s ease-out .8s both, mn-float2 4s ease-in-out 1.5s infinite }
          .mn-badge2 { animation: mn-badge  .5s ease-out 1.2s both, mn-float  4.5s ease-in-out 2s infinite }
          .mn-badge3 { animation: mn-badge  .5s ease-out 1.6s both, mn-float2 5s ease-in-out 2.5s infinite }
          .mn-path1  { stroke-dasharray:480; stroke-dashoffset:480; animation: mn-trace1 1.8s ease-out .2s forwards }
          .mn-path2  { stroke-dasharray:900; stroke-dashoffset:900; animation: mn-trace2 2.2s ease-out .5s forwards }
          .mn-path3  { stroke-dasharray:360; stroke-dashoffset:360; animation: mn-trace3 1.5s ease-out 1s   forwards }
          .mn-cursor { animation: mn-blink 1s step-end infinite }
          .mn-dot    { animation: mn-pulse 2s ease-in-out infinite }
          .mn-steam1 { animation: mn-steam 2s ease-out infinite }
          .mn-steam2 { animation: mn-steam 2s ease-out .65s infinite }
          .mn-steam3 { animation: mn-steam 2s ease-out 1.3s infinite }
        `}</style>
      </defs>

      {/* ── ANIMATED BORDER TRACE 1 (top-left, like Lottie's small rounded rect) ── */}
      <g transform="matrix(0.249,0.128,-0.236,0.136,81.2,91.3)">
        <rect x="-50" y="-50" width="100" height="100" rx="22" ry="22"
          className="mn-path1"
          stroke="url(#mn-g1)" strokeWidth="4" fill="none"
          strokeLinecap="butt"/>
      </g>

      {/* ── ANIMATED DIAGONAL CONNECTOR (same as Lottie's large parallelogram path) ── */}
      <g transform="matrix(0.5,0,0,0.5,150,112.5)">
        <path
          className="mn-path2"
          stroke="url(#mn-g1)" strokeWidth="4" fill="none" strokeLinecap="butt"
          d="M-76,-21 C-94,-9 -152,31 -152,31 C-158,35 -157,41 -152,44 L-1,130 C4,133 14,133 19,130 L119,71 C124,68 124,62 118,60 L41,20"/>
      </g>

      {/* ── MAIN SCENE (floats up/down, same position as Lottie central image) ── */}
      <g transform="translate(80,28)">

        {/* Ambient glow */}
        <ellipse cx="68" cy="100" rx="65" ry="40" fill="#8b2cff" opacity=".06" filter="url(#mn-glow2)"/>

        {/* ─ MACBOOK LID ─ */}
        <rect x="10" y="8" width="116" height="86" rx="6" fill="#0e0e1f" stroke="#1a1a3e" strokeWidth="1.2"/>
        <rect x="10" y="8" width="58" height="1.5" rx="1" fill="url(#mn-g1)" opacity=".8"/>
        <rect x="68" y="8" width="58" height="1.5" rx="1" fill="#00e5ff" opacity=".4"/>

        {/* Screen bezel */}
        <rect x="16" y="14" width="104" height="74" rx="4" fill="#07070f"/>

        {/* VS Code sidebar */}
        <rect x="16" y="14" width="18" height="74" fill="#08080f"/>
        {[24,34,44,54,64,74].map((y,i)=>(
          <rect key={i} x="20" y={y} width="10" height="3" rx="1.5"
            fill={i===0?"#ff2d78":"#1a1a3e"} opacity={i===0?.8:.6}/>
        ))}
        <rect x="16" y="20" width="2" height="12" rx="1" fill="#ff2d78"/>

        {/* Tab bar */}
        <rect x="34" y="14" width="40" height="9" fill="#0c0c1a"/>
        <rect x="34" y="14" width="40" height="1.2" fill="#ff2d78" opacity=".7"/>
        <text x="37" y="21" fontSize="4.5" fill="#a1a1aa" fontFamily="monospace">experience.js</text>

        {/* Code lines */}
        <text x="37" y="32" fontSize="4.5" fill="#ff2d78" fontFamily="monospace">const </text>
        <text x="58" y="32" fontSize="4.5" fill="#e5e7eb" fontFamily="monospace">career =</text>
        <text x="37" y="40" fontSize="4.5" fill="#a5b4fc" fontFamily="monospace">  years</text>
        <text x="62" y="40" fontSize="4.5" fill="#fbbf24" fontFamily="monospace">: &apos;10+&apos;</text>
        <text x="37" y="48" fontSize="4.5" fill="#a5b4fc" fontFamily="monospace">  stack</text>
        <text x="62" y="48" fontSize="4.5" fill="#fbbf24" fontFamily="monospace">: [&apos;WP&apos;]</text>
        <text x="37" y="56" fontSize="4.5" fill="#a5b4fc" fontFamily="monospace">  remote</text>
        <text x="65" y="56" fontSize="4.5" fill="#00e5ff" fontFamily="monospace">: true</text>
        <rect className="mn-cursor" x="37" y="62" width="1.2" height="6" fill="#00e5ff" rx=".6"/>

        {/* Keyboard */}
        <rect x="5" y="94" width="126" height="20" rx="4" fill="#0d0d20" stroke="#1a1a3e" strokeWidth="1"/>
        <rect x="5" y="94" width="63" height="1.2" rx=".6" fill="url(#mn-g1)" opacity=".4"/>
        <rect x="14" y="98" width="108" height="10" rx="2" fill="#07070f"/>
        {[0,1,2,3,4,5,6,7,8,9].map(i=>(
          <rect key={i} x={16+i*11} y={100} width="8" height="4" rx="1.5" fill="#1a1a3e" opacity=".9"/>
        ))}
        <rect x="45" y="108" width="46" height="4" rx="2" fill="#07070f" stroke="#1a1a3e" strokeWidth=".8"/>

        {/* Apple logo */}
        <circle cx="68" cy="4" r="3.5" fill="#0e0e1f" stroke="#1a1a3e" strokeWidth=".8"/>
        <circle cx="68" cy="4" r="2" fill="#8b2cff" opacity=".5" filter="url(#mn-glow)"/>

        {/* ─ COFFEE MUG (right of laptop) ─ */}
        <g transform="translate(130,80)">
          <rect x="0" y="6" width="22" height="25" rx="3" fill="#0d0d20" stroke="#1a1a3e" strokeWidth="1"/>
          <ellipse cx="11" cy="6" rx="11" ry="3" fill="#1a1a3e"/>
          <ellipse cx="11" cy="6" rx="9" ry="2" fill="#060610"/>
          <path d="M22 12 Q30 12 30 19 Q30 26 22 26" stroke="#1a1a3e" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <rect x="0" y="18" width="22" height="1.2" rx=".6" fill="url(#mn-g1)" opacity=".6"/>
          <path className="mn-steam1" d="M7 4 Q5 -2 7 -9" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5"/>
          <path className="mn-steam2" d="M11 3 Q13 -3 11 -11" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".4"/>
          <path className="mn-steam3" d="M15 4 Q17 -2 15 -9" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5"/>
        </g>

        {/* Screen glow on desk */}
        <ellipse cx="68" cy="116" rx="50" ry="4" fill="#8b2cff" opacity=".1" filter="url(#mn-glow)"/>
      </g>

      {/* ── FLOATING BADGE 1 (top-right) — outer=position, inner=animation ── */}
      <g transform="translate(196,30)">
        <g className="mn-badge1">
          <rect x="0" y="0" width="78" height="22" rx="11" fill="#0e0e1f" stroke="#ff2d78" strokeWidth=".8" opacity=".9"/>
          <circle cx="11" cy="11" r="4" fill="#ff2d78" opacity=".2"/>
          <circle className="mn-dot" cx="11" cy="11" r="2.5" fill="#ff2d78" filter="url(#mn-glow)"/>
          <text x="19" y="15" fontSize="7" fill="#e5e7eb" fontFamily="monospace">WordPress</text>
        </g>
      </g>

      {/* ── FLOATING BADGE 2 (right-mid) ── */}
      <g transform="translate(212,96)">
        <g className="mn-badge2">
          <rect x="0" y="0" width="62" height="22" rx="11" fill="#0e0e1f" stroke="#00e5ff" strokeWidth=".8" opacity=".85"/>
          <text x="11" y="15" fontSize="7" fill="#00e5ff" fontFamily="monospace">&#x3C;React/&#x3E;</text>
        </g>
      </g>

      {/* ── FLOATING BADGE 3 (bottom-right) ── */}
      <g transform="translate(199,148)">
        <g className="mn-badge3">
          <rect x="0" y="0" width="70" height="22" rx="11" fill="#0e0e1f" stroke="#8b2cff" strokeWidth=".8" opacity=".85"/>
          <circle className="mn-dot" cx="11" cy="11" r="3" fill="#8b2cff" filter="url(#mn-glow)"/>
          <text x="19" y="15" fontSize="6.5" fill="#a1a1aa" fontFamily="monospace">GSAP + PHP</text>
        </g>
      </g>

      {/* ── LEFT SIDE ICON (small laptop, same position as Lottie's left image) ── */}
      <g transform="translate(18,84)">
        <rect x="2" y="8" width="40" height="28" rx="3" fill="#0e0e1f" stroke="#1a1a3e" strokeWidth="1"/>
        <rect x="2" y="8" width="20" height="1" rx=".5" fill="url(#mn-g1)" opacity=".7"/>
        <rect x="4" y="12" width="36" height="20" rx="2" fill="#07070f"/>
        <text x="7" y="20" fontSize="4" fill="#ff2d78" fontFamily="monospace">const</text>
        <text x="7" y="26" fontSize="4" fill="#a5b4fc" fontFamily="monospace">  dev</text>
        <rect x="0" y="36" width="44" height="8" rx="2" fill="#0d0d20" stroke="#1a1a3e" strokeWidth=".8"/>
      </g>

      {/* ── ANIMATED BORDER TRACE 3 (bottom-left, Lottie's third path) ── */}
      <g transform="matrix(0.169,0.075,-0.116,0.078,51.2,139.7)">
        <rect x="-50" y="-50" width="100" height="100" rx="22" ry="22"
          className="mn-path3"
          stroke="url(#mn-g1)" strokeWidth="4" fill="none"
          strokeLinecap="butt"/>
      </g>

      {/* ── AMBIENT GLOW BG ── */}
      <ellipse cx="150" cy="130" rx="110" ry="50" fill="#8b2cff" opacity=".04"/>
    </svg>
  </div>
);

export default ExperienceIllustration;
