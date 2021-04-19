import './List.css';

export default function List({covidData}) {
    return (  
        <>
        <div className="listWrapper">
            <ul className="targetList">
                {covidData.map(data => <li>{data.label.uk}</li>)}
            </ul>
            <ul className="targetList">
                {covidData.map(data => <li>{data.label.uk}</li>)}
            </ul>
            <ul className="targetList">
                {covidData.map(data => <li>{data.label.uk}</li>)}
            </ul>
            <ul className="targetList">
                {covidData.map(data => <li>{data.label.uk}</li>)}
            </ul>
            <ul className="targetList">
                {covidData.map(data => <li>{data.label.uk}</li>)}
            </ul>
        </div>
        </>
    );
}

