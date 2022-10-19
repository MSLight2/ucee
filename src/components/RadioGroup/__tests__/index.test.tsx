import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RadioGroup from '../Group';
import Radio from '../../Radio';

describe('RadioGroup', () => {
  test('should work basically', () => {
    const onChange = jest.fn();
    const { container } = render(
      <RadioGroup options={['A', 'B', 'C']} onChange={onChange} />
    );
    const labels = container.querySelectorAll('.ucee-radio__wrapper');

    fireEvent.click(labels[0]);
    expect(onChange.mock.calls[0][0].target.value).toBe('A');
    fireEvent.click(labels[1]);
    expect(onChange.mock.calls[1][0].target.value).toBe('B');
  });

  test('does not trigger onChange callback when RadioGroup is disabled', () => {
    const onChange = jest.fn();
    const { container } = render(
      <RadioGroup options={['A', 'B', 'C']} onChange={onChange} disabled />
    );
    const labels = container.querySelectorAll('.ucee-radio__wrapper');

    fireEvent.click(labels[0]);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('does not trigger onChange callback when Radio is disabled, but RadioGroup does not prevent', () => {
    const onChange = jest.fn();
    const { container } = render(
      <RadioGroup options={
        [
          { label: 'A', value: 'A' },
          { label: 'B', value: 'B' },
          { label: 'C', value: 'C', disabled: true}
        ]
      } onChange={onChange} />
    );
    const labels = container.querySelectorAll('.ucee-radio__wrapper');

    fireEvent.click(labels[0]);
    expect(onChange.mock.calls[0][0].target.value).toBe('A');
    fireEvent.click(labels[2]);
    expect(onChange.mock.results[1]).toBeFalsy();
  });

  test('should be controlled by value', () => {
    const { container, rerender } = render(
      <RadioGroup options={['A', 'B']} />
    );
    
    expect(container.querySelectorAll('.ucee-radio--checked').length).toBe(0);
    rerender(<RadioGroup options={['A', 'B']} value="A" />);
    expect(container.querySelectorAll('.ucee-radio--checked').length).toBe(1);
  });
  
  test('should trigger onChange in sub Radio', () => {
    const onChange = jest.fn();
    const { container } = render(
      <RadioGroup>
        <Radio onChange={onChange} value='ucee' />
      </RadioGroup>
    );
    const label = container.querySelector('.ucee-radio__wrapper');

    fireEvent.click(label as Element);
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0].target.value).toEqual('ucee');
  });

  test('should have a default name', () => {
    const { getAllByRole } = render(
      <RadioGroup options={['A', 'B', 'C']} />
    );
    getAllByRole('radio').forEach(el => {
      expect(el.getAttribute('name')).toMatch(/renderGroup\d+/);
    })
  });

  test('all children should have a name', () => {
    const { getAllByRole } = render(
      <RadioGroup options={['A', 'B', 'C']} name='radioGroupName' />
    );
    getAllByRole('radio').forEach(el => {
      expect(el.getAttribute('name')).toEqual('radioGroupName');
    })
  });
});