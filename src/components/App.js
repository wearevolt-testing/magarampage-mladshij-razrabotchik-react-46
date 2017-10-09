import React from 'react';
import Route from "react-router-dom/es/Route";
import Landing from "./Landing";
import Header from './Header';
import Invoices from "./Invoices";
import Customers from "./Customers";
import Products from "./Products";
import {Switch} from "react-router-dom";

const NotFound = function () {
	return (
		<Status code={404}>
			<div>
				<h2> Sorry, cannot find this page</h2>
			</div>
		</Status>
	)
}

class App extends React.Component {

	render() {
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={Landing}/>
					<Route exact path="/invoices" component={Invoices}/>
					<Route exact path="/customers" component={Customers}/>
					<Route exact path="/products" component={Products}/>
					<Route component={NotFound}/>
				</Switch>
			</div>
		)
	}
}

export default App;