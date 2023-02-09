import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'

function App() {
  const [tips, setTips] = useState("");

  useEffect(() => {
    getTips()
  }, [])

  const getTips = async () => {
    const response = await fetch ("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setTips(data.activity)
    console.log(data.activity)
  }

  return (
    <div className="container">
        <h1>Get advice on what to do!</h1>
        <h2>{tips}</h2>
        <button className="btn" onClick={getTips}>Click here!</button>
    </div>
  );
}

export default App;
