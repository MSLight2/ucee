import React, { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import './index.scss';
import Icon from '../Icon';

type OmitAttrs = 'size' | 'type' | 'defaultValue' | 'readOnly'
export interface ISearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, OmitAttrs> {
    label?: string | undefined
    shape?: 'square' | 'round'
    inputAlign?: 'left' | 'right' | 'center'
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    showAction?: React.ReactNode
    actionText?: string
    background?: string
    readonly?: boolean
    clearable?: boolean
    disabled?: boolean
    onClear?: Function
    onSearch?: Function
    onAction?: Function
}

const Search: React.FC<ISearchProps> = (props) => {
  const [inputVal, setInputVal] = useState<any>('');
  const [isShowClear, setIsShowClear] = useState<boolean>(false);
  const {
    label,
    shape = 'square',
    value,
    inputAlign,
    leftIcon,
    rightIcon,
    showAction,
    actionText = '取消',
    background,
    readonly,
    clearable,
    disabled,
    placeholder = '请输入搜索关键字',
    onClear,
    onSearch,
    onAction,
    onChange,
    ...rest
  } = props;
  const baseClass = 'ucee-search';
  const classNames = classnames(
    `${baseClass}__content`,
    {
      [`${baseClass}--round`]: shape === 'round',
      [`${baseClass}--disable`]: disabled
    }
  )

  useEffect(() => {
    if (value) {
      setIsShowClear(true);
      setInputVal(value);
    }
    // eslint-disable-next-line
  }, []);
  
  const renderClearIcon = useMemo(() => {
    return (
      <>
        {clearable && isShowClear &&
          <div
            className={`${baseClass}--clear`}
            onClick={onClearHandler}
          >
            <Icon name='delete-fill' />
          </div>
        }
      </>
    );
    // eslint-disable-next-line
  }, [clearable, isShowClear, onClear]);

  const renderAction = useMemo(() => {
    const actionIsBoolean = typeof showAction === 'boolean';
    let actionProps: React.HTMLAttributes<HTMLElement> | null = null;
    if (actionIsBoolean) {
      actionProps = {
        onClick: () => {
          onAction?.(inputVal);
        }
      }
    }
    return (
      <div
        {...actionProps}
        className={`${baseClass}__action`}
      >
        {actionIsBoolean
          ? actionText
          : showAction
        }
      </div>
    );
    // eslint-disable-next-line
  }, [showAction , actionText, onAction]);

  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...rest,
    type: 'search',
    placeholder,
    disabled,
    readOnly: readonly,
    className: classnames(`${baseClass}__input`, {
      [`${baseClass}__input-clear`]: clearable
    })
  }
  if (inputAlign) {
    inputProps.style = {
      textAlign: inputAlign
    }
  }

  function onClearHandler () {
    setInputVal('');
    setIsShowClear(false);
    onClear?.();
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const ENTER_CODE = 13;
    if (event.key === 'Enter' || event.keyCode === ENTER_CODE) {
      onSearch?.(event);
    }
  }

  function onChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.target.value;
    if (clearable) {
      val ? setIsShowClear(true) : setIsShowClear(false);
    }

    setInputVal(val);
    e.target.value = val;
    onChange?.(e);
  }

  return (
    <div className={baseClass} style={{ background }}>
      <div className={classNames}>
        {label && <span className={`${baseClass}__lable`}>{label}</span>}
        {leftIcon}
        <input
          {...inputProps}
          value={inputVal}
          onKeyDown={onKeyDown}
          onChange={onChangeHandler}
        />
        {renderClearIcon}
        {rightIcon}
      </div>
      {renderAction}
    </div>
  )
}

export default Search;