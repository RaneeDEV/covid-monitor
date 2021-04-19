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
                <p className="confirmed">
                  {numberFormatter.format(data.confirmed)}
                </p>
              ))}
            </div>
            <div className="covidList">
            <h2 className="listTitle">Deaths</h2>
              {covidData.map((data) => (
                <p className="deaths">
                  {numberFormatter.format(data.deaths)}
                </p>
              ))}
            </div>
            <div className="covidList">
            <h2 className="listTitle">Recovered</h2>
              {covidData.map((data) => (
                <p className="recovered">
                  {numberFormatter.format(data.recovered)}
                </p>
              ))}
            </div>
            <div className="covidList">
            <h2 className="listTitle">Existing</h2>
              {covidData.map((data) => (
                <p className="existing">
                  {numberFormatter.format(data.existing)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
