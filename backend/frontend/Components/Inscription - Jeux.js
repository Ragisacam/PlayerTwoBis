import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'reactstrap';



function Inscription() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}

// card

// Plateforme 
// Champ de saisie

// Service
// Champ de saisie

// Jeux - image - API (route)
// Champ de saisie

// Tag
// Champ de saisie

// Progression bar
const Example = (props) => {
    return (
      <div>
        <Progress value="25">25%</Progress>
      </div>
    );
  };
  

// Bouton Save (route)
<Button color="primary" size="lg">Save</Button>{' '}



export default Inscription;
