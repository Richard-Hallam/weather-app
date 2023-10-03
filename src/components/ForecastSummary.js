import React from "react";
import forecast from "../data/forecast.json";


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
        <div className="forecast-summary_icon">
            {icon}
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