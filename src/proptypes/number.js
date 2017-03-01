import isNumber from 'lodash/fp/isNumber';
import inRange from 'lodash/fp/inRange';
import CustomPropType from './CustomPropType';

export const range = (min, max) => new CustomPropType(
  val => isNumber(val) && inRange(min, max + 1)(val)  // force <= insteand of <
);
export const min = minVal => new CustomPropType(val => isNumber(val) && val >= minVal);
export const max = maxVal => new CustomPropType(val => isNumber(val) && val <= maxVal);
