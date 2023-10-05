import React from "react";
import formatDate from '../dateFormatter'


function ForecastDetails(prop){
    const{
        forecast
    } = prop
    
    // const formattedDate = new Date(forecast.Date).toDateString();
    const formattedDate = formatDate(forecast.date);

    
}