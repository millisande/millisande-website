import { render, act, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import CustomContentTile from './CustomContentTile';

const renderWithTheme = (args) => render(<ThemeProvider theme={light}><CustomContentTile title="Title" args>{args?.children}</ CustomContentTile></ThemeProvider>)

describe('CustomContentTile', () => {
 
    it('should display a title', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('Title')).toBeDefined();
        expect(getByText('Technologies used:')).toBeDefined();
    })

    it('should display children in a read more accordion', () => {
        const { getByText } = renderWithTheme({children: <p>Children</p>});
        const readMore = getByText('Read more');
        act(() => {
            readMore.click();
        })
        waitFor(() => {
            expect(getByText('Children')).toBeDefined();
        })
    });
});