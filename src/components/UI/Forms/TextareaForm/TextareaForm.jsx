import React from 'react';
import './TextareaForm.scss';

const TextareaForm = ({
	type = 'text',
	ph = '',
	name = '',
	value,
	setValue,
	style
}) => {

	const onInputChangeHandler = e => { setValue(e.currentTarget.value) }

	return (
		<>
			<textarea
				style={style ? style : {}}
				className='textarea'
				type={type}
				placeholder={ph}
				name={name}
				aria-label={name}
				value={value}
				onChange={e => { onInputChangeHandler(e) }}
			></textarea>
		</>
	)
}

export default TextareaForm;