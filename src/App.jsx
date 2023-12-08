import { useState } from 'react';

import './App.css';
import Team from './components/Team/Index.jsx';
import Banner from './components/Banner/Index.jsx';
import FormBox from './components/FormBox/Index.jsx';

function App() {
	const teams = [
		{
			name: 'T1',
			primaryColor: 'rgb(255,255,255)',
			secondaryColor: 'rgb(227, 0, 43)',
			className: 't1'
		},
		{
			name: 'G2',
			primaryColor: 'rgb(255,255,255)',
			secondaryColor: 'rgb(143,143,145)',
			className: 'g2'
		},
		{
			name: 'JDG',
			primaryColor: 'rgb(255,255,255)',
			secondaryColor: 'rgb(200, 16, 46)',
			className: 'jdg'
		},
		{
			name: 'Loud',
			primaryColor: 'rgb(255,255,255)',
			secondaryColor: 'rgba(69, 248, 73)',
			className: 'loud'
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
			<FormBox registryPlayer={(player) => newPlayer(player)} />

			{teams.map((team) => (
				<Team
					key={team.name}
					bgColor={team.secondaryColor}
					teamName={team.name}
					className={team.className || ''}
					nameColor={team.primaryColor}
				/>
			))}
		</>
	);
}

export default App;
