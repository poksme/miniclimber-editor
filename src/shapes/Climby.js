import React from 'react';

// Chubbiness from 5 to 50, default 10
// Rotation from 0 to 360 (obviously) default 315
export default ({ size, chubbiness, rotation, primaryColor, secondaryColor }) => {
  const strokeWidth = size / chubbiness;
  return (
    <svg
      xmlns="http://www.w3.org/svg/2000"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
    >
      <g
        transform={`rotate(${rotation}, ${size / 2}, ${size / 2})`}
      >
        <rect
          x={size / 2 + strokeWidth / 2}
          y={size / 2 - strokeWidth / 2}
          width={size / 2 - strokeWidth}
          height={strokeWidth}
          fill={secondaryColor}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          stroke={primaryColor}
          fill="rgba(0, 0, 0, 0)"
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
}
