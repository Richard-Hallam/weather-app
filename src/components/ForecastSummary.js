import React from "react";
import forecast from "../data/forecast.json";
import iconData from "../data/iconData.json";


function simplifyWeatherCode(weatherCode){
    let simplifiedCode = 0;
    if (weatherCode < 300 && weatherCode >= 200){
        simplifiedCode = 200;
    } else if (weatherCode < 400 && weatherCode >= 300){
        simplifiedCode = 300;
    }else if (weatherCode < 600 && weatherCode >= 500){
        simplifiedCode = 500;
    }else if (weatherCode < 700 && weatherCode >= 600){
        simplifiedCode = 600;
    }else if (weatherCode < 800 && weatherCode >= 700){
        simplifiedCode = 700;
    }else if (weatherCode < 900 && weatherCode >= 800){
        simplifiedCode = 800;
    }
    return simplifiedCode;
}


function ForecastSummary(props){
    const {
        date,
        description,
        icon,
        temperature,
    } = props;

    
    const formattedDate = new Date(date).toDateString();
    

    return<div className="forecast-summary" data-testid="forecast-summary">
        <div className="forecast-summary_date">
            {formattedDate}
        </div>
        <div className="forecast-summary_icon" data-testid="forecast-icon">
            <img src = {iconData[simplifyWeatherCode(icon)]} alt='Weather Icon'/>
        </div>
        <div className="forecast-summary_temperature">
            {temperature.max}
        </div>
        <div className="forecast-summary_description">
            {description}
        </div>
    </div>;
};



export default ForecastSummary;