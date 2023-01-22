import { render } from '@testing-library/react';
import Tag from './Tag';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';

const renderWithTheme = () => render(<ThemeProvider theme={light}><Tag>My Text</Tag></ThemeProvider>);

describe('Tag', () => {
    it('should display the child text', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('My Text')).toBeDefined();
    })
});