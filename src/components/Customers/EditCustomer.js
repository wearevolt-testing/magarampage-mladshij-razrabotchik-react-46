import React from 'react';
import {Button, FormControl, Modal, FieldGroup, ControlLabel, FormGroup} from "react-bootstrap";

class EditCustomer extends React.Component {
	state = {}

	onChangeHandler(e, some) {
		this.setState({[some]: e.target.value})
	}

	handleSubmit = (e, id) => {
		e.preventDefault();

		const customer = {
			name   : this.state.name,
			address: this.state.address,
			phone  : this.state.phone
		}
		this.props.editCustomers(id, customer)
		this.props.editButton();
	}

	render() {
		const {id, editButton, edit, customers} = this.props
		const targetCustomer = customers.find((customer, index) => {
			return customer.id === id
		})

		return (
			<Modal show={edit} onHide={editButton}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Customer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={(e) => {this.handleSubmit(e, id)}}>
						<FormGroup>
							<ControlLabel>Name</ControlLabel>
							<FormControl onChange={(e) => {this.onChangeHandler(e, 'name')}}
													 defaultValue={targetCustomer && targetCustomer.name}/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Address</ControlLabel>
							<FormControl onChange={(e) => {this.onChangeHandler(e, 'address')}}
													 defaultValue={targetCustomer && targetCustomer.address}/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Phone</ControlLabel>
							<FormControl onChange={(e) => {this.onChangeHandler(e, 'phone')}}
													 defaultValue={targetCustomer && targetCustomer.phone}/>
						</FormGroup>


						<Button type="submit">
							Submit
						</Button>

					</form>
				</Modal.Body>
			</Modal>

		)
	}
}

export default EditCustomer;