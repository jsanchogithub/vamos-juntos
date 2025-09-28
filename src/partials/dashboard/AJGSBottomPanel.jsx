import React, { useState } from 'react';

function AJGSBottomPanel() {
  const [output, setOutput] = useState([]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = e.target.value;
      if (command.trim() !== '') {
        setOutput((prev) => [...prev, `> ${command}`]);
        e.target.value = '';
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-[20vh] bg-gray-900 text-white flex z-50 shadow-lg">
      
      {/* Panel izquierdo: comandos */}
      <div className="w-1/5 border-r border-gray-700 p-2 flex flex-col">
        <label className="text-xs text-gray-400 mb-1">Comandos</label>
        <input
          type="text"
          onKeyDown={handleCommand}
          placeholder="Escribe un comando..."
          className="w-full p-2 bg-gray-800 text-white text-sm rounded outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Panel derecho: salida */}
      <div className="w-4/5 p-2 flex flex-col">
        <label className="text-xs text-gray-400 mb-1 block">Salida</label>
        <div className="bg-gray-800 flex-grow rounded p-2 text-sm font-mono overflow-y-auto whitespace-pre-wrap">
          {output.length === 0 ? (
            <span className="text-gray-500">No hay salida todavía...</span>
          ) : (
            output.map((line, idx) => <div key={idx}>{line}</div>)
          )}
        </div>
      </div>
    </div>
  );
}

export default AJGSBottomPanel;
