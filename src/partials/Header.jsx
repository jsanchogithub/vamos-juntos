import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ThemeToggle from '../components/ThemeToggle';

function Header({ sidebarOpen, setSidebarOpen, variant = 'default' }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <header
      className={`sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 pr-[10vw] ${
        variant === 'v2' || variant === 'v3'
          ? 'before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10'
          : 'max-lg:shadow-xs lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90'
      } ${variant === 'v2' ? 'dark:before:bg-gray-800' : ''} ${
        variant === 'v3' ? 'dark:before:bg-gray-900' : ''
      }`}
      style={{
        height: '5vh',         // 🔹 siempre el 7% de la pantalla
        minHeight: '5vh',      // 🔹 asegura altura mínima
        maxHeight: '5vh',      // 🔹 evita crecer por contenido interno
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div
          className={`flex items-center justify-between w-full ${
            variant === 'v2' || variant === 'v3'
              ? ''
              : 'lg:border-b border-gray-200 dark:border-gray-700/60'
          }`}
        >
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {/* Selector de idioma temporal */}
            <div className="absolute top-4 left-4 flex gap-2 z-50">
              <button
                onClick={() => i18n.changeLanguage('es')}
                className="px-2 py-1 bg-gray-700 rounded text-xs hover:bg-gray-600"
              >
                ES
              </button>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className="px-2 py-1 bg-gray-700 rounded text-xs hover:bg-gray-600"
              >
                EN
              </button>
              <h1>{t('dashboard_title')}</h1>
              <p>{t('realtime_value')}</p>
            </div>

            <div>
              <button
                className={`w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ml-3 ${
                  searchModalOpen && 'bg-gray-200 dark:bg-gray-800'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                aria-controls="search-modal"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="fill-current text-gray-500/80 dark:text-gray-400/80"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Z" />
                  <path d="m13.314 11.9 2.393 2.393a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414Z" />
                </svg>
              </button>
              <SearchModal
                id="search-modal"
                searchId="search"
                modalOpen={searchModalOpen}
                setModalOpen={setSearchModalOpen}
              />
            </div>
            <Notifications align="right" />
            <Help align="right" />
            <ThemeToggle />
            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none" />
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;