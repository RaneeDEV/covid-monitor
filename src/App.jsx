import "./App.css";
import Header from "./components/Header/Header";
import LocationBtn from "./components/LocationBtn/LocationBtn";
import DataSumm from "./components/DataSumm/DataSumm";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import MapLocation from "./components/MapLocation/MapLocation";
import { useCovidData } from "./hooks/dataContext";

function App() {
  const { covidData, covidDataDespatch} = useCovidData();

  return (
    <>
      <Header langUK="UK" langEN="EN" />
      <div className="content-wrap">
        <div className="sidebar">
          <div className="btns-wrap common-btn">
            <LocationBtn
              text="Ukraine"
              currentLocation={covidData.currentLocation}
              changeLocation={() => covidDataDespatch({type: 'setLocation', payload: "ukraine"})}
            />
            <LocationBtn
              text="World"
              currentLocation={covidData.currentLocation}
              changeLocation={() => covidDataDespatch({type: 'setLocation', payload: "world"})}
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
            <List/>
          </div>
        </div>
        <div className="map-box">
          <MapLocation/>
        </div>
      </div>
    </>
  );
}
export default App;
