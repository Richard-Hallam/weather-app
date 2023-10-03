import { render, screen } from '@testing-library/react';
import App from '../../components/App.js';
import forecast from '../../data/forecast.json';

describe("App", () => {
  test("renders App component correctly", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts}/>);
    const h1Element = screen.getByText(/Manchester, Uk/i);
    expect(h1Element).toBeInTheDocument();
  });
});


