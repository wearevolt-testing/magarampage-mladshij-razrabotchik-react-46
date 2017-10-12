import React from 'react';
import {
	Button, FormControl, FieldGroup, ControlLabel, FormGroup, Grid, Col, Row, Table
} from "react-bootstrap";
import {Helmet} from "react-helmet";


class EditInvoice extends React.Component {
	state = {
		product : [],
		counter : 0,
		msg     : false,
		discount: 1,
		total   : 0
	}

	componentDidMount() {
		const discount = this.props.invoices.saved[this.props.i].discount
		this.setState({discount:discount})
		this.props.copyInvoices(this.props.i)
	}


	saveInvoice = () => {

		const pList = this.props.invoices.list;

		let counter = 0;
		pList.map((elem) => {
				counter += +(elem.price * elem.value)
				return elem
			}
		)
		const percent = (1 - +this.state.discount / 100)
		const total = +(counter * percent).toFixed(2)

		const customer = this.customerRef.value;
		const discount = +this.state.discount;
		const saved = [{counter, total, customer, discount, percent, pList}]
		console.log('saved', saved);
		this.props.saveInvoiceList(saved)
		this.setState({msg: !this.state.msg})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const prodName = this.productRef.value;
		const pList = this.props.products;
		const product = pList.filter((product) => product.name === prodName)
		this.props.addToProdList(product)
	}

	addValue = (e, targetName) => {
		const value = +e.target.value
		const product = this.props.invoices.list.filter((elem) => {
			if (elem.name === targetName) {
				elem.value = value;
				return elem
			}

		})
		this.props.addToProdList(product)
		this.setTotal();
	}
	deleted = (deleteName) => {
		const deleted = this.props.invoices.list.filter(({name}) => name !== deleteName)
		this.props.deleteFromProdList(deleted)
	}


	setTotal = () => {

		const pList = this.props.invoices.list;
		let counter = 0;
		pList.map((elem) => {
				counter += +(elem.price * elem.value)
				return elem
			}
		)

		const percent = (1 - +this.state.discount / 100)
		const total = +(counter * percent).toFixed(2)
		return total || 0
	}


	render() {
		const {customers, products, invoices } = this.props
 		const targetArray = invoices.saved[this.props.i]
		const prodList = invoices.list.map(({name, price, value}, i) => (
			<tr key={i}>
				<td>{name}</td>
				<td>{price}</td>
				<td><input
					ref={(input) => {this.numberRef = input}}
					defaultValue={value}
					onChange={(e) => {this.addValue(e, name, price)}}/></td>
				<td className="button delete" onClick={() => {this.deleted(name)}}>delete</td>
			</tr>
		))


		return (
			<Grid>
				<Helmet>
					<title>Edit Invoice</title>
				</Helmet>
				<Row>
					<Col md={6}>
						<h1>Edit Invoice</h1>
						<form onSubmit={this.onSubmit} ref={(input) => {this.formRef = input}}>
							<FormGroup>
								<ControlLabel>Discount (%)</ControlLabel>
								<input className="form-control"
											 defaultValue={targetArray.discount}
											 placeholder="please type discount value"
											 onChange={(e) => {this.setState({discount: +e.target.value})}}
								/>
							</FormGroup>

							<div className="form-group">
								<label>Customer</label>
								<select className="form-control" placeholder="select customer"
												ref={(input) => {this.customerRef = input}}
												onChange={(e) => {this.setState({customer: e.target.value})}}>


									{customers && customers.map(({name}, i) => (
										<option key={i} value={name}>{name}</option>
									))}
								</select>
							</div>
							<div className="form-group">
								<label>Add Product</label>
								<div>

									<select className="form-control"
													ref={(input) => {this.productRef = input}}>
										{products && products.map(({name}, i) => (
											<option key={i} value={name}>
												{name}
											</option>
										))}
									</select>
								</div>

							</div>
							<Button style={{float: 'right'}} type="submit">Add</Button>
						</form>

					</Col>
				</Row>
				<Row style={{marginTop: '1em'}}>
					<Col>
						<div className={`row ${invoices.list.length < 1 && 'd-n'}`}>
							<Table responsive hover>
								<thead>
								<tr>
									<th>Name</th>
									<th>Price</th>
									<th>Qty</th>
								</tr>
								</thead>
								<tbody>
								{invoices.list.length > 0 && prodList}
								</tbody>
							</Table>
						</div>
						<h2 className="total">Total: {this.setTotal()}</h2>
						<Button bsStyle={this.state.msg ? 'success' : 'primary'}
										onClick={this.saveInvoice}>
							{this.state.msg ? 'Saved' : 'Save'}
						</Button>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default EditInvoice;

// todo: React Router