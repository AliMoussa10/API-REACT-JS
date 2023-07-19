import React from 'react';

const Pagination = ({ prevPage, changeCPage, nextPage, currentPage, numbers, npage }) => (
    <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} >
            <a href="#" className="page-link" onClick={prevPage}
            >Precedent</a>
        </li>

        {
            numbers.map((n, i) => (
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                    <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
                </li>
            )
            )
        }
        <li className={`page-item ${currentPage === npage ? 'disabled' : ''}`}>
            <a href="#" className="page-link"
                onClick={nextPage} >Suivant</a>
        </li>
    </ul>
)

export default Pagination;
