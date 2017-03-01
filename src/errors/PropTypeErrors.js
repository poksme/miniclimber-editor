import ExtendableError from './ExtendableError';

export class UndefinedPropError extends ExtendableError {
  constructor(props, propName, componentName = 'anonymous component') {
    super(`
      Prop not found for required \`${propName}\` supplied to \`${componentName}\`.
      Validation failed for value ${props[propName]}.
    `);
  }
}

export class PropValidationError extends ExtendableError {
  constructor(props, propName, componentName = 'anonymous component') {
    super(`
      Invalid prop \`${propName}\` supplied to \`${componentName}\`.
      Validation failed for value ${props[propName]}.
    `);
  }
}
