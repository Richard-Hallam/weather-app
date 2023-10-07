import React, { useState } from 'react';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';


import '../styles/App.css'

const App = ({location, forecasts})=> {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find( forecast => forecast.date === selectedDate);

  function handleForecastSelect(date){
    pass
  }

  return(
    <div className="App">
      <LocationDetails 
        city={location.city} 
        country={location.country}
        />
        <ForecastSummaries forecasts={forecasts}/>
        <ForecastDetails forecast={selectedForecast}/>
    </div>
  );
};



export default App;