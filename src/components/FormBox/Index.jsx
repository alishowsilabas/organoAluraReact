import PropTypes from 'prop-types';

import './FormBox.css';
import FormField from '../FormField/Index.jsx';
import DropdownList from '../DropdownList/Index.jsx';
import CreateCardButton from '../CreateCardButton/Index.jsx';

const FormBox = ({ title }) => {
	return (
		<div className="box-container">
			<form className="my-form">
				<h2>{title}</h2>
				<FormField id={'name'} label={'Nome'} placeholder={'Digite seu Nome'} />
				<FormField id={'lane'} label={'Lane'} placeholder={'Digite sua Lane'} />
				<FormField id={'imagem'} label={'Imagem'} placeholder={'Digite o endereço da sua imagem'} />
				<DropdownList id={'dropdowns'} label={'Time'} defaultValue={'Escolha seu Time'} />
				<CreateCardButton />
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
