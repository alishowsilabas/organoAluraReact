import { useState } from 'react';

import './App.css';
import Team from './components/Team/Index.jsx';
import Banner from './components/Banner/Index.jsx';
import FormBox from './components/FormBox/Index.jsx';

function App() {
	const teams = [
		{
			name: 'T1',
			primaryColor: 'rgb(33,31,31)',
			secondaryColor: 'rgb(255,185,196)',
			// secondaryColor: 'rgb(227, 0, 43)',
			className: 't1',
			id: 't1'
		},
		{
			name: 'G2',
			primaryColor: 'rgb(33,31,31)',
			secondaryColor: 'rgb(201,200,200)',
			// secondaryColor: 'rgb(143,143,145)',
			className: 'g2',
			id: 'g2'
		},
		{
			name: 'JDG',
			primaryColor: 'rgb(33,31,31)',
			secondaryColor: 'rgb(255,194,205)',
			// secondaryColor: 'rgb(200, 16, 46)',
			className: 'jdg',
			id: 'jdg'
		},
		{
			name: 'Loud',
			primaryColor: 'rgb(33,31,31)',
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
		<>
			<Banner />
			<FormBox options={teams} registryPlayer={(player) => newPlayer(player)} />

			{teams.map((team) => (
				<Team
					key={team.name}
					players={players}
					teamName={team.name}
					className={team.className || ''}
					bgColor={team.secondaryColor}
					nameColor={team.primaryColor}
				/>
			))}
		</>
	);
}

export default App;
