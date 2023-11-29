import './FormBox.css';
import FormField from '../FormFields/index.jsx';
import CreateCardButton from '../CreateCardButton/index.jsx';

const FormBox = () => {
	return (
		<section className={'section-box-container'}>
			<form className={'my-form'}>
				<FormField id={'name'} label={'Nome'} placeholder={'Digite seu Nome'} />
				<FormField id={'lane'} label={'Lane'} placeholder={'Digite sua Lane'} />
				<FormField id={'imagem'} label={'Imagem'} placeholder={'Digite o endereço da sua imagem'} />
				<CreateCardButton />
			</form>
		</section>
	);
};

export default FormBox;
