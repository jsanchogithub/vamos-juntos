import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import AJGSDashboardCard01 from '../partials/dashboard/AJGSDashboardCard01';
import AJGSBottomPanel from '../partials/dashboard/AJGSBottomPanel';
import AJGSRightPanel from '../partials/dashboard/AJGSRightPanel';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-hidden">

        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Selector de idioma temporal a la izquierda */}
        <div className="absolute top-4 left-4 flex gap-2 z-50">
          <button onClick={() => i18n.changeLanguage('es')} className="px-2 py-1 bg-gray-700 rounded text-xs hover:bg-gray-600">ES</button>
          <button onClick={() => i18n.changeLanguage('en')} className="px-2 py-1 bg-gray-700 rounded text-xs hover:bg-gray-600">EN</button>
          <h1>{t('dashboard_title')}</h1>
          <p>{t('realtime_value')}</p>
        </div>
        
      {/* Texto traducido */}
      <h1 className="text-2xl font-bold mb-2">{t('realtime_value')}</h1>
      <p>Este texto debería cambiar según el idioma seleccionado.</p>

        {/* margen inferior (BottomPanel) + margen derecho (RightPanel) */}
        <main
          className="flex flex-col grow pr-[10vw]"
          style={{
            height: "calc(100vh - 20vh - 4rem)" // 20vh bottomPanel + ~4rem header
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 w-full max-w-[90vw] flex flex-col grow">
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6 grow">
              <AJGSDashboardCard01 className="col-span-12" />
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Aquí podrías poner otros DashboardCards si los necesitas */}
            </div>
          </div>
        </main>

        <Banner />

        {/* Componentes fijos */}
        <AJGSBottomPanel />
        <AJGSRightPanel />
      </div>
    </div>
  );
}

export default Dashboard;