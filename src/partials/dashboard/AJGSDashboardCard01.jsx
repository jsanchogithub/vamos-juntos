import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from '../../components/Tooltip';

function AJGSDashboardCard01() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [server, setServer] = useState("Servidor local");
  const { t } = useTranslation();

  useEffect(() => {
    const updateSize = () => setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const openEarthStudio = () => {
    window.open('https://www.google.com/earth/studio/', '_blank');
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white dark:bg-gray-800 shadow-xs rounded-xl h-full overflow-hidden relative">
      
      {/* Imagen clicable */}
      <div
        className="absolute inset-0 cursor-pointer z-10"
        onClick={openEarthStudio}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
          alt="Tierra"
          className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition duration-300"
        />
        {/* Texto central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-black/50 text-white px-4 py-2 rounded text-lg font-semibold">
            Abrir Google Earth Studio
          </span>
        </div>
      </div>

      {/* Caja inferior derecha */}
      <div
        className="absolute right-4 w-1/3 bg-black/70 text-white p-3 text-sm rounded-tl-lg overflow-auto z-20"
        style={{ top: '75%', height: '25%' }}
      >
        <div><strong>Tamaño pantalla:</strong> {screenSize.width} x {screenSize.height}</div>
        <div><strong>Servidor:</strong> {server}</div>
        <div><strong>Otros datos:</strong> ...</div>
      </div>
    </div>
  );
}

export default AJGSDashboardCard01;