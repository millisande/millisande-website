import { render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import Header from './Header';

const renderWithTheme = () => render(<ThemeProvider theme={light}><Header /></ThemeProvider>)

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
})