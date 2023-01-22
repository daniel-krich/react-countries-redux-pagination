export const countriesSelectorPagination = (arr, pageId, maxElements) => {
    const start = pageId <= 1 ? 0 : (pageId - 1) * maxElements;
    const end = start + maxElements;
    return arr.slice(start, end);
}