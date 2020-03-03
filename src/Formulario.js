import React, { useReducer } from 'react';
import './App.css';
import FormValidator from './FormValidator';

export default function Formulario(props) {
	const [ filterInput, setFilterInput ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		nome: '',
		livro: '',
		preco: ''
	});

	const formValidator = new FormValidator([
		{
			campo: 'nome',
			metodo: 'isEmpty',
			validoQuando: false,
			mensagem: 'Entre com um nome'
		},
		{
			campo: 'livro',
			metodo: 'isEmpty',
			validoQuando: false,
			mensagem: 'Entre com um livro'
		},
		{
			campo: 'preco',
			metodo: 'isInt',
			args: [ { min: 0, max: 99999 } ],
			validoQuando: true,
			mensagem: 'Entre com um valor numérico'
		}
	]);

	function escutadorDeInput(event) {
		const { name, value } = event.target;
		setFilterInput({ [name]: value });
	}

	function submitForm() {
		const validacao = formValidator.validation(filterInput);

		if (validacao.isValid) {
			props.escutadorDeSubmit(filterInput);
			setFilterInput({
				nome: '',
				livro: '',
				preco: ''
			});
		} else {
			const { nome, livro, preco } = validacao;
			const campos = [ nome, livro, preco ];

			const camposInvalidos = campos.filter((elem) => {
				return elem.isInvalid;
			});
			
			camposInvalidos.forEach(console.log);
		}
	}

	return (
		<form className="container centered">
			<div className="row">
				<div className="input-field col s4">
					<label htmlFor="nome" className="input-field">
						Nome
					</label>
					<input
						id="nome"
						type="text"
						name="nome"
						value={filterInput.nome}
						onChange={escutadorDeInput}
						className="validate"
					/>
				</div>

				<div className="input-field col s4">
					<label htmlFor="livro" className="input-field">
						Livro
					</label>
					<input
						id="livro"
						type="text"
						name="livro"
						value={filterInput.livro}
						onChange={escutadorDeInput}
						className="validate"
					/>
				</div>

				<div className="input-field col s4">
					<label htmlFor="preco" className="input-field">
						Preço
					</label>
					<input
						id="preco"
						type="text"
						name="preco"
						value={filterInput.preco}
						onChange={escutadorDeInput}
						className="validate"
					/>
				</div>
			</div>
			<button
				type="button"
				className="waves-effect waves-light btn indigo lighten-2"
				onClick={() => submitForm()}
			>
				Salvar
			</button>
		</form>
	);
}
