import React from "react";
import formatDate from '../dateFormatter';
import iconData from '../data/iconData.json';
import simplifyWeatherCode from "../SimplifyWeatherCode";

import '../styles/ForecastDetails.css'



function ForecastDetails(prop){
    const{
        forecast
    } = prop
    

    const formattedDate = formatDate(forecast.date);

    return <div className="Forecast-Details">
        <div className="forecast_details_date">
            {formattedDate}
        </div>
        <div className="forecast_details_icon">
            <img src = {iconData[simplifyWeatherCode(forecast.icon)]} alt= "Weather icon detailed"/>
        </div>
        <div className='forecast_details_max_temp'>
            Max:{forecast.temperature.max}°C
        </div>
        <div className='forecast_details_min_temp'>
            Min:{forecast.temperature.min}°C
        </div>
        <div className='forecast_details_humidity'>
            Humidity{forecast.temperature.humidity}%
        </div>
        <div className='forecast_details_wind_speed'>
            Wind Speed:{forecast.wind.speed}Mph
        </div>
        <div className='forecast_details_wind_direction'>
            Wind direction:{forecast.wind.direction}
        </div>
        <div className='forecast_details_description'>
            {forecast.description}
        </div>

    </div>
}

export default ForecastDetails;