import React from 'react';
import '../../App.css';
import HeaderUa from './HeaderUa.js'
import MainUa from './MainUa';
import LanguagesUa from './LanguagesUa'
import FooterUa from './FooterUa'

const AppRu=()=> {
  return (
    <div className="app_wrapper">
      <LanguagesUa />
      <HeaderUa />
      <MainUa />
      <FooterUa/>
    </div>
  );
}

export default AppRu;
