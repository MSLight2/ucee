import React, { useState } from 'react';
import classnames from 'classnames';
import { CheckboxGroupContextProvider } from './context';
import Checkbox from '../Checkbox';
import './index.scss';

export type CheckboxValueType = string | number | boolean;
interface IOptionsItem {
  value: CheckboxValueType
  label?: string
  disabled?: boolean
}
export type OptionsItem = IOptionsItem | string;
export interface ICheckboxGroupProps{
  name?: string
  options?: OptionsItem[]
  value?: CheckboxValueType[]
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
  onChange?: (val: CheckboxValueType[]) => void
}

export type BaseCheckboxGroupProps = Partial<ICheckboxGroupProps & React.HTMLAttributes<HTMLDivElement>>;

const CheckboxGroup: React.FC<BaseCheckboxGroupProps> = (props) => {
  const {
    name: nameProp,
    options = [],
    value,
    disabled,
    direction = 'vertical',
    className,
    children,
    onChange
  } = props;
  let name = nameProp;
  const [values, setValues] = useState<CheckboxValueType[]>(value || []);
  const baseClass = 'ucee-checkboxroup';
  const classNames = classnames(
    baseClass,
    {
      [`${baseClass}--horizontal`]: direction === 'horizontal'
    },
    className
  );

  const getOptions = () => (
    options.map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option
        };
      }
      return option;
    })
  );

  let childrenToRender = children;
  if (options && options.length > 0) {
    childrenToRender = getOptions()?.map((option) => (
      <Checkbox
        key={option.value.toString()}
        name={name}
        disabled={option.disabled}
        value={option.value}
        checked={values.indexOf(option.value) !== -1}
      >
        {option?.label}
      </Checkbox>
    ));
  }

  const toggleOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const optionIndex = values.indexOf(val);
    const newValue = [...values];
    if (optionIndex === -1) {
      newValue.push(val);
    } else {
      newValue.splice(optionIndex, 1);
    }
    setValues(newValue);
    const opts = getOptions();
    onChange?.(
      newValue.sort((a, b) => {
        const indexA = opts.findIndex(opt => opt.value === a);
        const indexB = opts.findIndex(opt => opt.value === b);
        return indexA - indexB;
      })
    );
  }
  
  return (
    <CheckboxGroupContextProvider value={{
      onChange: toggleOption,
      disabled: disabled,
      name: name,
      value: value
    }}>
      <div className={classNames}>
        {childrenToRender}
      </div>
    </CheckboxGroupContextProvider>
  );
}

export default React.memo(CheckboxGroup);