import './App.css';
import './index.css';
import List from "./components/List/List";
import React, { useState, useEffect } from 'react'


function App() {
    const [data, setData] = useState([])

    useEffect(() => {
      getData('https://api-covid19.rnbo.gov.ua/data?to=2021-04-17')
    }, [])
  
    async function getData(url) {
      const covidData = Array.from(await fetch(url).then(r => r.json())) 
      setData(covidData)
      console.log(covidData);
    }
    
  return (

    <>
    <div className="container">
      <List data={data}/>
    </div>
    </>
  );
}

export default App;
