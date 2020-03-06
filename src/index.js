import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import About from './About';
import Authors from './Authors';
import Books from './Books';
import Notfound from './Notfound';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={App} />
			<Route path="/sobre" component={About} />
			<Route path="/livros" component={Authors} />
			<Route path="/autores" component={Books} />
			<Route component={Notfound} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
