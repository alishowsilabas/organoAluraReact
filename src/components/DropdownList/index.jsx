import PropTypes from 'prop-types';

import './styles.css';

const DropdownList = ({ id, label, defaultValue, onChange, required, options }) => {
	return (
		<div className="drop-down-list">
			<label htmlFor={id}>{label}</label>
			<select
				onChange={(event) => onChange(event.target.value)}
				id={id}
				defaultValue={defaultValue}
				required={required}
			>
				<option value="">{defaultValue}</option>
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
	defaultValue: PropTypes.string,
	onChange: PropTypes.any,
	required: PropTypes.bool,
	options: PropTypes.any
};

export default DropdownList;
