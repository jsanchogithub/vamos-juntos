import React, { useState } from 'react';
import { CheckCircle, XCircle, Circle } from 'lucide-react';

function AJGSRightPanel() {
  // Array de 20 estados (pueden ser 'pending', 'success', 'error')
  const [statuses, setStatuses] = useState(Array(20).fill('pending'));

  // Función de ejemplo para simular conexión aleatoria
  const testConnections = () => {
    setStatuses(statuses.map(() => (Math.random() > 0.5 ? 'success' : 'error')));
  };

  return (
    <div className="fixed top-0 right-0 h-screen w-[10vw] bg-blue-900 text-white flex flex-col items-center py-4 space-y-2 z-60 shadow-lg overflow-y-auto">
      
      <button
        onClick={testConnections}
        className="mb-4 px-2 py-1 bg-indigo-600 rounded text-xs hover:bg-indigo-500"
      >
        Probar conexiones
      </button>

      {statuses.map((status, idx) => (
        <div
          key={idx}
          className={`w-16 h-16 flex items-center justify-center rounded-lg shadow-md transition-colors duration-300
            ${status === 'pending' ? 'bg-gray-600' : ''}
            ${status === 'success' ? 'bg-green-600' : ''}
            ${status === 'error' ? 'bg-red-600' : ''}
          `}
        >
          {status === 'pending' && <Circle className="w-6 h-6 text-white" />}
          {status === 'success' && <CheckCircle className="w-6 h-6 text-white" />}
          {status === 'error' && <XCircle className="w-6 h-6 text-white" />}
        </div>
      ))}
    </div>
  );
}

export default AJGSRightPanel;