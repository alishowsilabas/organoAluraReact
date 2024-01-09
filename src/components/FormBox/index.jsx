import { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import FormField from '../FormField/index.jsx';
import DropdownList from '../DropdownList/index.jsx';
import CreateCardButton from '../CreateCardButton/index.jsx';

const FormBox = ({ title, registryPlayer, options }) => {
	const [nickname, setNickname] = useState('');
	const [lane, setLane] = useState('');
	const [image, setImage] = useState('');
	const [team, setTeam] = useState('1');

	const onSendForm = (event) => {
		event.preventDefault();
		console.log('Form data: ', { nickname, lane, image, team });
		registryPlayer({
			nickname,
			lane,
			image,
			team
		});
		setNickname('');
		setLane('');
		setImage('');
		setTeam('1');
	};

	return (
		<div className="box-container">
			<form onSubmit={onSendForm} className="my-form">
				<h2>{title}</h2>
				<FormField
					required={true}
					id={'nickname'}
					label={'Nickname'}
					placeholder={'Digite seu Nick'}
					inputValue={nickname}
					changed={(inputValue) => setNickname(inputValue)}
				/>
				<FormField
					required={true}
					id={'lane'}
					label={'Lane'}
					placeholder={'Digite sua Lane'}
					inputValue={lane}
					changed={(inputValue) => setLane(inputValue)}
				/>
				<FormField
					required={true}
					id={'image'}
					label={'Imagem'}
					placeholder={'Insira o link da sua imagem'}
					inputValue={image}
					changed={(inputValue) => setImage(inputValue)}
				/>
				<DropdownList
					options={options}
					required={true}
					id={'dropdowns'}
					label={'Time'}
					placeholder={'Escolha seu Time'}
					onChange={setTeam}
					inputValue={team}
				/>
				<CreateCardButton>Criar Card</CreateCardButton>
			</form>
		</div>
	);
};

FormBox.propTypes = {
	title: PropTypes.string,
	registryPlayer: PropTypes.any,
	options: PropTypes.any
};

FormBox.defaultProps = {
	title: 'Preencha os campos para criar o Card do jogador'
};

export default FormBox;
