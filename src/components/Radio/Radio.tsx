import React from 'react';
import RadioGroupContext from '../RadioGroup/context';
import Checker, { IBaseCheckerProps } from '../Checkbox/checker';
import './index.scss';

const Radio: React.FC<IBaseCheckerProps> = (props) => {
  const {
    shape = 'round',
    ...restProps
  } = props;


  return (
    <Checker
      {...restProps}
      type="radio"
      context={RadioGroupContext}
      shape={shape}
    />
  )
}

export default Radio;