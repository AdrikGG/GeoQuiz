const { useEffect } = require("react");

function shapes() {
    const [countries, setCountries] = setState([]);
    const [currCountry, setCurrCountry] = setState();

    useEffect(() => {
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