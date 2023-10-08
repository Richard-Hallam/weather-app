import React from "react";
import forecast from "../data/forecast.json";
import iconData from "../data/iconData.json";
import formatDate from '../dateFormatter';
import simplifyWeatherCode from "../SimplifyWeatherCode";



function ForecastSummary(props){
    const {
        date,
        description,
        icon,
        temperature,
        onSelect
    } = props;


    const formattedDate = formatDate(date);
    
    

    return<div className="forecast-summary" data-testid="forecast-summary">
        <div className="forecast-summary_date">
            {formattedDate}
        </div>
        <div className="forecast-summary_icon" data-testid="forecast-icon">
            <img src = {iconData[simplifyWeatherCode(icon)]} alt='Weather Icon'/>
        </div>
        <div className="forecast-summary_temperature">
            {temperature.max}°C
        </div>
        <div className="forecast-summary_description">
            {description}
        </div>
        <button type="button" onClick={() => onSelect(date)}>More details</button>
    </div>;
};



export default ForecastSummary;
