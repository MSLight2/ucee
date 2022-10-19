import React from 'react';
import { IconTypeProps } from '../..';
import { transformSize } from '../../../../utils';

const Spinner: React.FC<IconTypeProps> = ({
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
    <div className="ucee-loading__spinner" {...iconProps}>
      <svg
        className={className}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(0 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0" keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.9075907590759075s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(30 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.825082508250825s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(60 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.7425742574257426s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.6600660066006601s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.5775577557755776s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(150 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.495049504950495s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.4125412541254125s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(210 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.33003300330033003s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.2475247524752475s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.16501650165016502s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(300 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="-0.08250825082508251s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
        <g transform="rotate(330 50 50)">
          <rect x="47.5" y="12.5" rx="0" ry="0" fill={color}>
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="0.9900990099009901s"
              begin="0s"
              repeatCount="indefinite">
            </animate>
          </rect>
        </g>
      </svg>
    </div>
  );
}

export default Spinner;