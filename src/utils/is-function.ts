function isFunction(functionToCheck: unknown): functionToCheck is Function {
  return typeof functionToCheck === 'function';
}

export { isFunction };