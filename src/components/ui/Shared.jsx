import React, { useId, useState, useEffect, useRef } from 'react';

export const GeometricPattern = ({ opacity = 0.06, color = "#c9a227" }) => {
  const id = useId().replace(/:/g, '');
  const patternId = `geo-${id}`;
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <defs>
        <pattern id={patternId} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <polygon points="40,5 75,20 75,60 40,75 5,60 5,20" fill="none" stroke={color} strokeWidth="0.8"/>
          <polygon points="40,15 65,27 65,53 40,65 15,53 15,27" fill="none" stroke={color} strokeWidth="0.4"/>
          <circle cx="40" cy="40" r="4" fill="none" stroke={color} strokeWidth="0.6"/>
          <line x1="40" y1="5" x2="40" y2="15" stroke={color} strokeWidth="0.4"/>
          <line x1="40" y1="65" x2="40" y2="75" stroke={color} strokeWidth="0.4"/>
          <line x1="5" y1="20" x2="15" y2="27" stroke={color} strokeWidth="0.4"/>
          <line x1="65" y1="27" x2="75" y2="20" stroke={color} strokeWidth="0.4"/>
          <line x1="5" y1="60" x2="15" y2="53" stroke={color} strokeWidth="0.4"/>
          <line x1="65" y1="53" x2="75" y2="60" stroke={color} strokeWidth="0.4"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`}/>
    </svg>
  );
};

export const MosqueSilhouette = () => (
  <svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="xMidYMax meet">
    <g fill="#0a4028" opacity="0.6">
      <rect x="0" y="200" width="1200" height="100"/>
      <rect x="100" y="120" width="80" height="80"/>
      <ellipse cx="140" cy="120" rx="40" ry="50"/>
      <rect x="130" y="70" width="20" height="55"/>
      <ellipse cx="140" cy="68" rx="10" ry="15"/>
      <rect x="250" y="80" width="200" height="120"/>
      <ellipse cx="350" cy="80" rx="100" ry="70"/>
      <rect x="340" y="10" width="20" height="75"/>
      <ellipse cx="350" cy="8" rx="10" ry="15"/>
      <rect x="480" y="40" width="20" height="45"/>
      <ellipse cx="490" cy="38" rx="10" ry="15"/>
      <rect x="200" y="40" width="20" height="45"/>
      <ellipse cx="210" cy="38" rx="10" ry="15"/>
      <rect x="550" y="150" width="100" height="50"/>
      <rect x="700" y="80" width="200" height="120"/>
      <ellipse cx="800" cy="80" rx="100" ry="70"/>
      <rect x="790" y="10" width="20" height="75"/>
      <ellipse cx="800" cy="8" rx="10" ry="15"/>
      <rect x="930" y="40" width="20" height="45"/>
      <ellipse cx="940" cy="38" rx="10" ry="15"/>
      <rect x="650" y="40" width="20" height="45"/>
      <ellipse cx="660" cy="38" rx="10" ry="15"/>
      <rect x="950" y="120" width="80" height="80"/>
      <ellipse cx="990" cy="120" rx="40" ry="50"/>
      <rect x="980" y="70" width="20" height="55"/>
      <ellipse cx="990" cy="68" rx="10" ry="15"/>
      <rect x="1050" y="150" width="150" height="50"/>
    </g>
  </svg>
);

export const Logo = ({ size = 40 }) => {
  const [error, setError] = useState(false);
  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center overflow-hidden rounded-full border-2 border-brand-gold/20 bg-white">
      {!error ? (
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="w-[85%] h-[85%] object-contain" 
          onError={() => setError(true)} 
        />
      ) : (
        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20"></div>
          <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 30 30" className="relative z-10">
            <path d="M15 3 C9 3 5 8 5 14 C5 20 9 25 15 26 C10 25 7 20 8 14 C9 8 13 5 18 5 C17 4 16 3 15 3Z" fill="#e8c45a"/>
            <polygon points="22,4 23,7 26,7 24,9 25,12 22,10 19,12 20,9 18,7 21,7" fill="#e8c45a"/>
          </svg>
        </div>
      )}
    </div>
  );
};


export const Counter = ({ target, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 30);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};
