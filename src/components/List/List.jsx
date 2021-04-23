import "./List.css";
const numberDefaultFormatter = new Intl.NumberFormat();

export default function List({ covidData }) {
  return (
    <>
      <div className="listTitle">
        <h2>Country</h2>
        <h2>Confirmed</h2>
        <h2>Deaths</h2>
        <h2>Recovered</h2>
        <h2>Existing</h2>
      </div>
      {covidData.map((dataObj) => (
        <ListItems dataObj={dataObj} key={dataObj.id} />
      ))}
    </>
  );
}

function ListItems({ dataObj }) {
  return (
    <>
      <a href="#" className="listBoxWrapper">
        <div className="countryBox">
          <span>{dataObj.label.en}</span>
        </div>
        <div className="confirmedBox confirmed counter">
          <span>{numberDefaultFormatter.format(dataObj.confirmed)}</span>
          <span>{numberDefaultFormatter.format(dataObj.delta_confirmed)}</span>
        </div>
        <div className="deathsBox deaths counter">
          <span>{numberDefaultFormatter.format(dataObj.deaths)}</span>
          <span>{numberDefaultFormatter.format(dataObj.delta_deaths)}</span>
        </div>
        <div className="recoveredBox recovered counter">
          <span>{numberDefaultFormatter.format(dataObj.recovered)}</span>
          <span>{numberDefaultFormatter.format(dataObj.delta_recovered)}</span>
        </div>
        <div className="existingBox existing counter">
          <span>{numberDefaultFormatter.format(dataObj.existing)}</span>
          <span>{numberDefaultFormatter.format(dataObj.delta_existing)}</span>
        </div>
      </a>
    </>
  );
}
