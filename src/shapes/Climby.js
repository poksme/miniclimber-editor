import React, { PropTypes } from 'react';
import Decimal from 'decimal.js';
import CustomPropTypes from '../proptypes';

const Climby = ({ size, chubbiness, rotation, primaryColor, secondaryColor }) => {
  const strokeWidth = Decimal(size).div(chubbiness);
  const halfSize = Decimal(size).div(2);
  const halfStrokeWidth = Decimal(strokeWidth).div(2);

  return (
    <svg
      xmlns="http://www.w3.org/svg/2000"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
    >
      <g
        transform={`rotate(${rotation}, ${halfSize}, ${halfSize})`}
      >
        <rect
          x={halfSize.plus(halfStrokeWidth)}
          y={halfSize.minus(halfStrokeWidth)}
          width={halfSize - strokeWidth}
          height={strokeWidth}
          fill={secondaryColor}
        />
        <circle
          cx={halfSize}
          cy={halfSize}
          r={halfSize.minus(halfStrokeWidth)}
          stroke={primaryColor}
          fill="rgba(0, 0, 0, 0)"
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
};

Climby.propTypes = {
  chubbiness: CustomPropTypes.number.range(5, 15).isRequired,
  size: CustomPropTypes.number.min(10).isRequired,
  rotation: CustomPropTypes.number.range(0, 360).isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

export default Climby;
