import React, { useContext, useEffect } from 'react';
import axios from 'axios';

//contexts
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfComponent = () => {
  const { smurf, setSmurf, smurfArray, setSmurfArray } = useContext(SmurfContext)

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        setSmurfArray(res.data);
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
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res.data);
        setSmurfArray(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
      <>
      <form id="myForm" onSubmit={e => handleSubmit(e)}>
        <label>
          <input type="text" name="name" placeholder="name" onChange={e => handleNameChange(e)} />
          <input type="text" name="age" placeholder="age" onChange={e => handleAgeChange(e)} />
          <input type="text" name="height" placeholder="height" onChange={e => handleHeightChange(e)} />
        </label>
        <button className="button">add smurf</button>
      </form>
      <div className="cardList">
        {smurfArray.map(smurf => (
          <div key={smurf.id} className="card">
            <p>name: {smurf.name}</p>
            <p>age: {smurf.age}</p>
            <p>height: {smurf.height}</p>
          </div>
        ))}
      </div>
      </>
    );
  }


export default SmurfComponent;
