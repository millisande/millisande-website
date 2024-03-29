import { render } from '@testing-library/react';
import Tag from './Tag';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import '@testing-library/jest-dom';

const renderWithTheme = () => render(<ThemeProvider theme={light}><Tag>My Text</Tag></ThemeProvider>);

describe('Tag', () => {
    it('should display the child text', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('My Text')).toBeDefined();
    });

    it('should apply the correct theme by the tag type', () => {
        const { container } = renderWithTheme();
        expect(container.firstChild).toHaveStyle('background: #3C4E6D');
    })
});