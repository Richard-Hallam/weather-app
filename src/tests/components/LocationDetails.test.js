import React from 'react';
import { render } from '@testing-library/react';
import LocationDetails from '../../components/LocationDetails';


describe("LocationDetails", () => {
    it('renders the correct city and location props', () => {
       const { getByText } = render(
        <LocationDetails city="Manchester" country="UK" />
       );
       expect(getByText("Manchester, UK")).toBeTruthy();
    });

    it('renders the correct city and location props as a HTML heading element', () => {
        const { getByText } = render(
         <LocationDetails city="Manchester" country="UK" />
        );
        expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
     });
});