import React from 'react';
import {Button, Table, Grid, Col} from "react-bootstrap";
import {connect} from 'react-redux';
import * as actions from '../actions/index';

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

@connect(mapStateToProps, actions)
class Products extends React.Component {

	componentDidMount() {
		this.props.fetchProducts();


	}


	render() {
		console.log('dsafs', this.props.products);
		const list = this.props.products || '';

		const productList = list.map(({name, price}, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{name}</td>
					<td>{price}</td>
				</tr>)
		})


		return (
			<Grid>
				<Col>
					<h1 style={{display: 'inline-block'}}>Product list</h1>
					<Button className="header-button">Create</Button>
				</Col>

				<Table responsive hover>
					<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Price</th>
					</tr>
					</thead>
					<tbody>
					{productList}
					</tbody>
				</Table>
			</Grid>
		)
	}
}

export default Products;