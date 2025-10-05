import React from "react";

function AJGSInfoBox({ position = "bottom-right", screenSize, server }) {
  const isPortrait = screenSize.height > screenSize.width;
  const boxWidth = isPortrait ? "80%" : "30%";
  const boxHeight = isPortrait ? "20%" : "25%";

  // Margen de seguridad dinámico
  const safeMargin = isPortrait ? 8 : 12; // px

  // Clases base de estilo
  const baseClasses =
    "absolute bg-black/70 text-white p-4 text-sm overflow-auto z-20 transition-all duration-500 rounded-lg";

  // Estilos específicos de posición
  const positionStyle = {
    "bottom-right": { bottom: safeMargin, right: safeMargin },
    "bottom-left": { bottom: safeMargin, left: safeMargin },
    "top-right": { top: safeMargin, right: safeMargin },
    "top-left": { top: safeMargin, left: safeMargin },
  };

  return (
    <div
      className={baseClasses}
      style={{
        width: boxWidth,
        height: boxHeight,
        boxSizing: "border-box",
        position: "absolute",
        ...positionStyle[position],
      }}
    >
      <div>
        <strong>Tamaño pantalla:</strong> {screenSize.width} x {screenSize.height}
      </div>
      <div>
        <strong>Servidor:</strong> {server}
      </div>
      <div>
        <strong>Otros datos:</strong> ...
      </div>
    </div>
  );
}

export default AJGSInfoBox;