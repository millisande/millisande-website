import { fireEvent, render, waitFor } from '@testing-library/react';
import Tab from './Tab';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import '@testing-library/jest-dom';

let open = true;
const mockSetOpen = jest.fn().mockImplementation(() => { open = !open})
const renderWithTheme = () => render(<ThemeProvider theme={light}><Tab title="My Title" open={open} setOpen={mockSetOpen}/></ThemeProvider>) 

describe('Tab', () => {
    it('should display a title', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('My Title')).toBeDefined();
    })

    it('should display the arrow with the correct rotation', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('>')).toHaveStyle('transform: rotate(90deg)')
    })

    it('should display the arrow with the correct rotation', () => {
        open = false;
        const { getByText } = renderWithTheme();
        expect(getByText('>')).toHaveStyle('transform: rotate(270deg)')
    })

    it('should run the setOpen function when clicked', async () => {
        const { container } = renderWithTheme();
        fireEvent.click(container.firstChild);
        await waitFor(() => expect(mockSetOpen).toHaveBeenCalled());
    })
})