import React from 'react';
import classnames from 'classnames';
import { LoadingType } from '../Loading';

export interface IToastProps {
  type?: 'loading' | 'success' | 'fail'
  position?: 'top' | 'middle' | 'bottom'
  message?: React.ReactNode
  mask?: boolean
  forbidClick?: boolean
  loadingType?: LoadingType
  zIndex?: number
  duration?: number
  onClose?: () => void
  className?: string
}

const Toast: React.FC<IToastProps> = (props) => {
  const {
    className
  } = props;
  const baseClass = 'ucee-toast';
  const toastClassNames = classnames(
    baseClass,
    className
  )
  return (
    <>
    </>
  )
}

export default Toast;