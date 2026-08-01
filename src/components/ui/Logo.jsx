import React from 'react';

export default function Logo({ className = '', width }) {
  return (
    <span className={`font-display font-semibold text-xl sm:text-2xl tracking-tight text-white ${className}`}>
      vandrix.site
    </span>
  );
}
