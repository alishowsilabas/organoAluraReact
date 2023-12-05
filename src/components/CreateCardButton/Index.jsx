import PropTypes from 'prop-types';

import './CreateButton.css';

const CreateCardButton = (props) => {
	return <button className="card-create-button">{props.children}</button>;
};

export default CreateCardButton;

CreateCardButton.propTypes = {
	children: PropTypes.string.isRequired
};
