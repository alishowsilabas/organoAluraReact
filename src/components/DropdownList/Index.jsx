import PropTypes from 'prop-types';

import './DropdownList.css';

const teams = [
	{ id: 't1', name: 'T1' },
	{ id: 'g2', name: 'G2' },
	{ id: 'jdg', name: 'JDG' },
	{ id: 'loud', name: 'Loud' }
];

const DropdownList = ({ id, label, defaultValue, changed }) => {
	return (
		<div className="drop-down-list">
			<label htmlFor={id}>{label}</label>
			<select onChange={(event) => changed(event.target.value)} id={id} defaultValue={defaultValue}>
				<option disabled>Escolha seu Time</option>
				{teams.map((team) => (
					<option key={team.id} value={team.name}>
						{team.name}
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
	changed: PropTypes.any
};

export default DropdownList;
