function isNumber(value: unknown): value is number {
  if (typeof value === 'number') return true;
  else if (typeof value === 'string') return !isNaN(Number(value));
  return false;
}

function isString(value: unknown): value is string {
  if (typeof value === 'undefined') return;
  return typeof value === 'string';
}

function isFunction(functionToCheck: unknown): functionToCheck is Function {
  return typeof functionToCheck === 'function';
}

export { isNumber, isString, isFunction };