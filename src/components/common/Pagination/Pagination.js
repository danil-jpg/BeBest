import React from 'react';
import './Pagination.scss'
import { v1 } from 'uuid';
import leftArrow from '../../../assets/icons/ArrowLeft.svg'
import rightArrow from '../../../assets/icons/arrowRight.svg'

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<ul className="pagination-container">
			<li onClick={() => (currentPage - 1 > 0) ? paginate(currentPage - 1) : alert('No more pages!')} className='pagination-item'>
				{console.log(currentPage)}
				<img src={leftArrow} />
			</li>
			{pageNumbers.map(el => <li onClick={() => paginate(el)} className='pagination-item' key={v1()}>{el}</li>)}
			<li onClick={() => paginate(() => (currentPage + 1 > totalPosts.length - 1) ? alert('No more pages!') : paginate(currentPage + 1))} className='pagination-item'>
				<img src={rightArrow} />
			</li>
		</ul>

	);
};

export default Pagination;