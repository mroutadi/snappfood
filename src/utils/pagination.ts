type getSiblingPageNumber = (totalPages: number | undefined, currentPageNumber?: number) => number | undefined;

const getNextPageNumber: getSiblingPageNumber = (totalPages = 1, currentPageNumber = 1) => {
  if (currentPageNumber < 1 || currentPageNumber >= totalPages) {
    return undefined;
  }
  return currentPageNumber + 1;
};

export { getNextPageNumber };