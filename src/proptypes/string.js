import isString from 'lodash/fp/isString';
import fpStartsWith from 'lodash/fp/startsWith';
import fpEndsWith from 'lodash/fp/endsWith';
import CustomPropType from './CustomPropType';

export const startsWith = keyWord => new CustomPropType(
  val => isString(val) && fpStartsWith(keyWord)
);
export const endsWith = keyWord => new CustomPropType(
  val => isString(val) && fpEndsWith(keyWord)
);
