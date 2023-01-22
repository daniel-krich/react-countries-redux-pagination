export function createPaginationHelper(currentPage, totalPages, pagesToShow) {
    let startPage, endPage;
    if (totalPages <= pagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        startPage = currentPage - Math.floor(pagesToShow / 2);
        endPage = currentPage + Math.floor(pagesToShow / 2);
        if (startPage < 1) {
            startPage = 1;
            endPage = pagesToShow;
        }
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = totalPages - pagesToShow + 1;
        }
        if (startPage < 1) {
            startPage = 1;
            endPage = pagesToShow;
        }
    }
    let pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    return pages;
}