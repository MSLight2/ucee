import React from 'react';
import CheckboxGroupContext from '../CheckboxGroup/context';
import Checker, { IBaseCheckerProps } from './checker';
import './index.scss';

const Checkbox: React.FC<IBaseCheckerProps> = (props) => {
  const {
    shape = 'square',
    ...restProps
  } = props;

  return (
    <Checker
      {...restProps}
      type="checkbox"
      context={CheckboxGroupContext}
      shape={shape}
    />
  )
}

export default Checkbox;