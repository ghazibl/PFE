import React from 'react';
import { useLocation } from 'react-router-dom'; 
import Routers from '../routes/Routers';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';

const Layout = () => {

  const location = useLocation(); 
  

  const showFooter = location.pathname === '/landing';
  const showHeader = location.pathname === '/landing';

  return (
    <div>
  
      <main>
        <Routers />
      </main>
     
    </div>
  );
};

export default Layout;
