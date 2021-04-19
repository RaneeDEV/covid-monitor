import "./List.css";

export default function List({ covidData }) {
  const numberFormatter = new Intl.NumberFormat();

  return (
    <>
      <div className="listBoxWrapper">
        <div className="container">
          <div className="listBox">
            <ul className="covidList">
              <h2 className="listTitle">Country</h2>
              {covidData.map((data) => (
                <li className="text">{data.label.en}</li>
              ))}
            </ul>
            <div className="covidList">
              <h2 className="listTitle">Confirmed</h2>
              {covidData.map((data) => (
                <div className="counters confirmed">
                  <span>{numberFormatter.format(data.confirmed)}</span>
                  <span>{numberFormatter.format(data.delta_confirmed)}</span>
                </div>
              ))}
            </div>
            <div className="covidList">
              <h2 className="listTitle">Deaths</h2>
              {covidData.map((data) => (
                <div className="counters deaths">
                  <span>{numberFormatter.format(data.deaths)}</span>
                  <span>{numberFormatter.format(data.delta_deaths)}</span>
                </div>
              ))}
            </div>
            <div className="covidList">
              <h2 className="listTitle">Recovered</h2>
              {covidData.map((data) => (
                <div className="counters recovered">
                  <span>{numberFormatter.format(data.recovered)}</span>
                  <span>{numberFormatter.format(data.delta_recovered)}</span>
                </div>
              ))}
            </div>
            <div className="covidList">
              <h2 className="listTitle">Existing</h2>
              {covidData.map((data) => (
                <div className="counters existing">
                  <span>{numberFormatter.format(data.existing)}</span>
                  <span>{numberFormatter.format(data.delta_existing)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
