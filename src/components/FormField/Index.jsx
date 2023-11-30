import PropTypes from 'prop-types';

import './FormField.css';

const FormField = ({ id, label, placeholder, ...inputProps }) => {
	return (
		<div className="form-field-div">
			<label htmlFor={id}>{label}</label>
			<input id={id} type="text" placeholder={placeholder} {...inputProps} />
		</div>
	);
};

FormField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default FormField;
