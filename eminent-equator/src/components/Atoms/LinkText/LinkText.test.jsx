import { render, waitFor, fireEvent } from '@testing-library/react';
import LinkText from './LinkText';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';

const mockClick = jest.fn();
const renderWithTheme = () => render(<ThemeProvider theme={light}><LinkText onClick={mockClick}>My Text</LinkText></ThemeProvider>) 

describe('LinkText', () => {
    it('should display children', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('My Text')).toBeDefined();
    });

    it('should trigger the onClick when the component is clicked', async () => {
        const { getByText } = renderWithTheme();
        fireEvent.click(getByText('My Text'));
        await waitFor(() => {
            expect(mockClick).toHaveBeenCalled();
        })
    });

})