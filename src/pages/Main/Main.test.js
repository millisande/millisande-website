import { render, waitFor, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../utils';
import Main from './Main';

const renderWithTheme = () => render(<ThemeProvider theme={light}><Main /></ThemeProvider>)

window.HTMLElement.prototype.scrollIntoView = function() {};

describe('Main', () => {
    it('should display a title', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('Millisande')).toBeDefined();
    })

    it('should show content when selected', async () => {
        const { getByText } = renderWithTheme();
        const about = getByText('About');
        act(() => {
            about.click();
        })
        await waitFor(() => {
        expect(getByText(/Millisande Bath is a senior software developer/)).toBeDefined();
        });
    })

    it('should close the content when selected', async () => {
        const { getByText, queryAllByText } = renderWithTheme();
        const about = getByText('About');
        act(() => {
            about.click();
        })
        act(() => {
            about.click();
        })
        await waitFor(() => {
        expect(queryAllByText('About').length).toBe(1);
        });
    })

    it('should change the content when selected', async () => {
        const { getByText } = renderWithTheme();
        const about = getByText('About');
        const portfolio = getByText('Portfolio');
        act(() => {
            about.click();
        })
        act(() => {
            portfolio.click();
        })
        await waitFor(() => {
        expect(getByText(/As much of the work that Millisande works/)).toBeDefined();
        });
    });
})