import { render, fireEvent, waitFor } from '@testing-library/react';
import Scrollout from './Scrollout';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import { ContentWrapper } from './Scrollout.style';
import '@testing-library/jest-dom';

jest.spyOn(window, 'scrollTo');

describe('Scrollout', () => {

    const renderWithTheme = ({ rotation }) => render(<ThemeProvider theme={light}>
        <Scrollout Content={() => (<p>"My Text"</p>)} title="My Title" rotation={rotation}/>
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
        expect(container.firstChild).toHaveStyle('left: calc(100vh - 64px);')
        const contentWrapper = container.firstChild?.firstChild?.nextSibling;
        expect(contentWrapper).toHaveStyle('transition: width ease 2s;')
    })

    it('should rotate the component so it can appear on the right', () => {
        const { container } = renderWithTheme({ rotation: 270 });
        expect(container.firstChild).toHaveStyle('right: calc(100vw - 64px)')
        const contentWrapper = container.firstChild?.firstChild?.nextSibling;
        expect(contentWrapper).toHaveStyle('transition: width ease 2s;')
    })

    it('should rotate the component so it can appear on the top of the page', () => {
        const { container } = renderWithTheme({ rotation: 180 });
        expect(container.firstChild).toHaveStyle('bottom: calc(100vh - 64px)')
        const contentWrapper = container.firstChild?.firstChild?.nextSibling;
        expect(contentWrapper).toHaveStyle('transition: height ease 2s;')
    })

    it('should add optional repositioning on the page', () => {
        const { container } = renderWithTheme({ top: 50 });
        expect(container.firstChild).toHaveStyle('top: 50;')
    });

    it('should scroll when the tab is clicked', async () => {
        const { getByText } = renderWithTheme({});
        fireEvent.click(getByText('My Title'));
        await waitFor(() => {
            expect(window.scrollTo).toHaveBeenCalled();
        })
    })
})

describe('Scrollout - ContentWrapper', () => {
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