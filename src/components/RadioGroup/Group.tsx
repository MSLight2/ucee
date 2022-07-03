import React from 'react';
import classnames from 'classnames';
import { RadioGroupContextProvider } from './context';
import Radio from '../Radio';
import './index.scss';

interface IOptionsItem {
  value: string | number
  label?: string
  disabled?: boolean
}
export type OptionsItem = IOptionsItem | string;
export interface IRadioGroupProps{
  name?: string
  options?: (OptionsItem)[]
  value?: any
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type BaseRadioGroupProps = Partial<IRadioGroupProps & React.HTMLAttributes<HTMLDivElement>>;

let radioGroupInstansId = 0;

const RadioGroup: React.FC<BaseRadioGroupProps> = (props) => {
  const {
    name: nameProp,
    options,
    value,
    disabled,
    direction = 'vertical',
    className,
    children,
    onChange
  } = props;
  let name = nameProp;
  let renderGruopName = 'renderGroup';

  const baseClass = 'ucee-radiogroup';
  const classNames = classnames(
    baseClass,
    {
      [`${baseClass}--horizontal`]: direction === 'horizontal'
    },
    className
  );

  if (!name) {
    radioGroupInstansId += 1;
    name = `${renderGruopName}${radioGroupInstansId}`;
  }

  let childrenToRender = children;
  if (options && options.length > 0) {
    childrenToRender = options.map((option: OptionsItem) => {
      if (typeof option === 'string') {
        return (
          <Radio
            key={option}
            name={name}
            disabled={disabled}
            value={option}
            checked={option === value}
          >
            {option}
          </Radio>
        )
      }
      return (
        <Radio
          key={`ucee-radiogroup-options-${option.value}`}
          name={name}
          disabled={option.disabled}
          value={option.value}
          checked={option.value === value}
        >
          {option?.label}
        </Radio>
      )
    })
  }

  const onRadioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  }
  
  return (
    <RadioGroupContextProvider value={{
      onChange: onRadioChangeHandler,
      disabled: disabled,
      name: name,
      value: value
    }}>
      <div className={classNames}>
        {childrenToRender}
      </div>
    </RadioGroupContextProvider>
  );
}

export default React.memo(RadioGroup);