import React from 'react';
import {Button, FormControl, Modal, FieldGroup, ControlLabel, FormGroup} from "react-bootstrap";

class EditProduct extends React.Component {
	state = {}

	onChangeHandler(e, some) {
		this.setState({[some]: e.target.value})
	}

	handleSubmit = (e, id) => {
		e.preventDefault();

		const product = {
			name   : this.state.name,
			price: this.state.price,
 		}
		this.props.editProducts(id, product)
		this.props.editButton();
	}

	render() {
		const {id, editButton, edit, products} = this.props
		const targetProduct = products.find((product, index) => {
			return product.id === id
		})

		return (
			<Modal show={edit} onHide={editButton}>
				<Modal.Header closeButton>
					<Modal.Title>Edit product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={(e) => {this.handleSubmit(e, id)}}>
						<FormGroup>
							<ControlLabel>Name</ControlLabel>
							<FormControl onChange={(e) => {this.onChangeHandler(e, 'name')}}
													 defaultValue={targetProduct && targetProduct.name}/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Price</ControlLabel>
							<FormControl onChange={(e) => {this.onChangeHandler(e, 'price')}}
													 defaultValue={targetProduct && targetProduct.price}/>
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

export default EditProduct;