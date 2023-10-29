import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './styles.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";



//componentes
import Header from './header';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
            <Header/>
            
           
          
          <Footer/>

  </React.StrictMode>
);

