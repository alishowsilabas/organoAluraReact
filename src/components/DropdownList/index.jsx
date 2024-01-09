import PropTypes from 'prop-types';

import './styles.css';

const DropdownList = ({ id, label, placeholder, onChange, required, options, inputValue }) => {
	return (
		<div className="drop-down-list">
			<label htmlFor={id}>{label}</label>
			<select value={inputValue} onChange={(event) => onChange(event.target.value)} id={id} required={required}>
				<option value="1" disabled>
					{placeholder}
				</option>
				{options.map((item) => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
};

DropdownList.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.any,
	required: PropTypes.bool,
	options: PropTypes.any,
	inputValue: PropTypes.any
};

export default DropdownList;
