import PropTypes from 'prop-types';

import './Team.css';
import Player from '../Player/Index.jsx';

const Team = ({ teamName, className, bgColor, nameColor, players }) => {
	const bgCss = { backgroundColor: bgColor };
	const nameColorCss = { color: nameColor };

	return (
		<section className="main-section" style={bgCss}>
			<h3 className={className} style={nameColorCss}>
				{teamName}
			</h3>
			{players.map((player) => (
				<Player key={player.nickname} nickname={player.nickname} lane={player.lane} image={player.image} />
			))}
		</section>
	);
};

Team.propTypes = {
	bgColor: PropTypes.string,
	players: PropTypes.any,
	teamName: PropTypes.string,
	className: PropTypes.any,
	nameColor: PropTypes.string
};

export default Team;
