import React, { useState } from 'react';

export const Logo = ({ size = 48, className = "" }) => {
  const [error, setError] = useState(false);
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center overflow-hidden rounded-full border-2 border-brand-gold/30 bg-white shadow-xs shrink-0 ${className}`}
    >
      {!error ? (
        <picture>
          <source srcSet="/logo.webp" type="image/webp" />
          <img
            src="/logo.png"
            alt="The Light of Peace logo"
            width={size}
            height={size}
            className="w-[85%] h-[85%] object-contain"
            onError={() => setError(true)}
          />
        </picture>
      ) : (
        <div className="absolute inset-0 bg-brand-emerald-dark flex items-center justify-center text-brand-gold font-bold text-xs">
          TLOP
        </div>
      )}
    </div>
  );
};
