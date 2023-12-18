import PropTypes from 'prop-types';

import './styles.css';
import Player from '../Player/';

const Team = ({ teamName, className, nameColor, players }) => {
	const nameColorCss = { color: nameColor };

	return players.length > 0 ? (
		<section className={`main-section ${className}`}>
			<div className={`background ${className}`}></div>
			<h3 className="title" style={nameColorCss}>
				{teamName}
			</h3>
			<div className="players-card">
				{players.map((player) => (
					<Player
						key={player.nickname}
						nickname={player.nickname}
						lane={player.lane}
						image={player.image}
						className={className}
					/>
				))}
			</div>
		</section>
	) : (
		''
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
