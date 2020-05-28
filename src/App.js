import React from 'react';
import './App.css';
import AppUa from './components/UA/AppUa'
import AppUk from './AppUk'
import AppRu from './components/RU/AppRu'
import { HashRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Languages from './components/Languages'

const App = () => {
  return (
    
        <Switch>
          <Route path="/ru"><AppRu /></Route>
          <Route path="/ua"><AppUa /></Route>
          <Route path="/"><AppUk /></Route>
          
      </Switch>
      
  );
}

export default App;
