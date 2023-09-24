import { render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import Portfolio from './Portfolio';

const renderWithTheme = () => render(<ThemeProvider theme={light}><Portfolio /></ThemeProvider>)

describe('Main', () => {
    it('should display a title', () => {
        const { getByText } = renderWithTheme();
        expect(getByText(/Portfolio/)).toBeDefined();
    }   );
});