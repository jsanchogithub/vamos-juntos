import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';

// jgs20250921: App es un Component: comienza en mayuscula, retorna codigo que puede ser renderizado.
function App() {

  const location = useLocation();
  const jgsArr1 = ['jgs1110','jgs1111','jgs1112']; //jgs20250925

  function getRandomInt(max) {
    return Math.floor(Math.random()*(max+1));
  }

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  // jgs20250921: Routes es un Component, Route es un Component.
  // 
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
      {/*{jgsArr1[getRandomInt(2)]}  aparece no fim*/}
    </>
  );
}

export default App;
