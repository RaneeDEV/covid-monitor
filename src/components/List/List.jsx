import "./List.css";

export default function List({ covidData }) {
  const numberFormatter = new Intl.NumberFormat();

  return (
    <>
      <div className="sideBar">
      {covidData.map(data => (
        <div className="listBoxWrapper">
          <div className="countryBox">
            <span>{data.label.en}</span>
          </div>
          <div className="confirmedBox confirmed counter">
            <span>{numberFormatter.format(data.confirmed)}</span>
            <span>{numberFormatter.format(data.delta_confirmed)}</span>
          </div>
          <div className="deathsBox deaths counter">
            <span>{numberFormatter.format(data.deaths)}</span>
            <span>{numberFormatter.format(data.delta_deaths)}</span>
          </div>
          <div className="recoveredBox recovered counter">
            <span>{numberFormatter.format(data.recovered)}</span>
            <span>{numberFormatter.format(data.delta_recovered)}</span>
          </div>
          <div className="existingBox existing counter">
            <span>{numberFormatter.format(data.existing)}</span>
            <span>{numberFormatter.format(data.delta_existing)}</span>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}
