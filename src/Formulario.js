import React, { useReducer } from 'react';
import './App.css';
import FormValidator from './FormValidator';
import Popup from './Popup';

export default function Formulario(props) {
	const [ filterInput, setFilterInput ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		name: '',
		book: '',
		price: ''
	});

	const formValidator = new FormValidator([
		{
			field: 'name',
			method: 'isEmpty',
			validWhen: false,
			message: 'Entre com um nome'
		},
		{
			field: 'book',
			method: 'isEmpty',
			validWhen: false,
			message: 'Entre com um livro'
		},
		{
			field: 'price',
			method: 'isInt',
			args: [ { min: 0, max: 99999 } ],
			validWhen: true,
			message: 'Entre com um valor numérico'
		}
	]);

	function handleInput(event) {
		const { name, value } = event.target;
		setFilterInput({ [name]: value });
	}

	function submitForm() {
		const validation = formValidator.validation(filterInput);

		if (validation.isValid) {
			props.handleSubmit(filterInput);
			setFilterInput({
				name: '',
				book: '',
				price: ''
			});
		} else {
			const { name, book, price } = validation;
			const fields = [ name, book, price ];

			const invalidFields = fields.filter((elem) => {
				return elem.isInvalid;
			});
			
			invalidFields.forEach(field => {
				Popup.exibeMensagem('error', field.message);
			});
		}
	}

	return (
		<form className="container centered">
			<div className="row">
				<div className="input-field col s4">
					<label htmlFor="name" className="input-field">
						Nome
					</label>
					<input
						id="name"
						type="text"
						name="name"
						value={filterInput.name}
						onChange={handleInput}
						className="validate"
					/>
				</div>

				<div className="input-field col s4">
					<label htmlFor="book" className="input-field">
						Livro
					</label>
					<input
						id="book"
						type="text"
						name="book"
						value={filterInput.book}
						onChange={handleInput}
						className="validate"
					/>
				</div>

				<div className="input-field col s4">
					<label htmlFor="price" className="input-field">
						Preço
					</label>
					<input
						id="price"
						type="text"
						name="price"
						value={filterInput.price}
						onChange={handleInput}
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
