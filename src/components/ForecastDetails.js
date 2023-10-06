import React from "react";
import formatDate from '../dateFormatter';
import iconData from '../data/iconData.json';
import simplifyWeatherCode from "../SimplifyWeatherCode";




function ForecastDetails(prop){
    const{
        forecast
    } = prop
    

    const formattedDate = formatDate(forecast.Date);

    return <div className="ForecastDetails">
        <div className="forecast_details_date">
            {formattedDate}
        </div>
        <div className="forecast-summary-icon">
            <img src = {iconData[simplifyWeatherCode(forecast.icon)]} alt= "Weather icon detailed"/>
        </div>
        <div className='forecast-details-max-temp'>
            Max:{forecast.temperature.max}°C
        </div>
        <div className='forecast-details-min-temp'>
            Min:{forecast.temperature.min}°C
        </div>
        <div className='forecast-details-humidity'>
            Humidity{forecast.temperature.humidity}%
        </div>
        <div className='forecast-details-wind-speed'>
            Wind Speed:{forecast.wind.speed}Mph
        </div>
        <div className='forecast-details-wind-direction'>
            Wind direction:{forecast.wind.direction}
        </div>

    </div>
}

export default ForecastDetails;