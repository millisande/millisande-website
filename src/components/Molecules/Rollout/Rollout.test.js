import { render } from '@testing-library/react';
import Rollout from './Rollout';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import { ContentWrapper } from './Rollout.style';
import '@testing-library/jest-dom';

// This mocks current but not in useEffect which is where I am using it
// TODO find a better way to mock 
jest.mock('react', () => {
    const actualReact = jest.requireActual('react');
    return {
        ...actualReact,
        createRef: () => ({
            current: {
                scrollWidth: 100,
                scrollHeight: 100,
            },
            key: 'dummyKey',
        }),
    }
})

describe('Rollout', () => {

    const renderWithTheme = ({ rotation, top }) => render(<ThemeProvider theme={light}>
        <Rollout Content={() => (<p>"My Text"</p>)} title="My Title" rotation={rotation} top={top}/>
        </ThemeProvider>)


    it('should render child content', () => {
        const {getByText} = renderWithTheme({});
        expect(getByText(/My Text/)).toBeDefined();
    })

    it('should render a tab with a title', () => {
        const {getByText} = renderWithTheme({});
        expect(getByText("My Title")).toBeDefined();
    })

    it('should be closed when open is not true', () => {
        const {container} = renderWithTheme({});
        const contentWrapper = container.firstChild?.firstChild?.nextSibling;
        expect(contentWrapper).toHaveStyle('height: 0px')
    })

    it('should rotate the component so it can appear on the left', () => {
        const { container } = renderWithTheme({ rotation: 90 });
        expect(container.firstChild).toHaveStyle('width: 100vw;')
        const contentWrapper = container.firstChild?.firstChild?.nextSibling;
        expect(contentWrapper).toHaveStyle('transition: width ease 2s;')
    })

    it('should rotate the component so it can appear on the right', () => {
        const { container } = renderWithTheme({ rotation: 270 });
        expect(container.firstChild).toHaveStyle('width: 100vw;')
        const contentWrapper = container.firstChild?.firstChild?.nextSibling;
        expect(contentWrapper).toHaveStyle('transition: width ease 2s;')
    })

    it('should rotate the component so it can appear on the top of the page', () => {
        const { container } = renderWithTheme({ rotation: 180 });
        expect(container.firstChild).toHaveStyle('height: 100vh;')
        const contentWrapper = container.firstChild?.firstChild?.nextSibling;
        expect(contentWrapper).toHaveStyle('transition: height ease 2s;')
    })

    it('should add optional repositioning on the page', () => {
        const { container } = renderWithTheme({ top: 50 });
        expect(container.firstChild).toHaveStyle('top: 50;')
    })
})

describe('Rollout - ContentWrapper', () => {
    const renderWithTheme = ({ rotation }) => render(<ThemeProvider theme={light}><ContentWrapper open distance={100} rotation={rotation} /></ThemeProvider>)

    it('should display the content is the contentWrapper is open', () => {
        const { container } = renderWithTheme({});
        expect(container.firstChild).toHaveStyle('height: 100px')
    })

    it('should display the content is the contentWrapper is open', () => {
        const { container } = renderWithTheme({ rotation: 90 });
        expect(container.firstChild).toHaveStyle('width: 100px')
    })
})