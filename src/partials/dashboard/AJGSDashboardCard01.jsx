import React from 'react';

function AJGSDashboardCard01() {
  const openEarthStudio = () => {
    window.open('https://www.google.com/earth/studio/', '_blank');
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white dark:bg-gray-800 shadow-xs rounded-xl h-full overflow-hidden">
      <div
        className="flex-1 relative cursor-pointer"
        onClick={openEarthStudio}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
          alt="Tierra"
          className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition duration-300"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-black/50 text-white px-4 py-2 rounded text-lg font-semibold">
            Abrir Google Earth Studio
          </span>
        </div>
      </div>
    </div>
  );
}

export default AJGSDashboardCard01;