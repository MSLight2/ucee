import React from 'react';
import classnames from 'classnames';
import { getIsImage, transformSize } from '../../utils';
import './index.scss'

export interface IconProps {
  name: string,
  dot?: boolean,
  info?: string | number,
  color?: string,
  size?: string | number,
  className?: string,
  classPrefix?: string,
  containerClassName?: string
  onClick?: Function
}

const basePrefix: string = 'ucee-icon';

const Icon: React.FC<IconProps> = (props) => {
  const {
    name,
    dot,
    info,
    color,
    size,
    className,
    classPrefix = basePrefix,
    containerClassName = `${basePrefix}__box`,
    onClick
  } = props;

  const containerClass = classnames(`${containerClassName}`);

  let isImage = getIsImage(name);
  const classNames = classnames(
    `${classPrefix}`,
    {
      [`${classPrefix}-${name}`]: !isImage
    },
    className
  );
  const iconProps = {
    className: classNames,
    style: {}
  };
  if (color) {
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        color
      }
    });
  }
  if (size) {
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        fontSize: transformSize(size)
      }
    });
  }
  if (onClick) {
    Object.assign(iconProps, { onClick });
  }

  const IconElem = () => {
    return (
      <>
        {
          isImage ? (
            <div className={classPrefix}>
              <img src={name} className={`${classPrefix}__img`} alt="" />
            </div>
          ) : (
            <i {...iconProps}></i>
          )
        }
      </>
    )
  }

  return (
    <>
      {
        (dot || info)
          ? <div className={containerClass}>
              {dot && !info && <span className={`${classPrefix}--dot`}></span>}
              {info && Number(info) > 0 &&
                <span
                  className={`${classPrefix}--badge`}
                >
                  {Number(info) > 99 ? '99+' : info}
                </span>
              }
              <IconElem />
            </div>
          : <IconElem />
      }
    </>
  );
}

export default Icon;