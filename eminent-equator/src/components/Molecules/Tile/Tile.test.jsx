import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import Cognitive from '../../../assets/cognitive.png';
import Tile from './Tile';

const renderWithTheme = () => render(<ThemeProvider theme={light}><Tile title="My Title" info="My info" tags={[{type: 'cloud', text: 'AWS'}]} image={Cognitive} /></ThemeProvider>)

describe('Tile', () => {
    it('should accept an image prop', () => {
        const {container } = renderWithTheme();
        const img = container.firstChild?.firstChild;
        expect(img).toHaveProperty('src')
    })

    it('should display a title', () => {
        const {getByText } = renderWithTheme();
        expect(getByText('My Title')).toBeDefined();
    })

    it('should display a info', () => {
        const {getByText } = renderWithTheme();
        expect(getByText('My info')).toBeDefined();
    })

    it('should display a tag', () => {
        const {getByText } = renderWithTheme();
        expect(getByText('AWS')).toBeDefined(); 
    })
})