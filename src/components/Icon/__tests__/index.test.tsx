import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Icon from '../index';

describe('Icon', () => {
  test('should render icon with color prop', () => {
    const { container } = render(<Icon name="my" color="#f90" />);
    expect(container).toMatchSnapshot();
  });

  test('should render icon with size prop', () => {
    const { container } = render(<Icon name="my" size={30} />);
    expect(container).toMatchSnapshot();
  });

  test('should render icon with dot prop', () => {
    const { container } = render(<Icon name="my" dot />);
    expect(container.querySelector('.ucee-icon--dot')).toBeTruthy();
  });

  test('should render icon with info prop', () => {
    const { container, rerender } = render(<Icon name="my" info={20} />);
    expect(container.querySelector('.ucee-icon--badge')?.innerHTML).toEqual('20');
    rerender(<Icon name="my" info={200} />);
    expect(container.querySelector('.ucee-icon--badge')?.innerHTML).toEqual('99+');
  });

  test('should trigger onClick', () => {
    const onClick = jest.fn();
    const { container } = render(<Icon name="my" onClick={onClick} />);

    fireEvent.click(container.querySelector('.ucee-icon') as Element);
    expect(onClick).toHaveBeenCalled();
  });

  test('should render url image', () => {
    const { container } = render(<Icon name="https://img.yzcdn.cn/vant/user-active.png" />);
    expect(container.getElementsByTagName('img').length).toEqual(1);
  });
});