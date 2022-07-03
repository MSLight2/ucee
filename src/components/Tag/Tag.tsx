import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import './style/index.scss';
import Icon from '../Icon';

export type TagType = 'primary' | 'success' | 'danger' | 'warning'
export enum TAG_TYPE {
  primary = 'primary',
  success = 'success',
  danger = 'danger',
  warning = 'warning'
}

export enum TAG_SIZE {
  medium = 'medium',
  large= 'large'
}

export interface TagProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  type?: TagType
  size?: 'medium' | 'large'
  color?: string
  textColor?: string
  plain?: boolean
  round?: boolean
  mark?: boolean
  markDir?: 'left' | 'right'
  closeable?: boolean,
  className?: string
  onClose?: () => void;
}

const Tag: React.FC<TagProps> = (props) => {
  const {
    type = TAG_TYPE.primary,
    size,
    color,
    textColor,
    plain,
    round,
    mark,
    markDir = 'right',
    closeable,
    className,
    children,
    onClose
  } = props;
  const [isCloseable, setIsCloseable] = useState<boolean>(false);
  const baseClass = 'ucee-tag';
  const tagClassName = classnames(
    baseClass,
    {
      [`${baseClass}--primary`]: type === TAG_TYPE.primary,
      [`${baseClass}--success`]: type === TAG_TYPE.success,
      [`${baseClass}--danger`]: type === TAG_TYPE.danger,
      [`${baseClass}--warning`]: type === TAG_TYPE.warning,
      [`${baseClass}--medium`]: size === TAG_SIZE.medium,
      [`${baseClass}--large`]: size === TAG_SIZE.large,
      [`${baseClass}--plain`]: plain,
      [`${baseClass}--round`]: round,
      [`${baseClass}--mark`]: !round && mark,
      [`${baseClass}--mark-dir`]: !round && mark && markDir === 'left',
      [`${baseClass}--close`]: closeable
    },
    className
  );
  const customStyle: any = {};
  if (color) {
    customStyle.backgroundColor = color;
    if (plain) {
      customStyle.backgroundColor = 'white';
      customStyle.color = color;
    }
  }
  if (textColor) {
    customStyle.color = textColor;
  }

  const CloseIcon = useCallback(() => {
    return (
      <>
        {closeable &&
          <Icon name='close' size={12} color="#fff" onClick={() => {
            setIsCloseable(true);
            onClose && typeof onClose === 'function' && onClose();
          }} />
        }
      </>
    )
  }, [closeable, onClose])

  return (
    <>
      {!isCloseable &&
        <span className={tagClassName} style={customStyle}>
          {children}
          <CloseIcon />
        </span>
      }
    </>
  )
}

export default Tag;