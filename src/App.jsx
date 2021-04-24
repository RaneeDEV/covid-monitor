import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import DataSumm from "./components/DataSumm/DataSumm";
import LocationBtn from "./components/LocationBtn/LocationBtn";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import { useCovidData } from "./hooks/dataContext";

function App() {
  const [covidDataLocation, setCovidDataLocation] = useState("world");
  const today = new Date().toJSON().split("T")[0];
  useEffect(() => {
    getCovidData(`https://api-covid19.rnbo.gov.ua/data?to=${today}`);
  }, [covidDataLocation]);
  async function getCovidData(url) {
    const data = await fetch(url).then((r) => r.json());
    setCovidData(data[covidDataLocation]);
  }

  const {covidData, setCovidData} = useCovidData()

  return (
    <>
      <Header langUK="UK" langEN="EN" />
      <div className="sideBar">
        <div className="btns-wrap common-btn">
          <LocationBtn
            text="Ukraine"
            currentLocation={covidData}
            changeLocation={() => setCovidDataLocation("ukraine")}
          />
          <LocationBtn
            text="World"
            currentLocation={covidData}
            changeLocation={() => setCovidDataLocation("world")}
          />
        </div>
        <div className="data-summ-wrap">
          <DataSumm title="Confirmed:" />
          <DataSumm title="Deaths:" />
          <DataSumm title="Recovered:" />
          <DataSumm title="Existing:" />
        </div>
        <Search />
        <List covidData={covidData} />
      </div>
    </>
  );
}

export default App;
