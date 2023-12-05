import PropTypes from 'prop-types';

import './FormField.css';

const FormField = ({ id, label, placeholder, mandatory, changed, inputValue, ...inputProps }) => {
	const onType = (event) => {
		changed(event.target.value);
	};

	return (
		<div className="form-field-div">
			<label htmlFor={id}>{label}</label>
			<input
				value={inputValue}
				onChange={onType}
				required={mandatory}
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
	mandatory: PropTypes.bool,
	changed: PropTypes.any,
	inputValue: PropTypes.any
};

export default FormField;
