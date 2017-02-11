import React from 'react';
import RegularPolygon from '../geometry/RegularPolygon';

export default ({ size, corners, rotation, primaryColor, strokeWidth }) => {
  const regularPolygon = new RegularPolygon(corners);
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
        <polygon
          points={regularPolygon(size / 2, size / 2, size / 2)}
          stroke={primaryColor}
          fill="rgba(0, 0, 0, 0)"
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
}
