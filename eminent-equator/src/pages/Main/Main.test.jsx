import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../utils';
import Main from './Main';

const renderWithTheme = () => render(<ThemeProvider theme={light}><Main /></ThemeProvider>)

describe('Main', () => {
    it('should display a title', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('Millisande')).toBeDefined();
    })
})