import React, { useEffect, useState } from 'react';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast'
import '../styles/App.css'

function App()  {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({city: "", country: ""});
  const [selectedDate, setSelectedDate] = useState(0);
  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);
  

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) =>{
    setSelectedDate(date);
  }

  document.body.style = 'background: gray;';

  return(
    <div className="App">
      <LocationDetails 
        city={location.city} 
        country={location.country}
        />
        <ForecastSummaries 
         forecasts={forecasts}
         onForecastSelect={handleForecastSelect}/>
        {selectedForecast && <ForecastDetails forecast={selectedForecast}/>}
    </div>
  );
};



export default App;