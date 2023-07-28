import { getNextPageNumber } from "./index"; // Replace "your-utils-file" with the correct path to the file where the function is defined

describe("getNextPageNumber", () => {
  it("should return the next page number when the current page is within the valid range", () => {
    expect(getNextPageNumber(5, 0)).toBe(1);
    expect(getNextPageNumber(10, 4)).toBe(5);
    expect(getNextPageNumber(20, 15)).toBe(16);
  });

  it("should return undefined when the current page number is out of range", () => {
    expect(getNextPageNumber(10, 10)).toBeUndefined();
    expect(getNextPageNumber(5, 6)).toBeUndefined();
    expect(getNextPageNumber(0)).toBeUndefined();
  });

  it("should handle negative totalPages and currentPageNumber by returning undefined", () => {
    expect(getNextPageNumber(-5, -2)).toBeUndefined();
  });

  it("should handle undefined totalPages and currentPageNumber by returning undefined", () => {
    expect(getNextPageNumber(undefined, undefined)).toBeUndefined();
    expect(getNextPageNumber(undefined, 3)).toBeUndefined();
    expect(getNextPageNumber(5, undefined)).toBe(1);
  });

  it("should handle decimal numbers and round up to the next integer", () => {
    expect(getNextPageNumber(7, 2.5)).toBe(3);
    expect(getNextPageNumber(4.9, 1.2)).toBe(2);
    expect(getNextPageNumber(3.1, 3.1)).toBeUndefined();
  });
});
