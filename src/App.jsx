import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import DataSumm from "./components/DataSumm/DataSumm";
import LocationBtn from "./components/LocationBtn/LocationBtn";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import { DataProvider } from "./context/dataContext";


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

  return (
    <DataProvider>
      <Header />
      <div className="sideBar">
        <div className="btns-wrap common-btn">
          <LocationBtn
            text="Ukraine"
            currentLocation={dataLocation}
            changeLocation={() => setDataLocation("ukraine")}
          />
          <LocationBtn
            text="World"
            currentLocation={dataLocation}
            changeLocation={() => setDataLocation("world")}
          />
        </div>
        <div className="data-summ-wrap">
          <DataSumm title="Confirmed:" />
          <DataSumm title="Deaths:" />
          <DataSumm title="Recovered:" />
          <DataSumm title="Existing:" />
        </div>
        <Search />
        <List covidData={covidData} changeCounts={setData} />
      </div>
    </DataProvider>
  );
}

export default App;
