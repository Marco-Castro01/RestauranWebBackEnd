import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Carrusel from "./components/carrusel";

const App = () => (
    <div className="App">

        <Navbar/>
      <h1>Welcome to our website!</h1>
      <p>Here you'll find all the information you need about our products and services.</p>
      <Carrusel folderPath='./image/carrusel'/>
    </div>
);

export default App;