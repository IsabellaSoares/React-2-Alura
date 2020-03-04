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

const Tbody = ({ authors, removeAuthor }) => {
    const rows = authors.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.book}</td>
                <td>{row.price}</td>
                <td><button className="waves-effect waves-light btn indigo lighten-2" onClick={() => removeAuthor(index)}>Remover</button></td>
            </tr>
        )
    });
    
    return (
		<tbody>
			{ rows }
		</tbody>
	);
};

export default class Table extends Component {
	render() {
		return (
            <table className="centered highlight">
                <Thead />
                <Tbody authors={this.props.authors} removeAuthor={this.props.removeAuthor} />
            </table>
        );
	}
}
