import React, { useState } from "react";
import axios from 'axios';

// components
import SmurfComponent from './SmurfComponent';

// contexts
import { SmurfContext } from '../contexts/SmurfContext';

// styling
import "./App.css";

const App = () => {
  const [smurf, setSmurf] = useState({name: "", age: "", height: ""})
  const [smurfArray, setSmurfArray] = useState([])

  return (
    <SmurfContext.Provider value={{ smurf, setSmurf, smurfArray, setSmurfArray }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Make Your Own Smurfsona!</div>
        <br />
        <SmurfComponent />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
