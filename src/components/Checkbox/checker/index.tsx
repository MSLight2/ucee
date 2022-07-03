import React, { useContext } from 'react';
import classnames from 'classnames';
import Icon from '../../Icon';

export interface IBaseCheckerProps extends React.HTMLAttributes<HTMLInputElement> {
  name?: string
  shape?: 'square' | 'round'
  customeShape?: React.ReactNode
  size?: number | string
  unit?: string
  checkedColor?: string
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  value?: any
}
export type ICheckerProps = IBaseCheckerProps & {
  type: 'checkbox' | 'radio'
  context: React.Context<any>
}

const Checker: React.FC<ICheckerProps> = (props) => {
  const {
    shape,
    customeShape,
    size,
    unit = 'px',
    checkedColor,
    checked,
    children,
    context,
    ...reset
  } = props;
  const checkerGroupContext = useContext(context);
  const checkerProps = {...reset};
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    checkerGroupContext?.onChange?.(e);
  }

  // group控制
  if (checkerGroupContext) {
    checkerProps.name = checkerProps?.name || checkerGroupContext?.name;
    checkerProps.disabled = checkerProps?.disabled || checkerGroupContext?.disabled;
    checkerProps.onChange = onChangeHandler;
    checkerProps.defaultChecked = (
      props.type === "radio"
        ? (checkerProps.value && checkerProps.value === checkerGroupContext?.value)
        : (checkerGroupContext.value && checkerGroupContext.value?.indexOf(checkerProps?.value) !== -1)
    );
  }
  if (checked) checkerProps.defaultChecked = true;

  const prefixName = `ucee-${props.type || 'checker'}`;
  const baseClass = prefixName;
  const classNames = classnames(
    {
      [`${baseClass}--disabled`]: checkerProps.disabled,
      [`${baseClass}--checked`]: checkerProps.defaultChecked,
      [`${baseClass}--square`]: shape === 'square'
    }
  )
  
  let customerStyle: {
    inner: any;
    innerActive: any
  } = {
    inner: undefined,
    innerActive: undefined
  };
  const gray5 = '#c8c9cc';
  if (checkedColor || checkerProps.disabled) {
    customerStyle.inner = Object.assign({}, customerStyle.inner, {
      color: checkerProps.disabled ? gray5 : checkedColor
    });
    customerStyle.innerActive = Object.assign({}, customerStyle.innerActive, {
      background: checkerProps.disabled ? gray5 : checkedColor
    });
  }
  if (size) {
    const inputSize = Number(size) ? Number(size) : 20;
    let wh = (v: number = 1) => ({
      width: inputSize / v + unit,
      height: inputSize / v + unit
    });
    customerStyle.inner = Object.assign({}, customerStyle.inner, wh());
    customerStyle.innerActive = Object.assign({}, customerStyle.innerActive, wh(2));
  }

  const inputProrps = {
    className: `${baseClass}__input`,
    ...checkerProps,
  }

  return (
    <div className={classNames}>
      <label className={`${baseClass}__wrapper`}>
        <span className={baseClass}>
          <input
            {...inputProrps}
          />
          <span className={`${baseClass}__inner`} style={customerStyle.inner}>
            {customeShape
              ? <div className={`${baseClass}__inner-custome`}>
                  {customeShape}
                </div>
              : (
                shape === 'square'
                  ? <i className={`${baseClass}__inner-custome`}>
                      <Icon name="right" size={(Number(size) ? Number(size) : 20) + unit}/>
                    </i>
                  : <i
                      className={`${baseClass}__inner-active`}
                      style={customerStyle.innerActive}
                    />
              )
            }
          </span>
        </span>
        <span className={`${baseClass}__text`}>{children}</span>
      </label>
    </div>
  )
}

export default Checker;