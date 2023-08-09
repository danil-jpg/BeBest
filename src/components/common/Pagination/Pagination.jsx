import React from 'react';
import './Pagination.scss';
import { isChecked } from '../../../utils/isActive';

const Pagination = ({
    itemsPerPage,
    totalPages,
    currentPage,
    onPageNumClickHandler,
}) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            <ul className='pagination__list'>
                {pageNumbers.map((num) => (
                    <li
                        className={`pagination__item ${isChecked(
                            currentPage,
                            num,
                            'active'
                        )}`}
                        key={num}
                        onClick={() => {
                            onPageNumClickHandler(num);
                        }}
                    >
                        {num}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
