import React from 'react';
import './TextareaForm.scss';

const TextareaForm = ({
	type = 'text',
	title,
	ph = '',
	name = '',
	value,
	setValue,
	style = {},
	mb = 29,
	maxWidth = '100%'
}) => {

	const onInputChangeHandler = e => {
		setValue(e.currentTarget.value)
	}

	const styles = {
		...style,
		maxWidth,
		margin: `0 0 ${mb}px`,
	}

	return (
		<div className='textarea'
			style={styles}>
			{
				title
					? <p className="textarea__title">{title}</p>
					: <></>
			}

			<textarea
				className='textarea__input'
				type={type}
				placeholder={ph}
				name={name}
				aria-label={name}
				value={value}
				onChange={e => { onInputChangeHandler(e) }}
			></textarea>
		</div>
	)
}

export default TextareaForm;