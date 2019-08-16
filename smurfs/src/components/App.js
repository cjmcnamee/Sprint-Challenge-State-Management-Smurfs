import React, { useState, useEffect } from "react";
import axios from 'axios';

// components

// contexts

// styling
import "./App.css";

const App = () => {
  const [smurf, setSmurf] = useState({name: "", age: "", height: ""})
  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleNameChange = e => {
    setSmurf({ ...smurf, name: e.target.value });
  }
  const handleAgeChange = e => {
    setSmurf({ ...smurf, age: e.target.value });
  }
  const handleHeightChange = e => {
    setSmurf({ ...smurf, height: e.target.value });
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log(smurf);
  }

  return (
    <div className="App">
      {console.log(smurf)}
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <br />
      <form id="myForm" onSubmit={e => handleSubmit(e)}>
        <label>
          <input type="text" name="name" placeholder="name" onChange={e => handleNameChange(e)} />
          <input type="text" name="age" placeholder="age" onChange={e => handleAgeChange(e)} />
          <input type="text" name="height" placeholder="height" onChange={e => handleHeightChange(e)} />
        </label>
        <button className="button">add smurf</button>
      </form>
    </div>
  );
}

export default App;
