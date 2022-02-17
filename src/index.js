import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import Weather from "./components/Weather"
import './index.css';

ReactDOM.render(
  <Router>
  <Weather/>
  </Router>,
   document.getElementById('root')
);
