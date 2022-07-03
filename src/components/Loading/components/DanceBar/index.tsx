import React from 'react';
import { IconTypeProps } from '../..';
import { transformSize } from '../../../../utils';
import '../../index.scss';

const DanceBar: React.FC<IconTypeProps> = ({
  color = '#c8c9cc',
  size,
  className,
  ...props
}) => {
  const iconProps = {
    style: {}
  }
  if (size) {
    const customSize = transformSize(size);
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        width: customSize,
        height: customSize
      },
      ...props
    })
  }
  
  return (
    <div className="ucee-loading__dancebar" {...iconProps}>
      <svg
        className={className}
        viewBox="0 0 30 30"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="0" y="13" width="3" height="5" fill={color}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5" 
            begin="0s" dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0s" dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="10" y="13" width="3" height="5" fill={color}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5" 
            begin="0.15s" dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.15s" dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="20" y="13" width="3" height="5" fill={color}>
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5" 
            begin="0.3s" dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.3s" dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}

export default DanceBar;