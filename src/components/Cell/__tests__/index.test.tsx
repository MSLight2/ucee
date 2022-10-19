import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Cell from '..';

describe('Cell', () => {
  test('should render custom title width', () => {
    const tree = renderer.create(
      <Cell title="单元格" value="内容" titleWidth={300} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should render down or up arrow icon', () => {
    const tree = renderer.create(
      <>
        <Cell title="单元格" value="内容" arrowDirection="down" />
        <Cell title="单元格" value="内容" arrowDirection="up" />
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should render link tag', () => {
    const { container } = render(
      <Cell url="about:blank" isLink />
    );

    expect(container.querySelector('.ucee-cell')?.tagName.toLowerCase()).toEqual('a');
  });

  test('should render lable', () => {
    const { container } = render(
      <Cell title="单元格" label='描述信息' />
    );
    const lable = container.querySelector('.ucee-cell__title')?.lastChild;
    
    expect(lable).toHaveClass('ucee-cell__label');
    expect(lable).toHaveTextContent('描述信息');
  });

  test('cell click should trigger event', () => {
    const handlerClick = jest.fn();
    const { container } = render(
      <Cell data-testid="mockClickCell" onClick={handlerClick} />
    );

    fireEvent.click(container.querySelector('.ucee-cell') as Element);
    expect(handlerClick).toHaveBeenCalled();
  });
});