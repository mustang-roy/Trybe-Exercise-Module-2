import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>
      {['comp1','comp2','comp3','comp4'].map(elem => task(elem))}
    </ol>    
  );
}

export default App;
