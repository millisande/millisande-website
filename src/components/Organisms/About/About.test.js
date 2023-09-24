import { render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import About from './About';

const renderWithTheme = () => render(<ThemeProvider theme={light}><About /></ThemeProvider>)

describe('About', () => {
    it('should display a title', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('About')).toBeDefined();
    });
});