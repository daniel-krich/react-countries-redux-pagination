import { Link } from "react-router-dom";
import { createPaginationHelper } from '../helpers/createPaginationHelper';
import { conditionalClassNames } from '../helpers/conditionalClassNames';

export default function Pagination({ baseUrl, currentPage, totalResults, maxResultsPerPage }) {
    //debugger;
    const totalPages = Math.round(totalResults / maxResultsPerPage);

    const seekPageCount = 10;

    const pages = createPaginationHelper(currentPage, totalPages, seekPageCount);

    return (
        <nav className="d-flex justify-content-center mt-4">
            <ul className="pagination">
                <li className="page-item">
                    { currentPage <= 1 || <Link className="page-link" to={baseUrl + "/" + (+currentPage-1)}>Previous</Link> }
                </li>

                {pages.map((pageId) => (
                    <li className="page-item" key={pageId}>
                        <Link className={conditionalClassNames('page-link', currentPage === pageId && 'active')} to={baseUrl + "/" + pageId}>{pageId}</Link>
                    </li>
                ))}
                
                <li className="page-item">
                    { currentPage >= totalPages || <Link className="page-link" to={baseUrl + "/" + (+currentPage+1)}>Next</Link> }
                </li>
            </ul>
        </nav>
    );
}