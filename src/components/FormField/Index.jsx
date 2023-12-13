import PropTypes from 'prop-types';

import './FormField.css';

const FormField = ({ id, label, placeholder, required, changed, inputValue, ...inputProps }) => {
	const onType = (event) => {
		console.log(label, ': ', inputValue);
		changed(event.target.value);
	};

	return (
		<div className="form-field-div">
			<label htmlFor={id}>{label}</label>
			<input
				value={inputValue}
				onChange={onType}
				required={required}
				id={id}
				type="text"
				placeholder={placeholder}
				{...inputProps}
			/>
		</div>
	);
};

FormField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool,
	changed: PropTypes.any,
	inputValue: PropTypes.any
};

export default FormField;
