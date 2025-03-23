import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./Ui/Footer";
import Header from "./Ui/Header";
const AppLayout = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default AppLayout;
