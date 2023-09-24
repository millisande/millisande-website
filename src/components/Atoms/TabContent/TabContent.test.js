import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import TabContent from './TabContent';

const renderWithTheme = () => render(<ThemeProvider theme={light}><TabContent><p>Children</p></TabContent></ThemeProvider>)

describe('TabContent', () => { 
    it('should display children', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('Children')).toBeDefined();
    })
});