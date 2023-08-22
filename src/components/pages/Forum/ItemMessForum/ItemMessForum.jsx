import React, { useEffect } from 'react';
import './ItemMessForum.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemMessForum = (props) => {

	return (
		<div className='mess-forum'>
			<div className="mess-forum__user-info">
				<div className="mess-forum__image-wrap">
					<img src="" alt="" className="mess-forum__image" />
				</div>
				<p className="mess-forum__name"></p>
				<div className="mess-forum__rating"></div>
				<div className="mess-forum__amount-mess">
					<span className="mess-forum__amount-mess-title"></span>
					<span className="mess-forum__amount-mess-value"></span>
				</div>
				<div className="mess-forum__date-reg">
					<span className="mess-forum__date-reg-title"></span>
					<span className="mess-forum__date-reg-value"></span>
				</div>
			</div>

			<div className="mess-forum__body">
				<div className="mess-forum__head">
					<p className="mess-forum__head-date"></p>
					<p className="mess-forum__head-num"></p>
				</div>
				<div className="mess-forum__text-wrap">
					<p className="mess-forum__text"></p>
				</div>
				<div className="mess-forum__footer"></div>
			</div>

		</div>
	)
}

export default ItemMessForum;