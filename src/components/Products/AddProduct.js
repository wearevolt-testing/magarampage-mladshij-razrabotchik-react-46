import React from 'react';
import {Button, FormControl, Modal, FieldGroup, ControlLabel, FormGroup} from "react-bootstrap";

class AddProducts extends React.Component {

	handleSubmit = (e) => {
		e.preventDefault();

		const product = {
			name : this.nameRef.value,
			price: this.priceRef.value
		}
		this.props.addProducts(product)
		this.props.toggleModal();
	}

	render() {
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
							<ControlLabel>Price</ControlLabel>
							<FormControl inputRef={(input) => {this.priceRef = input}}/>
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

export default AddProducts;