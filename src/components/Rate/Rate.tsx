import classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import Icon from '../Icon';
import './index.scss';

type RateStatus = 'full' | 'half' | 'hollow';

type RateStarusItem = {
  status: RateStatus
  value: number
}

export interface IRateProps {
  count?: number
  value: number
  iconSize?: number
  disabled?: boolean
  readOnly?: boolean
  allowHalf?: boolean
  allowClear?: boolean
  customRate?: React.ReactNode
  activeColor?: string
  unActiveColor?: string
  className?: string
  onChange?: (value?: number) => void
}

const getRateStatus = (
  val: number,
  index: number,
  allowHalf: boolean,
  readOnly: boolean
): RateStarusItem => {
  if (val >= index) {
    return { status: 'full', value: 1 };
  }
  if (val + 0.5 >= index && allowHalf && !readOnly) {
    return { status: 'half', value: 0.5 };
  }
  // 非半选的小数只允许展示，不能点击
  if (val + 1 >= index && allowHalf && readOnly) {
    const cardinal = 10 ** 10;
    return {
      status: 'half',
      value: Math.round((val - index + 1) * cardinal) / cardinal
    }
  }
  return { status: 'hollow', value: 0, };
};

const Rate: React.FC<IRateProps> = (props) => {
  const {
    count = 5,
    value,
    disabled,
    customRate,
    readOnly = false,
    allowHalf = false,
    iconSize = 20,
    allowClear = false,
    activeColor,
    unActiveColor,
    className,
    onChange
  } = props;
  const [rateVal, setRateVal] = useState(value);
  const baseClass = 'ucee-rate';
  const rateClassName = classnames(baseClass, className);
  const rateItemClassNames = classnames(
    `${baseClass}__item`,
    {
      [`${baseClass}--disabled`]: disabled,
      [`${baseClass}--readOnly`]: readOnly,
    }
  );
    
  const startCountList = Array(+count).fill(null)
    .map((_, i) => getRateStatus(
      rateVal,
      i + 1,
      allowHalf,
      readOnly
    ));

  const handlerClick = (_val: number) => {
    if (readOnly) return;
    if (disabled) return;
    if (allowClear && _val === rateVal) {
      setRateVal(0);
    } else {
      setRateVal(_val);
    }
    onChange?.(_val);
  }
  
  const getCustomizeColor = useCallback((isFull: boolean) => ({
    color: isFull ? activeColor : unActiveColor
  }), [unActiveColor, activeColor]);

  const renderStar = (item: RateStarusItem, index: number) => {
    const isFull = item.status === 'full';
    const isHalf = allowHalf && item.value > 0 && item.value < 1;
    const renderCustomRate = (isFill: boolean) => {
      if (customRate) return customRate;
      return (
        <Icon
          name={isFill ? 'favor-fill-light' : 'favor-light'}
          size={iconSize}
        />
      );
    };
    const rateStarClassNames = classnames(
      `${baseClass}__star`,
      {
        [`${baseClass}--active`]: isFull,
      }
    );

    return (
      <div
        className={rateItemClassNames}
        key={index}
        onClick={() => handlerClick(index + 1)}
      >
        <div className={rateStarClassNames} style={getCustomizeColor(isFull)}>
          {renderCustomRate(isFull)}
        </div>
        {allowHalf && (
          <div
            className={classnames(
              rateStarClassNames,
              {
                [`${baseClass}--half`]: true,
                [`${baseClass}--active`]: isFull || isHalf,
              }
            )}
            style={{
              width: `${item.value ? item.value * 100 : '50%'}%`,
              ...getCustomizeColor(isFull)
            }}
            onClick={(e) => {
              handlerClick(index + 0.5);
              e.stopPropagation();
            }}
          >
            {renderCustomRate(true)}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={rateClassName}>
      {startCountList.map(renderStar)}
    </div>
  )
}

export default Rate;