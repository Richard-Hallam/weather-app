import React from "react";
import { getByText, getAllByPlaceholderText, getByAltText, getByAllText } from "@testing-library/react";
import iconData from '/home/richard/projects/weather-app/weather-app/src/data/iconData.json'
import ForecastDetails from "../../components/ForecastDetails";
import { render } from '@testing-library/react';

describe('ForecastDetails', () => {
    const validProps ={
        date:1111111,
        description:"Stub description",
        icon: "800",
        temperature:{
            min: 12,
            max: 22,
        },
        wind:{
            speed:3,
            direction:'n', 
        }
    };

    it('renders the forcast details', () => {
        const {getByText, getByAltText} = render(
            <ForecastDetails
            forecast= {validProps}
            />
            )
        const  image = getByAltText('Weather icon detailed');

        expect(image).toHaveAttribute('src', "https://openweathermap.org/img/wn/01d@2x.png");
        expect(getByText("Thu Jan 01 1970")).toHaveAttribute("class", "forecast_details_date");
        expect(getByText("Max:22°C")).toHaveAttribute("class", "forecast_details_max_temp");
        expect(getByText("Min:12°C")).toHaveAttribute("class", "forecast_details_min_temp");
        expect(getByText("Wind Speed:3Mph")).toHaveAttribute("class", "forecast_details_wind_speed");
        expect(getByText("Wind direction:n")).toHaveAttribute("class", "forecast_details_wind_direction");
        expect(getByText("Stub description")).toHaveAttribute("class", "forecast_details_description");
        });
    });
    