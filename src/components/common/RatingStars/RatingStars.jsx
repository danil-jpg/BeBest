import React, { useEffect, useState } from 'react';
import './RatingStars.scss';
import { v1 } from 'uuid';
import { IconRenderer } from '../../UI/IconRenderer/IconRenderer';

let defaultStarList = [
	{
		id: v1(),
		selected: false,
	},
	{
		id: v1(),
		selected: false,
	},
	{
		id: v1(),
		selected: false,
	},
	{
		id: v1(),
		selected: false,
	},
	{
		id: v1(),
		selected: false,
	},
];

const RatingStars = ({ amountStars, mb = 23 }) => {
	let [starList, setStarList] = useState([]);

	useEffect(() => {
		let resList = [...defaultStarList];

		resList.forEach((el, index) => {
			if (++index < amountStars) {
				el.selected = true;
			}
		});

		setStarList([...resList]);
	}, [setStarList]);

	return (
		<div className='rating' style={{ margin: `0 0 ${mb}px` }}>
			{
				starList?.map((el, index) => (
					<IconRenderer
						id='yellowStar'
						key={el.id}
						className={`rating__star ${amountStars > index ? 'selected' : ''
							}`}
					/>
				))
			}
		</div>)
}

export default RatingStars;