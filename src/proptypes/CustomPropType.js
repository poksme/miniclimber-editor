import isNil from 'lodash/fp/isNil';
import { UndefinedPropError, PropValidationError } from '../errors';

 // validator is a func that takes a prop as argument and returns a boolean value
export default (validator) => {
  const propValidator = (props, propName, componentName = 'anonymous component') => (
    isNil(props[propName]) || validator(props[propName]) // this validator accepts nil
      ? null // valid
      : new PropValidationError(props, propName, componentName)
  );
  propValidator.isRequired = (props, propName, componentName = 'anonymous component') => (
    isNil(props[propName]) // undefined check
      ? new UndefinedPropError(props, propName, componentName)
      : propValidator(props, propName, componentName) // validator check
  );
  return propValidator;
};
