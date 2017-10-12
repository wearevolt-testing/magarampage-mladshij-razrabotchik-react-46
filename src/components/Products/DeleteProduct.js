import React from 'react';
import {Button, Modal} from "react-bootstrap";

class DeleteProduct extends React.Component {


	render() {
		const {id, deleter, modal, toggle} = this.props
		return (
			<Modal show={modal} onHide={toggle}>
				<Modal.Header>
					<Modal.Title>Delete Product</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Do you realy want to delete this Product?
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={toggle}>Cancel</Button>
					<Button bsStyle="danger" onClick={(e) => {
						this.props.toggle();
						this.props.deleter(e, id)
					}}>Delete</Button>
				</Modal.Footer>
			</Modal>

		)
	}
}

export default DeleteProduct;