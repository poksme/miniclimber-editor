import fp from 'lodash/fp';
import Decimal from 'decimal.js';
import { PI } from '../constants';

export default corners =>
  (centerX, centerY, radius) =>
    fp.flow(
      fp.times((iterations) => {
        const theta = PI.div(Decimal(corners).div(2)).mul(iterations);
        const pointX = Decimal(radius).mul(Decimal.sin(theta)).plus(centerX);
        const pointY = Decimal(radius).mul(Decimal.cos(theta)).plus(centerY);
        return `${pointX},${pointY}`;
      }),
      fp.join(' ')
    )(corners);

// This curried function can be used to create regular polygon svg coordinates
// const hexagon = new RegularPolygon(6);
// const octagon = RegularPolygon(8);  // Optional new
// octagon(x, y, r) // returns an svg string for an octagon
// hexagon(x, y, r) // return an svg string for an hexagon
