import React from 'react';
import { getByAltText, getByPlaceholderText, getByText, render } from '@testing-library/react';
import ForecastSummary from '../../components/ForecastSummary';

describe("LocationDetails", () => {
    const validProps ={
        date:1111111,
        description:"Stub description",
        icon: "800",
        temperature:{
            min: 12,
            max: 22,
        },
    };

    it('renders the forecast summary', () => {
        const { getByText, getByAltText} = render(
            <ForecastSummary
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
        />
        );

        const  image = getByAltText('Weather Icon');

        expect(image).toHaveAttribute('src', "https://openweathermap.org/img/wn/01d@2x.png")

        expect(getByText("Thu Jan 01 1970")).toHaveAttribute("class", "forecast-summary_date");
        expect(getByText("Stub description")).toHaveAttribute("class", "forecast-summary_description");
        expect(getByText("22")).toHaveAttribute("class", "forecast-summary_temperature");
    });
});