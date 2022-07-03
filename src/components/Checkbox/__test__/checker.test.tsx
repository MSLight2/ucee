import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Checker from '../checker'
const context = React.createContext(null);

describe('Checker', () => {
  test('should render radio checker', () => {
    const { container } = render(
      <Checker
        type="radio"
        context={context}
      />
    );

    expect(container.querySelector('input')).toHaveClass('ucee-radio__input');
    expect(container.querySelector('input')).toHaveProperty('type', 'radio');
  });

  test('should render checkbox checker', () => {
    const { container } = render(
      <Checker
        type="checkbox"
        context={context}
        shape="square"
      />
    );
    
    expect(container.firstChild).toHaveClass('ucee-checkbox--square');
    expect(container.querySelector('input')).toHaveClass('ucee-checkbox__input');
    expect(container.querySelector('input')).toHaveProperty('type', 'checkbox');
  });

  test('Checker click should trigger event', () => {
    const handlerClick = jest.fn();
    const { container } = render(
      <Checker
        type="checkbox"
        context={context}
        shape="square"
        onChange={handlerClick}
      />
    );

    fireEvent.click(container.querySelector('.ucee-checkbox__wrapper') as Element);
    expect(handlerClick).toHaveBeenCalled();
  });
});