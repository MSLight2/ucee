import React from 'react';
import classnames from 'classnames';
import './index.scss';

export interface CellGroupProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string
}

const CellGroup: React.FC<CellGroupProps> = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;
  const baseClass = 'ucee-cell-group';
  const cellGroupClassName = classnames(
    baseClass,
    className
  )
  return (
    <div className={cellGroupClassName} {...rest}>
      {children}
    </div>
  );
}

export default CellGroup;