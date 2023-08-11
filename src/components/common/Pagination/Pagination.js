import React, { useEffect } from 'react';
import './Pagination.scss'
import { v1 } from 'uuid';
import leftArrow from '../../../assets/icons/ArrowLeft.svg'
import rightArrow from '../../../assets/icons/arrowRight.svg'

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate, nextPage, prevPage }) => {
	const pageNumbers = [];
	// useEffect(() => {
	// 	alert(currentPage)
	// }, [currentPage])
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<ul className="pagination-container">
			<li onClick={prevPage} className='pagination-item'>
				<img src={leftArrow} />
			</li>
			{pageNumbers.map(el => <li onClick={() => paginate(el)} className={el === currentPage ? 'pagination-item pagination-item_active' : 'pagination-item'} key={v1()}>{el}</li>)}
			<li onClick={nextPage} className='pagination-item'>
				<img src={rightArrow} />
			</li>
		</ul>

	);
};

export default Pagination;