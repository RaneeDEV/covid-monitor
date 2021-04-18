export default function List({data}) {
    return (  
        <>
            <ul>
                {data.map(data => <li>{data.country}</li>)}
            </ul>
        </>
    );
}

