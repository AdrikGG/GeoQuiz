import React from 'react';
import Collapsible from 'react-collapsible';

import './home.css';

const { useEffect, useState } = require("react");

function Home() {
    // const [checkedItems, setCheckedItems] = useState({});
    const [rotate, setRotate] = useState(true);
    const [countries, setCountries] = useState(true);
    const [territories, setTerritories] = useState(false);
    const [divisions, setDivisions] = useState(false);

    // useEffect(() => {
    //     console.log("checkedItems: ", checkedItems);
    // }, [checkedItems]);

    const handleChange = (e) => {
        // e.preventDefault();
        // setCheckedItems({...checkedItems, [e.target.name] : e.target.checked })
        // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;

        if(name === 'rotate') {
            setRotate(!rotate);
        }
        if(name === 'countries') {
            setCountries(!countries);
        }
        if(name === 'territories') {
            setTerritories(!territories);
        }
        if(name === 'divisions') {
            setDivisions(!divisions);
        }
    }

    return (
        <div>
            <div className="outer-container">
                <div className="inner-container">
                    <Collapsible trigger="Country Shapes" open="true">
                        <p>
                            Options for the Country Shapes Quiz
                        </p>
                        <label className="checkbox-option">
                            <input 
                                name="rotate"
                                type="checkbox"
                                checked={rotate}
                                onChange={handleChange}
                            />
                            <span className="checkbox-text">Random Rotation</span>
                        </label>
                        <label className="checkbox-option">
                            <input 
                                name="countries"
                                type="checkbox"
                                checked={countries}
                                onChange={handleChange}
                            />
                            <span className="checkbox-text">Countries</span>
                        </label>
                        <label className="checkbox-option">
                            <input 
                                name="territories"
                                type="checkbox"
                                checked={territories}
                                onChange={handleChange}
                            />
                            <span className="checkbox-text">Territories</span>
                        </label>
                        <label className="checkbox-option">
                            <input 
                                name="divisions"
                                type="checkbox"
                                checked={divisions}
                                onChange={handleChange}
                            />
                            <span className="checkbox-text">Administrative Divisions</span>
                        </label>
                        <div className="start">
                            <button type="button" className="start-button" onClick>Start</button>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Heat Map Game">
                        <p>
                            Options for the Heat Map Game
                        </p>
                    </Collapsible>
                </div>
            </div>
            <footer className="footer-container"></footer>
        </div>
    )
}

export default Home;