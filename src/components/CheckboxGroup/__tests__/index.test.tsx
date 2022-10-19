import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CheckboxGroup from '../Group';
import Checkbox from '../../Checkbox';

describe('CheckboxGroup', () => {
  test('should work basically', () => {
    const onChange = jest.fn();
    const { container } = render(
      <CheckboxGroup options={['A', 'B', 'C']} onChange={onChange} />
    );
    const labels = container.querySelectorAll('.ucee-checkbox__wrapper');

    fireEvent.click(labels[0]);
    expect(onChange.mock.calls[0][0]).toEqual(['A']);
    fireEvent.click(labels[1]);
    expect(onChange.mock.calls[1][0]).toEqual(['A', 'B']);
  });

  test('does not trigger onChange callback when Checkbox is disabled, but CheckboxGroup does not prevent', () => {
    const onChange = jest.fn();
    const options = [
      { label: 'Hello', value: 'Hello' },
      { label: 'World', value: 'World', disabled: true },
    ];
    const { container } = render(
      <CheckboxGroup options={options} onChange={onChange} />
    );
    const labels = container.querySelectorAll('.ucee-checkbox__wrapper');

    fireEvent.click(labels[0]);
    expect(onChange).toHaveBeenCalledWith(['Hello']);
    fireEvent.click(labels[1]);
    expect(onChange).toHaveBeenCalledWith(['Hello']);
  });

  test('does not trigger onChange callback when CheckboxGroup is disabled', () => {
    const onChange = jest.fn();
    const { container } = render(
      <CheckboxGroup options={['A', 'B']} onChange={onChange} disabled />
    );
    const labels = container.querySelectorAll('.ucee-checkbox__wrapper');

    fireEvent.click(labels[0]);
    expect(onChange).not.toHaveBeenCalled();
    fireEvent.click(labels[1]);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('should be controlled by value', () => {
    const { container, rerender } = render(
      <CheckboxGroup options={['A', 'B']} />
    );
    
    expect(container.querySelectorAll('.ucee-checkbox--checked').length).toBe(0);
    rerender(<CheckboxGroup options={['A', 'B']} value={['A']} />);
    expect(container.querySelectorAll('.ucee-checkbox--checked').length).toBe(1);
  });

  test('should trigger onChange in sub Checkbox', () => {
    const onChange = jest.fn();
    const { container } = render(
      <CheckboxGroup>
        <Checkbox onChange={onChange} value='ucee' />
      </CheckboxGroup>
    );
    const label = container.querySelector('.ucee-checkbox__wrapper');

    fireEvent.click(label as Element);
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0].target.value).toEqual('ucee');
  });

  test('onChange should keep the order of the original values with options', () => {
    const onChange = jest.fn();
    const { container } = render(
      <CheckboxGroup options={['1', '2', '3']} onChange={onChange} />
    );
    const labels = container.querySelectorAll('.ucee-checkbox__wrapper');

    fireEvent.click(labels[0]);
    expect(onChange).toHaveBeenCalledWith(['1']);
    fireEvent.click(labels[1]);
    expect(onChange).toHaveBeenCalledWith(['1', '2']);
    fireEvent.click(labels[0]);
    expect(onChange).toHaveBeenCalledWith(['2']);
    fireEvent.click(labels[0]);
    expect(onChange).toHaveBeenCalledWith(['1', '2']);
  });

  test('all children should have a name property', () => {
    const { getAllByRole } = render(
      <CheckboxGroup options={['1', '2', '3']} name="testCheckboxGroupName" />
    );
    getAllByRole('checkbox').forEach(el => {
      expect(el.getAttribute('name')).toEqual('testCheckboxGroupName');
    })
  });
});