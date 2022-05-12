import HomePage from "./HomePage"
import TestRenderer from 'react-test-renderer';

describe('<HomePage />', () => {
    test('snapshot', () => {
        const tree = TestRenderer.create(<HomePage />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

