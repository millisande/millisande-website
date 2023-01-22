import { render, fireEvent, waitFor } from '@testing-library/react'
import Button from './Button'
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';

const mockPress = jest.fn();
const renderWithTheme = () => render(<ThemeProvider theme={light}><Button onClick={mockPress}>My Text</Button></ThemeProvider>) 

describe('Button', () => {
    it('should render the child components', () => {
        const { getByText } = renderWithTheme();
        expect(getByText('My Text')).toBeDefined();
    });

    it('should trigger the onPress when clicked', async () => {
        const { getByText } = renderWithTheme();
        fireEvent.click(getByText('My Text'));
        await waitFor(() => {
            expect(mockPress).toHaveBeenCalled();
        })
    });
})