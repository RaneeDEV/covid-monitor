import "./List.css";
import React, { useState } from 'react'

export default function List({ covidData, changeCounts }) {
  const [order, setOrder] = useState(1)

  const numberDefaultFormatter = new Intl.NumberFormat();
  
  function sorting() {
    const sortedArray = [...covidData]

    const [key, type] = covidData

    if (type == 'ab') {
      covidData.sort((a, b) => {
        if (typeof a[key] == 'string'){
          return a[key].localeCompare(b[key] * order)
        } else if (a[key] == 'boolean' || 'number'){
          return a[key] - b[key] * order
        }
      })
    } else if (type == 'ba'){
      covidData.sort((a, b) => {
        if (typeof b[key] == 'string'){
          return b[key].localeCompare(a[key] * order)
        } else if (b[key] == 'boolean' || 'number'){
          return b[key] - a[key] * order
        }
      })
    }
    changeCounts(sortedArray)
    setOrder(order * -1)
    console.log(order);
  }

  return (
    <>
      <div className="listTitle">
        <h2 onClick={() => sorting()}>Country</h2>
        <h3 onClick={() => sorting()}>Confirmed</h3>
        <h4 onClick={() => sorting()}>Deaths</h4>
        <h5 onClick={() => sorting()}>Recovered</h5>
        <h6 onClick={() => sorting()}>Existing</h6>
      </div>
      {covidData.map((dataObj) => (
        <a href="#" className="listBoxWrapper" key={dataObj.id}>
          <div className="countryBox">
            <span>{dataObj.label.en}</span>
          </div>
          <div className="confirmedBox confirmed counter">
            <span>{numberDefaultFormatter.format(dataObj.confirmed)}</span>
            <span>
              {numberDefaultFormatter.format(dataObj.delta_confirmed) == 0
                ? "-"
                : `${numberDefaultFormatter.format(dataObj.delta_confirmed)}`}
            </span>
          </div>
          <div className="deathsBox deaths counter">
            <span>{numberDefaultFormatter.format(dataObj.deaths)}</span>
            <span>
              {numberDefaultFormatter.format(dataObj.delta_deaths) == 0
                ? "-"
                : `${numberDefaultFormatter.format(dataObj.delta_confirmed)}`}
            </span>
          </div>
          <div className="recoveredBox recovered counter">
            <span>{numberDefaultFormatter.format(dataObj.recovered)}</span>
            <span>
              {numberDefaultFormatter.format(dataObj.delta_recovered) == 0
                ? "-"
                : `${numberDefaultFormatter.format(dataObj.delta_confirmed)}`}
            </span>
          </div>
          <div className="existingBox existing counter">
            <span>{numberDefaultFormatter.format(dataObj.existing)}</span>
            <span>
              {numberDefaultFormatter.format(dataObj.delta_existing) == 0
                ? "-"
                : `${numberDefaultFormatter.format(dataObj.delta_confirmed)}`}
            </span>
          </div>
        </a>
      ))}
    </>
  );
}
