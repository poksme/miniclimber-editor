import React, { PropTypes } from 'react';
import CustomPropTypes from '../proptypes';
import RegularPolygon from '../geometry/RegularPolygon';

const Polygon = ({ size, corners, rotation, primaryColor, strokeWidth }) => {
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
};

Polygon.propTypes = {
  size: CustomPropTypes.number.min(10).isRequired,
  corners: CustomPropTypes.number.min(3).isRequired, // minimum triangle
  rotation: CustomPropTypes.number.range(0, 360).isRequired,
  primaryColor: PropTypes.string.isRequired,
  strokeWidth: CustomPropTypes.number.min(1).isRequired,
};

export default Polygon;
