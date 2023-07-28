type getSiblingPageNumber = (totalPages: number | undefined, currentPageNumber?: number) => number | undefined;

const getNextPageNumber: getSiblingPageNumber = (totalPages = 1, currentPageNumber = 0) => {
  if (currentPageNumber < 0 || currentPageNumber >= totalPages) {
    return undefined;
  }
  return currentPageNumber + 1;
};

export { getNextPageNumber };