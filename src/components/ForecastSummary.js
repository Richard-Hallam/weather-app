import React from "react";
import forecast from "../data/forecast.json";


function ForecastSummary(props){
    const {
        date,
        description,
        icon,
        temperature,
    } = props;

    return<div class="forecast-summary">
        <div classname="forecast-summary_date">
            {date}
        </div>
        <div classname="forecast-summary_icon">
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