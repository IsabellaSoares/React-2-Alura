import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Table from './Table';
import Form from './Formulario';
import './App.css';
import { AUTORES } from './autores';

function App() {
	const [ autores, setAutores ] = useState(AUTORES);

	function removeAutor(index) {
		setAutores(autores.filter((autor, posicaoAtual) => index !== posicaoAtual));
	}

	function escutadorDeSubmit(autor) {
		setAutores([ ...autores, autor ]);
	}

	return (
		<div className="container m-1">
			<Table autores={autores} removeAutor={removeAutor} />
			<Form escutadorDeSubmit={escutadorDeSubmit} />
		</div>
	);
}

export default App;
