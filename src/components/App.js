import React from 'react';
import Landing from "./Landing";
import Header from './Header';
import Invoices from "./Invoices/Invoices";
import Customers from "./Customers/Customers";
import Products from "./Products/Products";
import {Switch, Route} from "react-router-dom";
import {Helmet} from "react-helmet";


class App extends React.Component {

	render() {
		return (
			<div>
				<Helmet>
					<title>Invoice App</title>
				</Helmet>
				<Header/>
				<Switch>
					<Route exact path="/" component={Landing}/>
					<Route path="/customers" component={Customers}/>
					<Route path="/products" component={Products}/>
					<Route path="/invoices" component={Invoices}/>
				</Switch>
			</div>
		)
	}
}

export default App;