import PropTypes from 'prop-types';

import './Team.css';

const Team = ({ teamName, className, bgColor, nameColor }) => {
	const bgCss = { backgroundColor: bgColor };
	const nameColorCss = { color: nameColor };

	return (
		<section className="main-section" style={bgCss}>
			<h3 className={className} style={nameColorCss}>
				{teamName}
			</h3>
		</section>
	);
};

Team.propTypes = {
	teamName: PropTypes.string,
	className: PropTypes.any,
	bgColor: PropTypes.string,
	nameColor: PropTypes.string
};

export default Team;
