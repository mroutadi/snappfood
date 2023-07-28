type getSiblingPageNumber = (totalPages: number | undefined, currentPageNumber?: number) => number | undefined;

const getNextPageNumber: getSiblingPageNumber = (totalPages, currentPageNumber = 0) => {
  if (!totalPages || currentPageNumber < 0 || currentPageNumber >= totalPages) {
    return undefined;
  }
  return Math.floor(currentPageNumber) + 1;
};

export { getNextPageNumber };