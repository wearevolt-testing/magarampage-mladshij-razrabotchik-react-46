import React from 'react';
import {Button, Table, Grid, Col} from "react-bootstrap";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import {Helmet} from "react-helmet";

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

@connect(mapStateToProps, actions)
class Products extends React.Component {

	state = {
		modal : false,
		edit  : false,
		delete: false,
		id    : ''
	}
	
	componentDidMount() {
		this.props.fetchProducts();
	}
	
	toggleModal = () => {
		this.setState({modal: !this.state.modal})
	}

	editButton = (id) => {
		this.setState({edit: !this.state.edit, id})
	}

	deleteButton = (id) => {
		this.setState({delete: !this.state.delete, id})
	}

	render() {
 		const list = this.props.products || '';

		const productList = list.map(({name, price, id}, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{name}</td>
					<td>{price}</td>
					<td className="button edit" onClick={() => {this.editButton(id)}}>edit</td>
					<td className="button delete" onClick={() => {this.deleteButton(id)}}>delete</td>
				</tr>)
		})


		return (
			<Grid>
				<Helmet>
					<title>Product List</title>
				</Helmet>
				<Col>
					<h1 style={{display: 'inline-block'}}>Product list</h1>
					<Button className="header-button" onClick={this.toggleModal}>Create</Button>
				</Col>
				{this.props.products.length > 0 ? (
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
				</Table> )
					:
					<h1>No Products, please add new</h1>
				}
				<AddProduct modal={this.state.modal}
										 {...this.props}
										 toggleModal={this.toggleModal}/>

				<EditProduct edit={this.state.edit}
											id={this.state.id}
											{...this.props}
											editButton={this.editButton}/>

				<DeleteProduct modal={this.state.delete}
												toggle={this.deleteButton}
												id={this.state.id}
												deleter={this.props.deleteProducts}/>
			</Grid>
		)
	}
}

export default Products;