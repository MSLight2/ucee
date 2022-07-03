import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Rate from '..';

describe('Rate', () => {
  test('should not clickable when rate is readOnly', () => {
    const { container } = render(<Rate value={2} readOnly />);
    expect(container.firstChild?.firstChild).toHaveClass('ucee-rate--readOnly');
  });

  test('render custome rate', () => {
    const { container } = render(<Rate value={2} customRate={<p>星</p>} />);
    expect(container).toHaveTextContent('星');
  });

  test('should get decimal when using allow-half and readonly prop', () => {
    const { container } = render(<Rate value={3.8} allowHalf readOnly />);
    const el = container.querySelectorAll('.ucee-rate__item');
    const halfEle = el[3].getElementsByClassName('ucee-rate--half');

    expect(halfEle.length).not.toEqual(0);
    expect(halfEle[0].getAttribute('style')).toEqual('width: 80%;');
  });

  test('should triggle onChange', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Rate value={2} onChange={onChange} />
    );
    const el = container.querySelectorAll('.ucee-rate__item');

    fireEvent.click(el[2]);
    expect(onChange.mock.calls[0][0]).toEqual(3);
  });

  test('does not trigger onChange callback when Rate is disabled and readOnly', () => {
    const onChange = jest.fn();
    const onChange2 = jest.fn();
    const { container } = render(<Rate value={2} disabled onChange={onChange} />);
    const { container: container2 } = render(<Rate value={2} readOnly onChange={onChange2} />);
    const el = container.querySelector('.ucee-rate__item') as Element;
    const el2 = container2.querySelector('.ucee-rate__item') as Element;

    fireEvent.click(el);
    expect(container.firstChild?.firstChild).toHaveClass('ucee-rate--disabled');
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.click(el2);
    expect(onChange2).not.toHaveBeenCalled();
  });

  test('should show half star when trigger click with allowHalf prop', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Rate value={2.5} allowHalf onChange={onChange} />
    );
    const el = container.querySelectorAll('.ucee-rate__item');
    const targetHalf = el[3].getElementsByClassName('ucee-rate--half')[0]

    fireEvent.click(el[2]);
    expect(onChange.mock.calls[0][0]).toEqual(3);
    fireEvent.click(targetHalf);
    expect(onChange.mock.calls[1][0]).toEqual(3.5);
  })

  test('should clear when using allowClear prop', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Rate value={2} allowClear onChange={onChange} />
    );
    const el = container.querySelectorAll('.ucee-rate__item');

    fireEvent.click(el[2]);
    expect(el[2].firstChild).toHaveClass('ucee-rate--active');
    fireEvent.click(el[2]);
    expect(container.getElementsByClassName('ucee-rate--active').length).toEqual(0);
  });

});