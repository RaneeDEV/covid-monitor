import "./App.css";
import "./index.css";
import logo from "./logo.svg";
import logo2 from "./logo2.svg";
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
    covidData.filter((data) => {
      return data.label.en.toLowerCase().includes();
    });
  }

  return (
    <>
      <header className="header">
        <div className="brandBox">
          <img src={logo} className="cotaLogo" alt="Cota Logo" />
          <p className="textName">
            <img src={logo2} className="rnboLogo" alt="Cota Logo" />
            National Security and Defense Council of Ukraine
          </p>
        </div>
        <div className="sloganBox">
          <p className="textName">Coronavirus epidemic monitoring system</p>
        </div>
        <div className="languageBox">
          <span className="textName">UK</span>
          <span className="textName">EN</span>
        </div>
      </header>
      <div className="sideBar">
        <button className="btn" onClick={() => setDataLocation("ukraine")}>
          Ukraine
        </button>
        <button className="btn" onClick={() => setDataLocation("world")}>
          World
        </button>
        <div className="searchBox">
          <i class="fas fa-search"></i>
          <input
            type="search"
            className="regionSearch"
            placeholder="search by region"
            value={searchRegion}
            onChange={changeRegion}
          />
        </div>
        <List covidData={covidData} changeCounts={setData} />
      </div>
    </>
  );
}

export default App;
