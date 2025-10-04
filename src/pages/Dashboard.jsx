import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import AJGSDashboardCard01 from '../partials/dashboard/AJGSDashboardCard01';
import AJGSBottomPanel from '../partials/dashboard/AJGSBottomPanel';
import AJGSRightPanel from '../partials/dashboard/AJGSRightPanel';
import Banner from '../partials/Banner';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div
        className="relative grid flex-1 overflow-hidden"
        style={{
          gridTemplateRows: '5% 75% 20%',
          height: '100vh',
        }}
      >
        {/* Header (5%) */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          className="h-full"
        />

        {/* Cuerpo principal (75%) */}
        <div className="relative flex flex-col overflow-hidden h-full">
          <div className="px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col">
            <div className="grid grid-cols-12 gap-6 h-full">
              <AJGSDashboardCard01 className="col-span-12 h-full" />
            </div>
          </div>
        </div>

        {/* Bottom Panel (20%) */}
        <AJGSBottomPanel className="h-full" />

        {/* Componentes fijos (no afectan la grid) */}
        <Banner />
        <AJGSRightPanel />
      </div>
    </div>
  );
}

export default Dashboard;