import React from 'react';
import './ItemMessForum.scss';
import RatingStars from '../../../common/RatingStars/RatingStars';
import { Link } from 'react-router-dom';
import { formattedDate } from '../../../../utils/formattedDate';

const titles = {
	mess: 'Сообщений:',
	reg: 'Регистрация:',
	reply: 'Ответить',
	quote: 'Цитировать'
}

const ItemMessForum = ({ num, el }) => {
	const getAuthorName = () => el.author.data.attributes.username;
	const getAuthorRate = () => el.author.data.attributes.stars;
	const getImageSrc = () => `http://bebest.pp.ua${el.author.data.attributes.avatar.data.attributes.url}`;
	const getCreateDate = () => el.author.data.attributes.createdAt;
	const getAmountMess = () => el.author.data.attributes.messages.data.length;

	console.log(getAuthorRate());

	return (
		<div className='mess-forum'>
			<div className="mess-forum__user-info">
				<div className="mess-forum__image-wrap">
					<img src={getImageSrc()} alt="" className="mess-forum__image" />
				</div>

				<p className="mess-forum__name">
					{getAuthorName()}
				</p>

				<RatingStars amountStars={getAuthorRate()} />

				<div className="mess-forum__amount-mess">
					<span className="mess-forum__amount-mess-title">
						{titles.mess}
					</span>
					<span className="mess-forum__amount-mess-value">
						{getAmountMess()}
					</span>
				</div>
				<div className="mess-forum__date-reg">
					<span className="mess-forum__date-reg-title">
						{titles.reg}
					</span>
					<span className="mess-forum__date-reg-value">
						{formattedDate(getCreateDate())}
					</span>
				</div>
			</div>

			<div className="mess-forum__body">
				<div className="mess-forum__head">
					<p className="mess-forum__head-date">
						{formattedDate(el.createdAt)}
					</p>
					<p className="mess-forum__head-num">
						{`#${num}`}
					</p>
				</div>
				<div className="mess-forum__text-wrap">
					<p className="mess-forum__text">{el.text}</p>
				</div>
				<div className="mess-forum__footer">
					<Link className='mess-forum__footer-link'>{titles.reply}</Link>
					<Link className='mess-forum__footer-link mess-forum__footer-link_quote'>{titles.quote}</Link>
				</div>
			</div>

		</div>
	)
}

export default ItemMessForum;