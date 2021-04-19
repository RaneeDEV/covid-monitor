import './App.css';
import './index.css';
import List from "./components/List/List";
import React, { useState, useEffect } from 'react'


function App() {

    const [covidData, setData] = useState([])

    const today = new Date().toJSON().split('T')[0]

    useEffect(() => {
      getData(`https://api-covid19.rnbo.gov.ua/data?to=${today}`)
    }, [])
  
    async function getData(url) {
      const data = await fetch(url).then(r => r.json()) 
      setData(data.world)
    }
    
  return (

    <>
      <List covidData={covidData}/>
    </>
  );
}

export default App;
