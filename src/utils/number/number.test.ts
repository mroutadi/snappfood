import { toFa, toEn, toCurrency } from "./index";
import { isNumber, isString } from "../type";

describe("toFa", () => {
  it("should convert a number to its Persian equivalent", () => {
    expect(toFa(1234)).toEqual("۱۲۳۴");
  });

  it("should convert a string to its Persian equivalent", () => {
    expect(toFa("5678")).toEqual("۵۶۷۸");
  });

  it("should handle null or undefined input and return an empty string", () => {
    expect(toFa(null)).toEqual("");
    expect(toFa(undefined)).toEqual("");
  });
});

describe("toEn", () => {
  it("should convert a Persian number string to its English equivalent", () => {
    expect(toEn("۱۲۳۴")).toEqual("1234");
  });

  it("should handle null or undefined input and return an empty string", () => {
    expect(toEn(null)).toEqual("");
    expect(toEn(undefined)).toEqual("");
  });
});

describe("toCurrency", () => {
  it("should convert a number or string to Persian currency format", () => {
    expect(toCurrency(1234)).toEqual("۱,۲۳۴");
    expect(toCurrency("5678")).toEqual("۵,۶۷۸");
    expect(toCurrency("1,234,567")).toEqual("۱,۲۳۴,۵۶۷");
  });
});

describe("isNumber", () => {
  it("should return true for valid numbers", () => {
    expect(isNumber(1234)).toBe(true);
    expect(isNumber(-5678)).toBe(true);
    expect(isNumber(0)).toBe(true);
  });

  it("should return false for non-number values", () => {
    expect(isNumber("1234")).toBe(true);
    expect(isNumber("123e4")).toBe(true);
    expect(isNumber("123w4")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
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
  });
});
