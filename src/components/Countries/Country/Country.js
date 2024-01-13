import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>Country Name: {props.name}</h2>
            <p>Polpulation: {props.population}</p>
            <h3>Area: {props.area}</h3>
        </div>
    );
};

export default Country;