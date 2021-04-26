import { useCovidData } from "../../hooks/dataContext";
import "./List.css";
const numberDefaultFormatter = new Intl.NumberFormat();
export default function List({}) {
  const { covidData } = useCovidData();
  const { data, currentLocation } = covidData;
  return (
    <>
      <div className="list-title">
        <h2>Country</h2>
        <h2>Confirmed</h2>
        <h2>Deaths</h2>
        <h2>Recovered</h2>
        <h2>Existing</h2>
      </div>
      {data?.[currentLocation]?.map((dataObj) => (
        <ListItems dataObj={dataObj} key={dataObj.id} />
      ))}
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
