import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from '../../components/Tooltip';
import AJGSInfoBox from "./AJGSInfoBox"; 

function AJGSDashboardCard01() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [server, setServer] = useState("Servidor local");
  const { t } = useTranslation();

  useEffect(() => {
    const updateSize = () =>
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const openEarthStudio = () => {
    window.open('https://www.google.com/earth/studio/', '_blank');
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white dark:bg-gray-800 shadow-xs rounded-xl h-full relative">
      
      {/* Contenedor de imagen (relative) */}
      <div className="relative w-full h-full cursor-pointer" onClick={openEarthStudio}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
          alt="Tierra"
          className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition duration-300 rounded-xl"
        />

        {/* Texto central */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <span className="bg-black/50 text-white px-4 py-2 rounded text-lg font-semibold">
            Abrir Google Earth Studio
          </span>
        </div>

        {/* Caja flotante — ahora sí, relativa a la imagen */}
        <AJGSInfoBox
          position="top-right"  // Cambia entre: "top-right", "top-left", etc.
          screenSize={screenSize}
          server={server}
        />
      </div>
    </div>
  );
}

export default AJGSDashboardCard01;