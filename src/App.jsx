import "./App.css";
import "./index.css";
import List from "./components/List/List";
import React, { useState, useEffect } from "react";

function App() {
  const [covidData, setData] = useState([]);
  const [dataLocation, setDataLocation] = useState("world");
  const today = new Date().toJSON().split("T")[0];
  useEffect(() => {
    getCovidData(`https://api-covid19.rnbo.gov.ua/data?to=${today}`);
  }, [dataLocation]);

  async function getCovidData(url) {
    const data = await fetch(url).then((r) => r.json());
    setData(data[dataLocation]);
  }

  const [searchRegion, setSearchRegion] = useState("");
  
  function changeRegion(e) {
    setSearchRegion(e.target.value.trim().toLowerCase());
    covidData.filter(data => {
      return data.label.en.toLowerCase().includes(setSearchRegion)
    })
  }

  return (
    <>
      <div className="sideBar">
        <button className="btn" onClick={() => setDataLocation("ukraine")}>
          Ukraine
        </button>
        <button className="btn" onClick={() => setDataLocation("world")}>
          World
        </button>
        <input
          type="search"
          className="regionSearch"
          placeholder="search by region"
          value={searchRegion}
          onChange={changeRegion}
        />
        <List covidData={covidData} changeCounts={setData} />
      </div>
    </>
  );
}

export default App;
