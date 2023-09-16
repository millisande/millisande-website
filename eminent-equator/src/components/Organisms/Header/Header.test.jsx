import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import Header from './Header';

jest.spyOn(global.console, 'log').mockImplementation(jest.fn());

const renderWithTheme = () => render(<ThemeProvider theme={light}><Header /></ThemeProvider>)

const mockToggleTheme = jest.fn();
jest.mock('../../../context/SettingsContext', () => ({
    useSettingsContext: () => ({
        toggleTheme: () => mockToggleTheme(),
    })
}))

describe('Header', () => {
    it('should display a CV button', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('View CV')).toBeDefined();
    })

    it('should display a tool tip if the CV button is hovered over', async () => {
        const { getByText } = renderWithTheme();
        const cvButton = getByText('View CV')
        fireEvent.mouseMove(cvButton)
        await waitFor(() => {
            expect(getByText('Coming soon')).toBeDefined();
        })
    })

    it('should remove the tool tip if the CV button is not hovered over', () => {
        const { getByText } = renderWithTheme();
        const cvButton = getByText('View CV')
        fireEvent.mouseMove(cvButton)
        fireEvent.mouseLeave(cvButton);
        expect(() => getByText('Coming soon')).rejects;
    })

    it('should trigger the onClick', () => {
        const { getByText } = renderWithTheme();
        const cvButton = getByText('View CV')
        fireEvent.click(cvButton)
        expect(console.log).toHaveBeenCalledWith('To be added later');
    })

    it('should change the theme when theme toggle is pressed', () => {
        const { getByLabelText } = renderWithTheme();
        fireEvent.click(getByLabelText(/Theme toggle, click to change to/));
        expect(mockToggleTheme).toHaveBeenCalled();
    })
})