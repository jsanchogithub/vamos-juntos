import React from "react";

function AJGSInfoBox({ position = "bottom-right", screenSize, server }) {
  // Calcular estilo dinámico según orientación
  const isPortrait = screenSize.height > screenSize.width;
  const boxWidth = isPortrait ? "80%" : "30%";
  const boxHeight = isPortrait ? "20%" : "25%";

  // Posiciones posibles
  const positionClasses = {
    "bottom-right": "bottom-4 right-4 rounded-tl-lg",
    "bottom-left": "bottom-4 left-4 rounded-tr-lg",
    "top-right": "top-4 right-4 rounded-bl-lg",
    "top-left": "top-4 left-4 rounded-br-lg",
  };

  return (
    <div
      className={`absolute bg-black/70 text-white p-3 text-sm overflow-auto z-20 transition-all duration-500 ${positionClasses[position]}`}
      style={{
        width: boxWidth,
        height: boxHeight,
      }}
    >
      <div><strong>Tamaño pantalla:</strong> {screenSize.width} x {screenSize.height}</div>
      <div><strong>Servidor:</strong> {server}</div>
      <div><strong>Otros datos:</strong> ...</div>
    </div>
  );
}

export default AJGSInfoBox;