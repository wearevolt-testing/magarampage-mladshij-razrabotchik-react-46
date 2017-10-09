import React from 'react';
import {Button, Table, Grid, Col} from "react-bootstrap";
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";

function mapStateToProps(state) {
	return {
		customers: state.customers
	}
}

@connect(mapStateToProps, actions)
class Customers extends React.Component {

	state = {
		modal: false,
		edit: false,
		id: ''
	}

	componentDidMount() {
		this.props.fetchCustomers();


	}

	toggleModal = () => {
		this.setState({modal: !this.state.modal})
	}

	editButton = (id) => {
		this.setState({edit: !this.state.edit, id})
	}

	render() {
		const list = this.props.customers || [];

		const customList = list.map(({name, address, phone, id}, index) => {
			return (

				<tr key={index} id={id}>
					<td>{index + 1}</td>
					<td>{name}</td>
					<td>{address}</td>
					<td>{phone}</td>
					<td className="button edit" onClick={() => {this.editButton(id)}}>edit</td>
					<td className="button delete">delete</td>
				</tr>)
		})


		return (
			<Grid>
				<Col>
					<h1 style={{display: 'inline-block'}}>Customers list</h1>
					<Button className="header-button" onClick={this.toggleModal}>Create</Button>
				</Col>
				<Table responsive>
					<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Address</th>
						<th>Phone</th>
					</tr>
					</thead>
					<tbody>
					{customList}
					</tbody>
				</Table>
				<AddCustomer modal={this.state.modal}
										 {...this.props} toggleModal={this.toggleModal}/>
				<EditCustomer edit={this.state.edit} id={this.state.id}
										 {...this.props} editButton={this.editButton}/>
			</Grid>
		)
	}
}

export default Customers;