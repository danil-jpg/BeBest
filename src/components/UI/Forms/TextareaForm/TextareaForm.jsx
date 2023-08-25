import React from 'react';
import './TextareaForm.scss';
import PropTypes from 'prop-types';

const TextareaForm = ({
	title,
	ph = '',
	name = '',
	value,
	setValue,
	style = {},
	mb = '29px',
	maxWidth = '100%',
	variant = '',
	height = '121px'
}) => {

	const onInputChangeHandler = e => {
		setValue(e.currentTarget.value)
	}

	const styles = {
		...style,
		maxWidth,
		margin: `0 0 ${mb}`,
	}

	const textareaStyles = {
		height: height
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
				className={
					`textarea__input 
					textarea__input_variant-${variant}`
				}
				type='text'
				placeholder={ph}
				name={name}
				aria-label={name}
				value={value}
				style={textareaStyles}
				onChange={e => { onInputChangeHandler(e) }}
			></textarea>
		</div>
	)
}

TextareaForm.propTypes = {
	style: PropTypes.object,
	maxWidth: PropTypes.string,
	ph: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	setValue: PropTypes.func,
	mb: PropTypes.string

};

export default TextareaForm;