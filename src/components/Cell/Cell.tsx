import React, { useCallback } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { getIsImage, transformSize } from '../../utils';
import './index.scss';

export interface CellProps {
  icon?: React.ReactNode
  title?: React.ReactNode
  titleWidth?: string | number
  value?: string
  label?: string
  size?: 'default' | 'large'
  border?: boolean
  center?: boolean
  url?: string
  isLink?: boolean
  arrowDirection?: 'left' | 'up' | 'down'
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
  titleClass?: string
  labelClass?: string
  valueClass?: string
}

const Cell: React.FC<CellProps> = (props) => {
  const {
    icon,
    title,
    titleWidth,
    value,
    label,
    size,
    border = true,
    center,
    url,
    isLink,
    arrowDirection = 'left',
    onClick,
    className,
    titleClass,
    labelClass,
    valueClass
  } = props;
  const baseClass = 'ucee-cell'
  const cellClassNames = classnames(
    baseClass,
    {
      [`${baseClass}--large`]: size === 'large',
      [`${baseClass}--borderless`]: !border,
      [`${baseClass}--center`]: center,
      [`${baseClass}--active`]: isLink || url,
    },
    className
  );
  const titleClassNames = classnames(
    `${baseClass}__title`,
    titleClass
  );
  const labelClassNames = classnames(
    `${baseClass}__label`,
    labelClass
  );
  const valueClassNames = classnames(
    `${baseClass}__value`,
    valueClass
  );

  const TitleTag = (title && typeof title === 'string') ? 'span' : 'div';
  const MainTag = url ? 'a' : 'div'
  const styleTitleWidth = transformSize(titleWidth);
  const styleProp: any = {}
  if (titleWidth) {
    styleProp.style = { flexGrow: 0, flexBasis: styleTitleWidth };
  }

  const hrefProps: React.AnchorHTMLAttributes<HTMLElement> = {};
  if (url) {
    hrefProps.href = url
  }

  const RenderIcon = useCallback(() => {
    return (
      <>
        {
          getIsImage(icon as string)
            ? <img src={icon as string} className={`${baseClass}__img`} alt="" />
            : icon
          }
      </>
    )
  }, [icon]);

  const ArrowIcon = useCallback(() => {
    let iocnName = 'enter';
    if (arrowDirection === 'down') {
      iocnName = 'unfold';
    }
    if (arrowDirection === 'up') {
      iocnName = 'packup';
    }
    return isLink
      ? <Icon
          name={iocnName}
          size={19}
          className={isLink && `${baseClass}--icon-right`}
        />
      : null
  }, [isLink, arrowDirection]);

  return (
    <MainTag
      className={cellClassNames}
      onClick={(e: any) => onClick?.(e)}
      {...hrefProps}
    >
      <div
        className={titleClassNames}
        {...styleProp}
      >
        <RenderIcon />
        <TitleTag>{title}</TitleTag>
        {label && <div className={labelClassNames}>{label}</div>}
      </div>
      {value && <div className={valueClassNames}>{value}</div>}
      <ArrowIcon />
    </MainTag>
  )
}

export default Cell;