import React from 'react';
const { useEffect, useState } = require("react");

function Shapes() {
    const [countries, setCountries] = useState([]);
    const [currCountry, setCurrCountry] = useState();

    useEffect(async () => {
        const response = await fetch('/shapes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const Json = await response.json();
        console.log(Json);
        setCountries(Json);
    })

    return (
        <div>
            {}
        </div>
    )
}

export default Shapes;