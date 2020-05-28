import React from 'react';
import '../../App.css';
import HeaderRu from './HeaderRu.js'
import MainRu from './MainRu';
import LanguagesRu from './LanguagesRu'
import FooterRu from './FooterRu'

const AppRu=()=> {
  return (
    <div className="app_wrapper">
      <LanguagesRu />
      <HeaderRu />
      <MainRu />
      <FooterRu/>
    </div>
  );
}

export default AppRu;
