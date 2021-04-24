import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import DataSumm from "./components/DataSumm/DataSumm";
import LocationBtn from "./components/LocationBtn/LocationBtn";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import { useCovidData } from "./hooks/dataContext";

function App() {
  const { covidData, setCovidData} = useCovidData();
  const [covidDataLocation, setCovidDataLocation] = useState("world")
  
  useEffect(() => {
    const today = new Date().toJSON().split("T")[0];
    getCovidData(`https://api-covid19.rnbo.gov.ua/data?to=${today}`);
  }, [covidDataLocation]);

  async function getCovidData(url) {
    const data = await fetch(url).then((r) => r.json());
    setCovidData(data[covidDataLocation]);
  }

  return (
    <>
      <Header langUK="UK" langEN="EN" />
      <div className="content-wrap">
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
          <div className="list-wrapper">
            <Search />
            <List covidData={covidData} />
          </div>
        </div>
        <div className="map-box"></div>
      </div>
    </>
  );
}
export default App;
