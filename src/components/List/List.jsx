import { useCovidData } from "../../hooks/dataContext";
import React, { useState } from "react";
import "./List.css";
const numberDefaultFormatter = new Intl.NumberFormat();
export default function List({}) {
  const { covidData } = useCovidData();
  const { data, currentLocation } = covidData;
  return (
    <>
      <div className="list-title">
        <ListTitle keyName="Country"/>
        <ListTitle keyName="Confirmed"/>
        <ListTitle keyName="Deaths"/>
        <ListTitle keyName="Recovered"/>
        <ListTitle keyName="Existing"/>
      </div>
      {data?.[currentLocation]?.map((dataObj) => (
        <ListItems dataObj={dataObj} key={dataObj.id} />
      ))}
    </>
  );
}
function ListTitle({ keyName }) {
  const { covidData } = useCovidData();
  const [order, setOrder] = useState(1)
  function sorting() {
    const sortedArray = covidData
    console.log(covidData);
    if (typeof covidData[0][keyName] === 'string') {
      sortedArray.sort((a,b) => {
        return a[keyName].localeCompare(b[keyName]) * order
      })    
    } else {
      sortedArray.sort((a,b) => {
        return (a[keyName] - b[keyName]) * order
      })  
    }

    setOrder(order * -1)
  }
  return (
    <>
      <h2 onClick={() => sorting(keyName)}>
        {keyName.slice(0, 1).toUpperCase() + keyName.slice(1)}
      </h2>
    </>
  );
}

function ListItems({ dataObj }) {
  const { covidData } = useCovidData();
  const { lang } = covidData;
  return (
    <>
      <a href="#" className="list-box-wrapper">
        <div className="country-box">
          <span>{dataObj.label[lang]}</span>
        </div>
        <div className="confirmed-box confirmed counter">
          <span>{numberDefaultFormatter.format(dataObj.confirmed)}</span>
          <span>{numberDefaultFormatter.format(dataObj.delta_confirmed)}</span>
        </div>
        <div className="deaths-box deaths counter">
          <span>{numberDefaultFormatter.format(dataObj.deaths)}</span>
          <span>{numberDefaultFormatter.format(dataObj.delta_deaths)}</span>
        </div>
        <div className="recovered-box recovered counter">
          <span>{numberDefaultFormatter.format(dataObj.recovered)}</span>
          <span>{numberDefaultFormatter.format(dataObj.delta_recovered)}</span>
        </div>
        <div className="existing-box existing counter">
          <span>{numberDefaultFormatter.format(dataObj.existing)}</span>
          <span>{numberDefaultFormatter.format(dataObj.delta_existing)}</span>
        </div>
      </a>
    </>
  );
}
