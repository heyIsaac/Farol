'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
  onLoaded?: () => void;
  onClick?: () => void;
}

export const SplineViewer: React.FC<SplineViewerProps> = ({
  url,
  className,
  style,
  onLoaded,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    // Attach custom element dynamically or let spline-viewer handle it
    const viewer = containerRef.current.querySelector('spline-viewer');
    if (!viewer) return;

    const removeLogo = () => {
      try {
        if (viewer.shadowRoot) {
          const logo = viewer.shadowRoot.querySelector('#logo');
          if (logo) logo.remove();
        }
      } catch {
        // ignore cross-origin/shadow-root errors
      }
    };

    removeLogo();
    const interval = setInterval(removeLogo, 1000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (onLoaded) onLoaded();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [mounted, onLoaded]);

  if (!mounted) {
    return <div className={className} style={style} />;
  }

  return (
    <div ref={containerRef} className={className} style={style} onClick={onClick}>
      {React.createElement('spline-viewer', {
        url,
        'events-target': 'global',
        'mouse-controls': 'true',
        'touch-action': 'none',
        style: { width: '100%', height: '100%', display: 'block' },
      })}
    </div>
  );
};
