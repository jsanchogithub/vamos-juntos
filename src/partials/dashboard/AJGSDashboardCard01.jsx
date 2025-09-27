import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

function AJGSDashboardCard01() {
  const globeEl = useRef();

  useEffect(() => {
    // Rotación automática
    const interval = setInterval(() => {
      if (globeEl.current) {
        // Cambiamos el longitude con el tiempo para simular giro
        globeEl.current.pointOfView({
          lat: 0,
          lng: (Date.now() / 100) % 360,
          altitude: 2
        });
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white dark:bg-gray-800 shadow-xs rounded-xl h-[80vh] overflow-hidden">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Tierra Giratoria</h2>
      </header>
      <div className="flex-1">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="transparent"
        />
      </div>
    </div>
  );
}

export default AJGSDashboardCard01;