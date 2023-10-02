import React from 'react';
import { getByText, render } from '@testing-library/react';
import ForecastSummary from '../../components/ForecastSummary';

describe("LocationDetails", () => {
    const validProps ={
        date:1111111,
        description:"Stub description",
        icon: "stubIcon",
        temperature:{
            min: 12,
            max: 22,
        },
    };

    it('renders the forecast summary', () => {
        const { getByText, getByTestId} = render(
            <ForecastSummary
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
        />
        );

        expect(getByText("1111111")).toHaveAttribute("class", "forecast-summary_date");
        expect(getByText("Stub description")).toHaveAttribute("class", "forecast-summary_description");
        expect(getByText("stubIcon")).toHaveAttribute("class", "forecast-summary_icon");
        expect(getByText("22")).toHaveAttribute("class", "forecast-summary_temperature");
    });
});