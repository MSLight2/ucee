import React, { useCallback } from 'react';
import classnames from 'classnames';
import Spinner from './components/Spinner';
import CircleRing from './components/CircleRing';
import CircleRolling from './components/CircleRolling'
import DanceBar from './components/DanceBar'
import './index.scss';

export type LoadingType = 'default' | 'ring' | 'rolling' | 'bar';

export interface ILoadingProps {
  type?: LoadingType
  color?: string
  size?: string | number
  text?: string
  hiddenText?: boolean,
  vertical?: boolean
  className?: string
  containerClassName?: string
}

export interface IconTypeProps {
  color?: string
  size?: string | number
  className?: string
}

export enum LOADING_TYPE {
  default = 'default',
  ring = 'ring',
  rolling = 'rolling',
  bar = 'bar'
}

const IconMap: { [key: string]: any } = {
  [LOADING_TYPE.default]: (props: IconTypeProps) => {
    return <Spinner {...props} />
  },
  [LOADING_TYPE.ring]: (props: IconTypeProps) => {
    return <CircleRing {...props} />
  },
  [LOADING_TYPE.rolling]: (props: IconTypeProps) => {
    return <CircleRolling {...props} />
  },
  [LOADING_TYPE.bar]: (props: IconTypeProps) => {
    return <DanceBar {...props} />
  }
}

const Loading: React.FC<ILoadingProps> = (props) => {
  const defaultTest = '加载中...';
  const {
    type = LOADING_TYPE.default,
    color,
    size,
    text = defaultTest,
    hiddenText,
    vertical,
    className,
    containerClassName
  } = props;
  const baseClass = 'ucee-loading';
  // 外层class
  const classNames = classnames(
    baseClass,
    {
      [`${baseClass}--vertical`]: vertical,
      [`${baseClass}--horizontal`]: !vertical
    },
    containerClassName
  );

  const textProps = {}
  if (color) {
    Object.assign(textProps, {
      style: {
        color: color
      }
    })
  }

  const IconRender = useCallback(() => {
    return (
      IconMap[type] && IconMap[type]({
        color,
        size,
        className
      })
    );
    // eslint-disable-next-line
  }, [type, color, size, className]);

  return (
    <div className={classNames}>
      <IconRender />
      {!hiddenText &&
        <span
          className={
            `${baseClass}__text 
            ${baseClass}__text--${vertical ? 'vertical' : 'horizontal'}`
          }
          {...textProps}
        >
          {text || defaultTest}
        </span>
      }
    </div>
  );
}

export default Loading;