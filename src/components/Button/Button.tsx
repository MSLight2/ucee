import React, { useCallback } from 'react';
import classnames from 'classnames';
import { IconTypeProps, LoadingType, LOADING_TYPE } from '../Loading';
import Spinner from '../Loading/components/Spinner';
import CircleRing from '../Loading/components/CircleRing';
import CircleRolling from '../Loading/components/CircleRolling';
import DanceBar from '../Loading/components/DanceBar';
import { getIsImage } from '../../utils';
import './style/index.scss';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger' | 'link'
export enum BUTTON_TYPE {
  default = 'default',
  primary = 'primary',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
  link = 'link'
}

export type ButtonSize = 'mini' | 'small' | 'large'
export enum BUTTON_SIZE {
  mini = 'mini',
  small = 'small',
  large = 'large'
}

export type ButtonShape = 'square' | 'round' | 'circle'
export enum BUTTON_SHAPE {
  square = 'square',
  round = 'round',
  circle = 'circle'
}

export interface IBaseButtonProps {
  type?: ButtonType
  size?: ButtonSize
  color?: string
  icon?: React.ReactNode
  shape?: ButtonShape
  block?: boolean
  plain?: boolean
  disabled?: boolean
  hairline?: boolean
  loading?: Boolean
  loadingIcon?: LoadingType | Omit<React.ReactNode, 'string'>
  loadingSize?: string | number
  className?: string
}

export type NativeButtonProps = IBaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;
export type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = BUTTON_TYPE.default,
    size,
    color,
    icon,
    shape,
    block,
    plain,
    hairline,
    loading,
    loadingIcon = LOADING_TYPE.default,
    loadingSize = 20,
    className,
    children,
    ...rest
  } = props;

  const BtnTag = type === BUTTON_TYPE.link ? 'a' : 'button';
  const baseClass = 'ucee-button';
  const btnClassNames = classnames(
    baseClass,
    {
      [`${baseClass}--default`]: type === BUTTON_TYPE.default,
      [`${baseClass}--primary`]: type === BUTTON_TYPE.primary,
      [`${baseClass}--info`]: type === BUTTON_TYPE.info,
      [`${baseClass}--warning`]: type === BUTTON_TYPE.warning,
      [`${baseClass}--danger`]: type === BUTTON_TYPE.danger,
      [`${baseClass}--link`]: type === BUTTON_TYPE.link,
      [`${baseClass}--mini`]: size === BUTTON_SIZE.mini,
      [`${baseClass}--small`]: size === BUTTON_SIZE.small,
      [`${baseClass}--large`]: size === BUTTON_SIZE.large,
      [`${baseClass}--square`]: shape === BUTTON_SHAPE.square,
      [`${baseClass}--round`]: shape === BUTTON_SHAPE.round,
      [`${baseClass}--circle`]: shape === BUTTON_SHAPE.circle,
      [`${baseClass}--block`]: block,
      [`${baseClass}--plain`]: plain,
      [`${baseClass}--disabled`]: props?.disabled,
      [`${baseClass}--hairline`]: hairline,
      [`${baseClass}--icon`]: icon,
      [`${baseClass}--loading`]: loading,
    },
    className
  );
  const customStyle: any = {};
  if (color) {
    customStyle.color = plain ? color : 'white'
    if (!plain) {
      customStyle.background = color;
    }
    if (color.indexOf('gradient') !== -1) {
      customStyle.border = 0;
    } else {
      customStyle.borderColor = color;
    }
  }

  const loadingIconMap: { [key: string]: any } = {
    [LOADING_TYPE.default]: (props: IconTypeProps) => {
      return <Spinner {...props} />;
    },
    [LOADING_TYPE.ring]: (props: IconTypeProps) => {
      return <CircleRing {...props} />;
    },
    [LOADING_TYPE.rolling]: (props: IconTypeProps) => {
      return <CircleRolling {...props} />;
    },
    [LOADING_TYPE.bar]: (props: IconTypeProps) => {
      return <DanceBar {...props} />;
    }
  }
  const RenderLoadingIcon = useCallback(() => {
    if (typeof loadingIcon === 'string' && loadingIconMap[loadingIcon]) {
      return (
        loadingIconMap[loadingIcon]({
          color: plain ? color : 'white',
          size: loadingSize 
        })
      );
    } else {
      return loadingIcon;
    }
    // eslint-disable-next-line
  }, [color, plain, loadingIcon, loadingSize]);

  const handlerOnClick = (e: React.MouseEvent<HTMLAnchorElement & HTMLButtonElement>) => {
    if (!loading) {
      props?.onClick?.(e);
    }
  }

  return (
    <BtnTag
      {...rest}
      style={customStyle}
      className={btnClassNames}
      onClick={handlerOnClick}
    >
      {loading
        ? <RenderLoadingIcon />
        : (icon &&
            (
              getIsImage(icon as string)
                ? <img src={icon as string} alt="" className={`${baseClass}__img`} />
                : icon
            )
        )
      }
      {children}
    </BtnTag>
  );
}

export default Button;