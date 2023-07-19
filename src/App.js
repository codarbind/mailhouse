
import './App.css';
import React from 'react';
import {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CreateMail from './pages/createmail';



import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/vendor/ionicons/css/ionicons.min.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/aos/aos.css';
import './assets/css/style.css';






function App() {
  return (
    <div className="App">
        
     

      <BrowserRouter>

      <Route path='/' component={CreateMail}/>


      
      </BrowserRouter>

    </div>
  );
}

export default App;
