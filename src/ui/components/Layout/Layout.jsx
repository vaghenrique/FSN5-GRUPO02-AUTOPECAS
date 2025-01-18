/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/pages/Layout.js
import React from 'react';
import Header from '@components/Header/Header.jsx'
import Footer from '@components/Footer/Footer.jsx'



const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;