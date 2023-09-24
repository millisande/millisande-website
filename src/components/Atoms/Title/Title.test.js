import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import Title from './Title';

const renderWithTheme = (type) => render(<ThemeProvider theme={light}><Title title="Title" type={type}/></ThemeProvider>)

describe('Title', () => {
    it('should return a h1 if the h1 type is passed', () => {
        const { getByText } = renderWithTheme('h1');
        expect((getByText('Title')).tagName).toBe('H1');
    });

    it('should return a h2 if the h2 type is passed', () => {
        const { getByText } = renderWithTheme('h2');
        expect((getByText('Title')).tagName).toBe('H2');
    });

    it('should return a h3 if the type is not specified', () => {
        const { getByText } = renderWithTheme();
        expect((getByText('Title')).tagName).toBe('H3');
    });
});