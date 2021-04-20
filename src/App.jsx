import './App.css';
import './index.css';
import List from "./components/List/List";
import React, { useState, useEffect } from 'react'


function App() {

    const [covidData, setData] = useState([])
    const [dataLocation, setDataLocation] = useState('world')
    const today = new Date().toJSON().split('T')[0]
    useEffect(() => {
      getData(`https://api-covid19.rnbo.gov.ua/data?to=${today}`)
    }, [dataLocation])
  
    async function getData(url) {
      const data = await fetch(url).then(r => r.json()) 
      setData(data[dataLocation])
      console.log(data[dataLocation]);
    }

    
    
  return (
    <>
    <div className="sideBar">
      <button className="btn" onClick={() => setDataLocation('ukraine')}>Ukraine</button>
      <button className="btn" onClick={() => setDataLocation('world')}>World</button>
      <List covidData={covidData} changeCounts={setData}/>
    </div>
    </>
  );
}

export default App;
