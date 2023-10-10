import React from 'react';

import '../styles/LocationDetails.css'

function LocationDetails(props) {
    const { city, country } = props;
    return <h1 className="locationDetails">{city}, {country}</h1>;
};


export default LocationDetails;
