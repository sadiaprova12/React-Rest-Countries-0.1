import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const{area, region, population, name, flags} = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            {/* <h2>Country Name: {props.country.name.common}</h2> */}
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            {/* <p>Polpulation: {props.country.population}</p> */}
            <p>Polpulation: {population}</p>
            {/* <p><small>Region: {props.country.region}</small></p> */}
            <p><small>Region: {region}</small></p>
            {/* <h3>Area: {props.area}</h3> */}
            {/* <p><small>Area: {props.country.area}</small></p> */}
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;