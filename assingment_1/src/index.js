import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Components/Nav';
import Container from './Components/Container'
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Container />
  </React.StrictMode>,
  document.getElementById('root')
);

