import './Form.css';

function Form() {
	return (
		<div className={'container'}>
			<form id={'my-form'}>
				<h1 className={'title-h1'}>Preencha os dados para criar o Card do jogador</h1>
				<div className={'name-div'}>
					<label>Nome</label>
					<input type={'text'} placeholder={'Digite seu nome'} />
				</div>
				<div className={'lane-div'}>
					<label>Lane</label>
					<input type={'text'} placeholder={'Digite sua lane'} />
				</div>
				<div className={'image-div'}>
					<label>Imagem</label>
					<input type={'text'} placeholder={'Informe o endereço da imagem'} />
				</div>
				<div className={'select-div'}>
					<label>Time</label>
					<select>
						<option selected disabled>
							Escolha seu time
						</option>
						<option value={'1'} label={'T1'}>
							SKT T1
						</option>
						<option value={'2'} label={'Loud'}>
							Loud
						</option>
						<option value={'3'} label={'G2'}>
							G2
						</option>
					</select>
				</div>
				<button className={'card-create-button'}>Criar card</button>
			</form>
		</div>
	);
}

export default Form;
