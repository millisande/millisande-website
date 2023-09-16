import { render } from '@testing-library/react';
import App from './pages/App';

jest.mock('./GlobalStyles', () => ({
    __esModule: true,
    default: jest.fn()
}));

describe('App', () => {
    it('should render', () => {
        const { getByText } = render(<App />);
        expect(getByText('Millisande')).toBeDefined();
    })
})