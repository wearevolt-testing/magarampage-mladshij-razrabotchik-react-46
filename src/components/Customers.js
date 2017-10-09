import React from 'react';
import {Button, Table, Grid, Col} from "react-bootstrap";
import {connect} from 'react-redux';
import * as actions from '../actions/index';

function mapStateToProps(state) {
	return {
		customers: state.customers
	}
}

@connect(mapStateToProps, actions)
class Customers extends React.Component {

	componentDidMount() {
		this.props.fetchCustomers();


	}


	render() {
		console.log('dsafs', this.props.customers);
		const list = this.props.customers || '';

		const productList = list.map(({name, address, phone}, index) => {
			return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone}</td>
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
                  <th>Address</th>
                  <th>Phone</th>
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

export default Customers;