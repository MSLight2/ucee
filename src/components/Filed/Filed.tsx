import React, { useCallback, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import './index.scss';
import Icon from '../Icon';
import { transformSize } from '../../utils';

export type InputType = 'button' |
  'checkbox' |
  'color' |
  'date' |
  'datetime-local' |
  'email' |
  'file' |
  'hidden' |
  'image' |
  'month' |
  'number' |
  'password' |
  'radio' |
  'range' |
  'reset' |
  'search' |
  'submit' |
  'tel' |
  'text' |
  'time' |
  'url' |
  'week'

export interface BaseFieldProps {
    type?: InputType
    formatType?: 'integer' | 'float'
    precision?: number
    size?: 'default' | 'large'
    label?: string
    border?: boolean
    clearable?: boolean
    readonly?: boolean
    titleWidth?: string | number
    inputAlign?: 'left' | 'right'
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    rightContent?: React.ReactNode
    className?: string
    // formatter?: (value: number | string | undefined) => string
    // parser?: (value: number | string | undefined) => string | number
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClear?: Function
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    onInputClick?: React.MouseEventHandler<HTMLInputElement>
    onRightClick?: React.MouseEventHandler<HTMLDivElement>
}

export type OmitAttrs = 'size' | 'type' | 'defaultValue' | 'readOnly'

export type FieldProps = Partial<
    BaseFieldProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, OmitAttrs>
  >

const Field: React.FC<FieldProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState<any>('');
  const [isShowClear, setIsShowClear] = useState<boolean>(false);

  const {
    type,
    formatType,
    precision,
    size = 'default',
    value,
    label,
    border,
    clearable,
    readonly,
    disabled,
    titleWidth,
    inputAlign,
    leftIcon,
    rightIcon,
    rightContent,
    className,
    // formatter,
    // parser,
    onChange,
    onClear,
    onBlur,
    onInputClick,
    onRightClick,
    ...rest
  } = props;
  const baseClass = 'ucee-field';
  const fieldClassNames = classnames(
    baseClass,
    {
      [`${baseClass}--border`]: border,
      [`${baseClass}--large`]: size === 'large',
      [`${baseClass}--disabled`]: disabled,
      [`${baseClass}--right`]: inputAlign === 'right'
    },
    className
  );

  const lableProps = {
    className: `${baseClass}__label`
  };
  if (titleWidth) {
    Object.assign(lableProps, {
      style: {
        width: transformSize(titleWidth)
      }
    })
  }
  const inputProps = {
    ...rest,
    type,
    readOnly: readonly,
    className: `${baseClass}__control`,
    onClick: onInputClick
  };

  useEffect(() => {
    if (value) {
      setIsShowClear(true);
      setInputVal(value);
    }
    // eslint-disable-next-line
  }, []);

  const RenderLeftIcon = useCallback(() => {
    return (
      <>
        {leftIcon && 
          <div className={`${baseClass}__left-icon`}>{leftIcon}</div>
        }
      </>
    );
  }, [leftIcon]);
  
  const RenderRightIcon = useCallback(() => {
    return (
      <>
        {rightIcon && !clearable &&
          <div
            className={`${baseClass}__right-icon`}
            onClick={onRightClick}
          >
            {rightIcon}
          </div>
        }
      </>
    );
  }, [rightIcon, clearable, onRightClick]);

  const RenderRightContent = useCallback(() => {
    return (
      <>
        {rightContent &&
          <div className={`${baseClass}__right-content`}>
            {rightContent}
          </div>
        }
      </>
    );
  }, [rightContent]);

  const RenderClearIcon = useCallback(() => {
    return (
      <>
        {clearable && isShowClear &&
          <div
            className={`${baseClass}--icon-clear`}
            onClick={onClearHandler}
          >
            <Icon name='delete-fill' />
          </div>
        }
      </>
    );
    // eslint-disable-next-line
  }, [clearable, isShowClear, onClear]);

  function getInteger(str: string | undefined): string {
    str = str ?? '';
    str = str.replace(/\D*/g, '');
    return str;
  }
  function getFloat(str: string | undefined, decimalNum: number = 2): string {
    const decimalCountRegx = '\\d'.padEnd(2 * decimalNum, '\\d');
    // eg: /^(\d+)\.(\d\d).*$/
    const decimalRegx = `^(\\d+)\\.(${decimalCountRegx}).*$`;
    str = str ?? '';
    str = str
      .replace(/[^0-9.]*/g, '')
      .replace(/^\./, '')
      .replace(/^0{2,}/g, '0') // 不能多个0开头
      .replace(/\.{2,}/g, '.') // 只能输入一个`.`
      .replace(new RegExp(decimalRegx),'$1.$2') // 只能输入 `x` 位小数
    return str;
  }
  // 格式化输入
  function formatTypeVal (val: string | undefined) {
    if (formatType === 'integer') {
      return getInteger(val);
    } else if (formatType === 'float') {
      return getFloat(val, precision);
    }
    return val ?? '';
  }

  function onClearHandler () {
    setInputVal('');
    setIsShowClear(false);
    onClear?.();
  }
  function onChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.target.value;
    if (clearable) {
      val ? setIsShowClear(true) : setIsShowClear(false);
    }
    val = formatTypeVal(val);

    setInputVal(val);
    e.target.value = val;
    onChange?.(e);
  }
  function onBlurHandler (e: React.FocusEvent<HTMLInputElement>) {
    let val = e.target.value;
    val = formatTypeVal(val);

    setInputVal(val);
    e.target.value = val;
    onBlur?.(e);
  }

  return (
    <div className={fieldClassNames}>
      <RenderLeftIcon />
      <div {...lableProps}>
        <span>{label}</span>
      </div>
      <div className={`${baseClass}__value ${baseClass}__right-clear`}>
        <input
          {...inputProps}
          ref={inputRef}
          value={inputVal}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <RenderClearIcon />
      </div>
      <RenderRightIcon />
      <RenderRightContent />
    </div>
  )
}

export default Field;