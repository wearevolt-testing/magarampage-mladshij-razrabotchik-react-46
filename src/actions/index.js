import axios from 'axios';

export const fetchProducts = () => {
	return (dispatch) => {
		axios.get('/api/products')
				 .then((res) => {
					 console.log('products', res.data);
					 dispatch({type: 'FETCH_PRODUCTS', payload: res.data})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}

export const fetchCustomers = () => {
	return (dispatch) => {
		axios.get('/api/customers')
				 .then((res) => {
					 console.log('products', res.data);
					 dispatch({type: 'FETCH_CUSTOMERS', payload: res.data})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}

export const addCustomers = (data) => {
	return (dispatch) => {
		axios.post('/api/customers', data)
				 .then((res) => {
					 dispatch({type: 'ADD_CUSTOMERS', payload: res.data})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}

export const editCustomers = (id, data) => {
 	return (dispatch,getState) => {
		axios.put('/api/customers/' + id, data)
				 .then((res) => {
					 const newState = getState().customers.map((customer) => {
						 if (customer.id ===  res.data.id) {
							 return res.data
						 }
						 return customer
					 })
 					 dispatch({type: 'EDIT_CUSTOMERS', payload:  newState})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}