import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import TextInput from './TextInput';

const mockAcceptInput = jest.fn();
const renderWithTheme = () => render(<ThemeProvider theme={light}><TextInput acceptInput={mockAcceptInput}/></ThemeProvider>)

describe('TextInput', () => {
    it('should render with retro input prefix', () => {
        const { getByText } = renderWithTheme();
        expect(getByText(/>/)).toBeDefined();
    })

    it('should accept input', async () => {
        const { container, getByText } = renderWithTheme();
        userEvent.type(container.firstChild?.firstChild?.nextSibling, 'my input{enter}');
        await waitFor(() => {
            expect(mockAcceptInput).toHaveBeenCalledWith('my input');
        })
    })
})