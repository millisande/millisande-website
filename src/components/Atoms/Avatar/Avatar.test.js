import Avatar from './Avatar';
import Me from '../../../assets/me.jpg';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../utils';
import renderer from 'react-test-renderer';

describe('Avatar', () => {
    it('should render', () => {
        const tree = renderer
        .create(
          <ThemeProvider theme={light}>
            <Avatar image={Me}/>
          </ThemeProvider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
})