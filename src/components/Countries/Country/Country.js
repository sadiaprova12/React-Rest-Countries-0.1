import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <p>Polpulation: {props.population}</p>
            {/* <h3>Area: {props.area}</h3> */}
            <p><small>Area: {props.area}</small></p>
        </div>
    );
};

export default Country;