import React from 'react';
import './ItemMessForum.scss';
import RatingStars from '../../../common/RatingStars/RatingStars';
import { Link } from 'react-router-dom';

const titles = {
	mess: 'Сообщений:',
	reg: 'Регистрация:',
	reply: 'Ответить',
	quote: 'Цитировать'
}

const ItemMessForum = ({ num, el }) => {
	console.log(el)
	const getAuthorName = () => el.author.data.attributes.username;
	const getImageSrc = () => `http://bebest.pp.ua${el.author.data.attributes.avatar.data.attributes.url}`;
	console.log(getImageSrc());

	return (
		<div className='mess-forum'>
			<div className="mess-forum__user-info">
				<div className="mess-forum__image-wrap">
					<img src={getImageSrc()} alt="" className="mess-forum__image" />
				</div>

				<p className="mess-forum__name">
					{getAuthorName()}
				</p>

				<RatingStars amountStars={4} />

				<div className="mess-forum__amount-mess">
					<span className="mess-forum__amount-mess-title">
						{titles.mess}
					</span>
					<span className="mess-forum__amount-mess-value">
						6
					</span>
				</div>
				<div className="mess-forum__date-reg">
					<span className="mess-forum__date-reg-title">
						{titles.reg}
					</span>
					<span className="mess-forum__date-reg-value">
						15.06.2021
					</span>
				</div>
			</div>

			<div className="mess-forum__body">
				<div className="mess-forum__head">
					<p className="mess-forum__head-date">
						15.06.2021
					</p>
					<p className="mess-forum__head-num">
						{`#${num}`}
					</p>
				</div>
				<div className="mess-forum__text-wrap">
					<p className="mess-forum__text">
						Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует потребностям. Таким образом реализация намеченных плановых заданий способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также консультация с широким активом способствует подготовки и реализации модели развития.
					</p>
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