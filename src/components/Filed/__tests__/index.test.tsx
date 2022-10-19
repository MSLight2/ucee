import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Filed from '..';

describe('Filed', () => {
  test('should trigger onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<Filed onChange={onChange} />);
    const el = container.querySelector('.ucee-field__control') as Element;

    fireEvent.change(el, { target: { value: '12' } });
    expect(onChange.mock.calls[0][0].target.value).toEqual('12');
  });

  test('should trigger onClear', () => {
    const onClear = jest.fn();
    const { container } = render(<Filed clearable onClear={onClear} value='123' />);
    const iconEle = container.querySelector('.ucee-field--icon-clear') as Element;
    const el = container.querySelector('.ucee-field__control') as HTMLInputElement;

    fireEvent.click(iconEle);
    expect(onClear).toHaveBeenCalled();
    expect(el.value).toEqual('');
  });

  test('should toggle clearable', () => {
    const onChange = jest.fn();
    const { container } = render(<Filed clearable onChange={onChange} />);
    const el = container.querySelector('.ucee-field__control') as Element;

    fireEvent.change(el, { target: { value: '123' } });
    expect(container.querySelector('.ucee-field--icon-clear')).toBeTruthy();
    fireEvent.change(el, { target: { value: '' } });
    expect(container.querySelector('.ucee-field--icon-clear')).toBeFalsy();
  });

  test('should trigger onBlur', () => {
    const onBlur = jest.fn();
    const { container } = render(<Filed onBlur={onBlur} />);
    const el = container.querySelector('.ucee-field__control') as Element;

    fireEvent.blur(el);
    expect(onBlur).toHaveBeenCalled();
  });

  test('should trigger onRightClick', () => {
    const onRightClick = jest.fn();
    const { getByTestId } = render(
      <Filed
        onRightClick={onRightClick}
        rightIcon={<span data-testid="right-icon">icon</span>}
      />
    );
    const spanEle = getByTestId('right-icon');

    fireEvent.click(spanEle);
    expect(onRightClick).toHaveBeenCalled();
  });

  test('should trigger onInputClick', () => {
    const onInputClick = jest.fn();
    const { container } = render(<Filed onInputClick={onInputClick} />);
    const el = container.querySelector('.ucee-field__control') as Element;

    fireEvent.click(el);
    expect(onInputClick).toHaveBeenCalled();
  });

  test('should render field label', () => {
    const { container } = render(<Filed label="文本" titleWidth={200} />);
    expect(container).toMatchSnapshot();
  });

  test('should render leftIcon', () => {
    const { container } = render(<Filed leftIcon={<span>icon</span>} />);
    expect(container).toMatchSnapshot();
  });

  test('should output integer number when formatType prop is integer', () => {
    const onChange = jest.fn();
    const { container } = render(<Filed formatType='integer' onChange={onChange} />);
    const el = container.querySelector('.ucee-field__control') as Element;

    fireEvent.change(el, { target: { value: '123abc' } });
    expect(onChange.mock.calls[0][0].target.value).toEqual('123');
    fireEvent.change(el, { target: { value: '1a2b3c' } });
    expect(onChange.mock.calls[0][0].target.value).toEqual('123');
  });

  test('should output float number when formatType prop is float', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Filed formatType='float' precision={4} onChange={onChange} />
    );
    const el = container.querySelector('.ucee-field__control') as Element;

    fireEvent.change(el, { target: { value: '..123' } });
    expect(onChange.mock.calls[0][0].target.value).toEqual('.123');
    fireEvent.change(el, { target: { value: '00.123' } });
    expect(onChange.mock.calls[0][0].target.value).toEqual('0.123');
    fireEvent.change(el, { target: { value: '1.23456' } });
    expect(onChange.mock.calls[0][0].target.value).toEqual('1.2345');
  });
});