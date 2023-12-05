import { useState } from 'react';
import PropTypes from 'prop-types';

import './FormBox.css';
import FormField from '../FormField/Index.jsx';
import DropdownList from '../DropdownList/Index.jsx';
import CreateCardButton from '../CreateCardButton/Index.jsx';

const FormBox = ({ title }) => {
	const [nickname, setNickname] = useState('');
	const [lane, setLane] = useState('');
	const [image, setImage] = useState('');
	const [team, setTeam] = useState('');

	const onSendForm = (event) => {
		event.preventDefault();
		console.log('The Form was submitted! ', nickname, lane, image, team);
	};

	return (
		<div className="box-container">
			<form onSubmit={onSendForm} className="my-form">
				<h2>{title}</h2>
				<FormField
					mandatory={true}
					id={'nickname'}
					label={'Nickname'}
					placeholder={'Digite seu Nick'}
					inputValue={nickname}
					changed={(inputValue) => setNickname(inputValue)}
				/>
				<FormField
					mandatory={true}
					id={'lane'}
					label={'Lane'}
					placeholder={'Digite sua Lane'}
					inputValue={lane}
					changed={(inputValue) => setLane(inputValue)}
				/>
				<FormField
					mandatory={true}
					id={'image'}
					label={'Imagem'}
					placeholder={'Insira o link da sua imagem'}
					inputValue={image}
					changed={(inputValue) => setImage(inputValue)}
				/>
				<DropdownList
					id={'dropdowns'}
					label={'Time'}
					defaultValue={'Escolha seu Time'}
					inputValue={team}
					changed={(inputValue) => setTeam(inputValue)}
				/>
				<CreateCardButton>Criar Card</CreateCardButton>
			</form>
		</div>
	);
};

FormBox.propTypes = {
	title: PropTypes.string
};

FormBox.defaultProps = {
	title: 'Preencha os campos para criar o Card do jogador'
};

export default FormBox;
