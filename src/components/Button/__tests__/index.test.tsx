import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '..';

describe('Button', () => {
  test('render primary button', () => {
    const { container } = render(
      <Button type='primary'>主要按钮</Button>
    );
    expect(container.firstChild).toHaveClass('ucee-button--primary');
  });

  test('render plain button', () => {
    const { getByRole } = render(
      <Button plain color="red">朴素按钮</Button>
    );
    const button = getByRole('button');
    expect(button).toHaveClass('ucee-button--plain');
  });

  test('render custome color button', () => {
    const { getByRole } = render(
      <Button color="red" />
    );
    const button = getByRole('button');

    expect(button.style.background).toEqual('red');
    expect(button.style.color).toEqual('white');
  });

  test('render custome loading icon', () => {
    const { getByTestId } = render(
      <>
        <Button data-testid='default' loading />
        <Button data-testid='plain' loading plain />
        <Button data-testid='ring' loading loadingIcon="ring" />
        <Button data-testid='rolling' loading loadingIcon="rolling" />
        <Button data-testid='bar' loading loadingIcon="bar" />
        <Button data-testid='customIcon' loading loadingIcon={<span>custom icon</span>} />
      </>
    );
    
    expect(getByTestId('default').firstChild).toHaveClass('ucee-loading__spinner');
    expect(getByTestId('plain')).toHaveClass('ucee-button--plain');
    expect(getByTestId('ring').firstChild).toHaveClass('ucee-loading__ring');
    expect(getByTestId('rolling').firstChild).toHaveClass('ucee-loading__rolling');
    expect(getByTestId('bar').firstChild).toHaveClass('ucee-loading__dancebar');
    expect(getByTestId('customIcon').querySelector('span')).toHaveTextContent('custom icon');
  });

  test('button click should trigger event', () => {
    const handlerClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handlerClick} />
    );
    const button = getByRole('button');

    fireEvent.click(button);
    expect(handlerClick).toHaveBeenCalled();
  });

  test('should not clickable when button is disabled', () => {
    const handlerClick = jest.fn();
    const { getByRole } = render(
      <Button disabled onClick={handlerClick} />
    );
    const button = getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveClass('ucee-button--disabled');
    expect(handlerClick).not.toHaveBeenCalled();
  });

  test('should not clickable when button is loading', () => {
    const handlerClick = jest.fn();
    const { getByRole } = render(
      <Button loading onClick={handlerClick} />
    );
    const button = getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveClass('ucee-button--loading');
    expect(handlerClick).not.toHaveBeenCalled();
  });

  test('should hide border when color is gradient', () => {
    const { getByRole } = render(
      <Button color='linear-gradient(to right, #4bb0ff, #6149f6)' />
    );
    const button = getByRole('button');

    expect(button.style.border).toEqual('0px');
  });

});