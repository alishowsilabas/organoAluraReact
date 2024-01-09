import { useState } from 'react';

import './App.css';
import Team from './components/Team/';
import Banner from './components/Banner/';
import Footer from './components/Footer/';
import FormBox from './components/FormBox/';

// import player from './components/Player/index.jsx';

function App() {
	const teams = [
		{
			name: 'T1',
			primaryColor: 'rgb(255,0,47)',
			secondaryColor: 'rgb(255,185,196)',
			// secondaryColor: 'rgb(227, 0, 43)',
			className: 't1',
			id: 't1'
		},
		{
			name: 'G2',
			primaryColor: 'rgb(203, 203, 203)',
			secondaryColor: 'rgb(201,200,200)',
			// secondaryColor: 'rgb(143,143,145)',
			className: 'g2',
			id: 'g2'
		},
		{
			name: 'JDG',
			primaryColor: 'rgb(255,0,43)',
			secondaryColor: 'rgb(255,194,205)',
			// secondaryColor: 'rgb(200, 16, 46)',
			className: 'jdg',
			id: 'jdg'
		},
		{
			name: 'LOUD',
			primaryColor: 'rgba(69, 248, 73)',
			secondaryColor: 'rgb(205,255,206)',
			// secondaryColor: 'rgba(69, 248, 73)',
			className: 'loud',
			id: 'loud'
		}
	];

	const [players, setPlayers] = useState([]);

	const newPlayer = (player) => {
		console.log(player);
		setPlayers([...players, player]);
	};

	return (
		<div className="app-container">
			<Banner />
			<FormBox options={teams} registryPlayer={(player) => newPlayer(player)} />

			{teams.map((team) => (
				<Team
					key={team.name}
					players={players.filter((player) => player.team === team.name)}
					teamName={team.name}
					className={team.className || ''}
					bgColor={team.secondaryColor}
					nameColor={team.primaryColor}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
