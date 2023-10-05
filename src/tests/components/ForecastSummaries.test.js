import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
    const validProps = [
        {
        date: new Date(111111).toDateString(),
        description:"Stub description 1",
        icon: "800",
        temperature: {
            max: 22,
            min: 12,
        },
      },
      {
        date: new Date(222222).toDateString(),
        description: "Stub description 2",
        icon: "602",
        temperature:{
            max: 24,
            min: 13,
        },
      },
    ];

    it("Renders correctly", () => {
        const { asFragment } = render(<ForecastSummaries forecasts={validProps}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it("Renders the correct number of ForecastSummary instances", () => {
        const{ getAllByTestId } = render(
            <ForecastSummaries forecasts={validProps} />
        );
        expect(getAllByTestId("forecast-summary")).toHaveLength(2);
    });
});