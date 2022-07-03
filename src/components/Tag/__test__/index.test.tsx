import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tag from '../Tag';

describe('RadioGroup', () => {
  test('should render tag with color prop', () => {
    const { container } = render(<Tag color='#d78bde' textColor="#e6160b" />);
    expect(container).toMatchSnapshot();
  });

  test('should render tag with plain prop', () => {
    const { container } = render(<Tag color='#19fad7' plain />);
    expect(container).toMatchSnapshot();
  });

  test('should render tag with mark prop', () => {
    const { container } = render(<Tag mark />);
    expect(container).toMatchSnapshot();
  });

  test('should triggle onClose', () => {
    const onClose = jest.fn();
    const { container } = render(<Tag closeable onClose={onClose} />);
    const closeEle = container.querySelector('.ucee-icon') as Element;

    fireEvent.click(closeEle);
    expect(onClose).toHaveBeenCalled();
    expect(container.querySelector('.ucee-tag')).toBeFalsy();
  });
});