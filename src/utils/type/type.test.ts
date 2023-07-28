import { isNumber, isString, isFunction } from "./index"; // Replace "your-utils-file" with the correct path to the file where the functions are defined

describe("isNumber", () => {
  it("should return true for valid numbers", () => {
    expect(isNumber(1234)).toBe(true);
    expect(isNumber(-5678)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
  });

  it("should return true for valid number strings", () => {
    expect(isNumber("1234")).toBe(true);
    expect(isNumber("-5678")).toBe(true);
    expect(isNumber("0")).toBe(true);
    expect(isNumber("3.14")).toBe(true);
  });

  it("should return false for non-number values", () => {
    expect(isNumber("Hello")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});

describe("isString", () => {
  it("should return true for valid strings", () => {
    expect(isString("Hello")).toBe(true);
    expect(isString("")).toBe(true);
    expect(isString("1234")).toBe(true);
  });

  it("should return false for non-string values", () => {
    expect(isString(1234)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({})).toBe(false);
  });
});

describe("isFunction", () => {
  it("should return true for valid functions", () => {
    const func1 = () => {};
    const func2 = function () {};
    const func3 = () => "Hello";
    function func4() {
      return "World";
    }

    expect(isFunction(func1)).toBe(true);
    expect(isFunction(func2)).toBe(true);
    expect(isFunction(func3)).toBe(true);
    expect(isFunction(func4)).toBe(true);
  });

  it("should return false for non-function values", () => {
    expect(isFunction(1234)).toBe(false);
    expect(isFunction("Hello")).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});
