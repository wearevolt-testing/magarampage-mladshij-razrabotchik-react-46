import React from 'react';
import {Button, FormControl, Modal, FieldGroup, ControlLabel, FormGroup} from "react-bootstrap";

class AddCustomer extends React.Component {

	handleSubmit = (e) => {
		e.preventDefault();

		const customer = {
			name   : this.nameRef.value,
			address: this.addressRef.value,
			phone  : this.phoneRef.value
		}
 		this.props.addCustomers(customer)
		this.props.toggleModal
	}

	render() {
		console.log('add', this.props);
		return (
			<Modal show={this.props.modal} onHide={this.props.toggleModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={this.handleSubmit}>
						<FormGroup>
							<ControlLabel>Name</ControlLabel>
							<FormControl inputRef={(input) => {this.nameRef = input}}/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Address</ControlLabel>
							<FormControl inputRef={(input) => {this.addressRef = input}}/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Phone</ControlLabel>
							<FormControl inputRef={(input) => {this.phoneRef = input}}/>
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

export default AddCustomer;