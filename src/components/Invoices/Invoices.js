import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {Button, Col, Grid, Table} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Route, Switch} from 'react-router-dom';
import AddInvoice from "./AddInvoice";
import EditInvoice from "./EditInvoice";
import DeleteInvoice from "./DeleteInvoice";
import {Helmet} from "react-helmet";

function mapStateToProps({invoices, products, customers}) {
	return {invoices, products, customers}
}

@connect(mapStateToProps, actions)
class Invoices extends React.Component {
	state = {
		parent: true,
		modal : false,
		delete: false
	}

	componentDidMount() {
		this.props.fetchInvoices();
		this.props.fetchProducts();
		this.props.fetchCustomers();
		if (this.props.match.isExact) {
			this.setState({parent: false})
		}
	}


	deleted = (deleteName) => {
		this.setState({delete: !this.state.delete, delName: deleteName})


	}

	render() {
		const {match, invoices} = this.props
 		return (
			<Grid>
				<Helmet>
					<title>Invoice List</title>
				</Helmet>
				<Col className={match.isExact ? '' : 'hidden'}>
					<h1 style={{display: 'inline-block'}}>Invoice list</h1>
					<LinkContainer to={'/invoices/new'}>
						<Button className="header-button">Create</Button>
					</LinkContainer>
				</Col>

				<Table responsive hover className={(match.isExact && invoices.saved.length > 0) ? '' : 'hidden'}>
					<thead>
					<tr>
						<th>#</th>
						<th>Customer</th>
						<th>Discount</th>
						<th>Total</th>
					</tr>
					</thead>
					<tbody>
					{( invoices.saved.length > 0 ) && invoices.saved.map(({customer, discount, total}, i) => (
						<tr key={i}>
							<td>{i + 1}</td>
							<td>{customer}</td>
							<td>{discount}%</td>
							<td>{total}</td>
							<LinkContainer to={'/invoices/edit/' + i}>
								<td onClick={() => {this.setState({id: i})}} className="button edit">edit</td>
							</LinkContainer>
							<td className="button delete" onClick={() => {this.deleted(customer)}}>delete</td>
						</tr>
					))
					}
					</tbody>
				</Table>

				<Switch>
					<Route path={`${match.url}/new`} render={() => <AddInvoice  {...this.props} />}/>
					<Route path={`${match.url}/edit`} render={() => <EditInvoice i={this.state.id} {...this.props} />}/>
				</Switch>
				<DeleteInvoice modal={this.state.delete}
											 toggle={this.deleted}
											 delName={this.state.delName}
											 saved={invoices.saved}
											 deleteInvoiceList={this.props.deleteInvoiceList}
											/>
			</Grid>

		)
	}
}

export default Invoices;

