import renderer from 'react-test-renderer';

export function demoTest (name, ReactDemo) {
  it(`${name} demo test`, () => {
    const tree = renderer.create(<ReactDemo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
}