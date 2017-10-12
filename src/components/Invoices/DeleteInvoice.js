import React from 'react';
import {Button, Modal} from "react-bootstrap";

class DeleteInvoice extends React.Component {

	deleter = () => {
		const deleted = this.props.saved.filter(({customer}) => customer !== this.props.delName);
		console.log('fsa', this.props.delName);
		console.log('fsa', this.props);
		this.props.deleteInvoiceList(deleted)
	}

	render() {
		const {id, modal, toggle} = this.props
		return (
			<Modal show={modal} onHide={toggle}>
				<Modal.Header>
					<Modal.Title>Delete Invoice</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Do you realy want to delete this invoice list?
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={toggle}>Cancel</Button>
					<Button bsStyle="danger" onClick={(e) => {
						this.props.toggle();
						this.deleter()
					}}>Delete</Button>
				</Modal.Footer>
			</Modal>

		)
	}
}

export default DeleteInvoice;