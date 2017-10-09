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