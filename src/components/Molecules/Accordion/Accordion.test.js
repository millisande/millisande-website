import { render, act, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import Accordion from './Accordion';

const renderWithTheme = (args) => render(<ThemeProvider theme={light}><Accordion title="Title" args>{args?.children}</ Accordion></ThemeProvider>)

describe('Accordion', () => {
 
    it('should display a title', () => {
        const { getByText } = renderWithTheme({children: <p>Children</p>});;
        expect(getByText('Title')).toBeDefined();
    })

    it('should display children when open', () => {
        const { getByText } = renderWithTheme({children: <p>Children</p>});
        const readMore = getByText('Title');
        act(() => {
            readMore.click();
        })
        waitFor(() => {
            expect(getByText('Children')).toBeDefined();
        })
    });
});