import PropTypes from 'prop-types';

import './styles.css';

const Player = ({ nickname, lane, image, className }) => {
	return (
		<div className="container">
			<div className={`header ${className}`}>
				<img src={image} alt={nickname} />
				<div className="footer">
					<h4>{nickname}</h4>
					<h5>{lane}</h5>
				</div>
			</div>
		</div>
	);
};

Player.propTypes = {
	nickname: PropTypes.any,
	lane: PropTypes.any,
	image: PropTypes.any,
	className: PropTypes.any
};

export default Player;
