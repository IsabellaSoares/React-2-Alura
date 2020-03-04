import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Table from './Table';
import Form from './Formulario';
import './App.css';
import { AUTHORS } from './authors';
import Popup from './Popup';

function App() {
	const [ authors, setAuthors ] = useState(AUTHORS);

	function removeAuthor(index) {
		setAuthors(authors.filter((author, actualPosition) => index !== actualPosition));
	}

	function handleSubmit(author) {
		setAuthors([ ...authors, author ]);
		Popup.exibeMensagem('success', 'Autor cadastrado com sucesso!');
	}

	return (
		<div className="container m-1">
			<Table authors={authors} removeAuthor={removeAuthor} />
			<Form handleSubmit={handleSubmit} />
		</div>
	);
}

export default App;
