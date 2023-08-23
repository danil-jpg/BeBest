import React from 'react';
import './Pagination.scss';
import { isChecked } from '../../../utils/isActive';

const Pagination = ({
    itemsPerPage,
    totalUsers,
    currentPage,
    onPageNumClickHandler,
    setCurrentPage,
    style,
    mb = '60px'
}) => {
    let pageNumbers = [];
    let styles = {...style, margin:`0 0 ${mb}`}

    for (let i = 1; i <= Math.ceil(totalUsers / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const onNextPageClickHandler = () => {
        if (currentPage >= pageNumbers.length) {
            return false;
        } else {
            setCurrentPage(++currentPage);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className='pagination' style={styles}>
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
                <li
                    className='pagination__item pagination__item_next'
                    onClick={onNextPageClickHandler}
                ></li>
            </ul>
        </div>
    );
};

export default Pagination;
