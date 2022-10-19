import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Search from '../Search';

describe('RadioGroup', () => {
  test('should toggle clearable', () => {
    const onChange = jest.fn();
    const { container } = render(<Search clearable onChange={onChange} />);
    const el = container.querySelector('.ucee-search__input') as Element;

    fireEvent.change(el, { target: { value: '123' } });
    expect(container.querySelector('.ucee-search--clear')).toBeTruthy();
    fireEvent.change(el, { target: { value: '' } });
    expect(container.querySelector('.ucee-search--clear')).toBeFalsy();
  });

  test('should trigger onClear', () => {
    const onClaer = jest.fn();
    const { container } = render(<Search clearable onClear={onClaer} value="123" />);
    const iconEle = container.querySelector('.ucee-search--clear') as Element;
    const el = container.querySelector('.ucee-search__input') as HTMLInputElement;

    fireEvent.click(iconEle);
    expect(onClaer).toHaveBeenCalled();
    expect(el.value).toEqual('');
  });

  test('should trigger onSearch', () => {
    const onSearch = jest.fn();
    const { container } = render(<Search onSearch={onSearch} />);
    const el = container.querySelector('.ucee-search__input') as Element;

    fireEvent.keyDown(el, { key: 'Enter', code: 'Enter' });
    expect(onSearch).toHaveBeenCalled();
    fireEvent.keyDown(el, { key: 'A', code: 'KeyA' });
    expect(onSearch.mock.results[1]).toBeFalsy();
  });

  test('should trigger onAction', () => {
    const onAction = jest.fn();
    const { container } = render(<Search showAction onAction={onAction} />);
    const el = container.querySelector('.ucee-search__action') as Element;

    fireEvent.click(el);
    expect(onAction).toHaveBeenCalled();
  });

});