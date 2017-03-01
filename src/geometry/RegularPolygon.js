import flow from 'lodash/fp/flow';
import times from 'lodash/fp/times';
import join from 'lodash/fp/join';
import Decimal from 'decimal.js';
import { PI } from '../constants';

export default corners =>
  (centerX, centerY, radius) =>
    flow(
      times((iterations) => {
        const theta = PI.div(Decimal(corners).div(2)).mul(iterations);
        const pointX = Decimal(radius).mul(Decimal.sin(theta)).plus(centerX);
        const pointY = Decimal(radius).mul(Decimal.cos(theta)).plus(centerY);
        return `${pointX},${pointY}`;
      }),
      join(' ')
    )(corners);

// This curried function can be used to create regular polygon svg coordinates
// const hexagon = new RegularPolygon(6);
// const octagon = RegularPolygon(8);  // Optional new
// octagon(x, y, r) // returns an svg string for an octagon
// hexagon(x, y, r) // return an svg string for an hexagon
