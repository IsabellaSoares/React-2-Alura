import React, { Component } from 'react';

const Thead = () => {
	return (
		<thead>
			<tr>
				<th>Autores</th>
				<th>Livros</th>
				<th>Preços</th>
				<th>Remover</th>
			</tr>
		</thead>
	);
};

const Tbody = ({ autores, removeAutor }) => {
    const linhas = autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button className="waves-effect waves-light btn indigo lighten-2" onClick={() => removeAutor(index)}>Remover</button></td>
            </tr>

        )
    });
    
    return (
		<tbody>
			{ linhas }
		</tbody>
	);
};

export default class Table extends Component {
	render() {
		return (
            <table className="centered highlight">
                <Thead />
                <Tbody autores={this.props.autores} removeAutor={this.props.removeAutor} />
            </table>
        );
	}
}
