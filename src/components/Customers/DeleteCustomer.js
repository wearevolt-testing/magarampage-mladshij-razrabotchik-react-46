import React from 'react';
import {Button, Modal} from "react-bootstrap";

class DeleteCustomer extends React.Component {


	render() {
		const {id, deleter, modal, toggle} = this.props
		return (
			<Modal show={modal} onHide={toggle}>
				<Modal.Header>
					<Modal.Title>Delete Customer</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Do you realy want to delete this Customer?
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

export default DeleteCustomer;