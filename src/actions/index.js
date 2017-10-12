import axios from 'axios';


//////// ------>>>PRODUCTS ACTION <<<------ \\\\\\\\\\

export const fetchProducts = () => {
	return (dispatch) => {
		axios.get('/api/products')
				 .then((res) => {
					 dispatch({type: 'FETCH_PRODUCTS', payload: res.data})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}

export const addProducts = (data) => {
	return (dispatch) => {
		axios.post('/api/products', data)
				 .then((res) => {
					 dispatch({type: 'ADD_PRODUCTS', payload: res.data})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}

export const editProducts = (id, data) => {

	return (dispatch, getState) => {
		axios.put('/api/products/' + id, data)
				 .then((res) => {
					 const newState = getState().products.map((Product) => {
						 if (Product.id === res.data.id) {
							 return res.data
						 }
						 return Product
					 })
					 dispatch({type: 'EDIT_PRODUCTS', payload: newState})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}

export const deleteProducts = (e, id) => {
	return (dispatch, getState) => {
		axios.delete('/api/products/' + id)
				 .then((res) => {
					 const newState = getState().products.filter((Product) => {
						 if (Product.id !== id) {
							 return Product
						 }
					 })
					 dispatch({type: 'DELETE_PRODUCTS', payload: newState})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}


//////// ------>>> CUSTOMERS ACTION <<<------ \\\\\\\\\\

export const fetchCustomers = () => {
	return (dispatch) => {
		axios.get('/api/customers')
				 .then((res) => {
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

	return (dispatch, getState) => {
		axios.put('/api/customers/' + id, data)
				 .then((res) => {
					 const newState = getState().customers.map((customer) => {
						 if (customer.id === res.data.id) {
							 return res.data
						 }
						 return customer
					 })
					 dispatch({type: 'EDIT_CUSTOMERS', payload: newState})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}

export const deleteCustomers = (e, id) => {
	return (dispatch, getState) => {
		axios.delete('/api/customers/' + id)
				 .then((res) => {
					 const newState = getState().customers.filter((customer) => {
						 if (customer.id !== id) {
							 return customer
						 }
					 })
					 dispatch({type: 'DELETE_CUSTOMERS', payload: newState})
				 })
				 .catch((error) => {
					 console.log(error);
				 })
	}
}


//////// ------>>> INVOICES ACTION <<<------ \\\\\\\\\\


export const fetchInvoices = () => {
	return (dispatch) => {

		dispatch({type: 'FETCH_INVOICES'})

	}
}
//export const increment = (name, value, price) => {
//	return (dispatch, getState) => {
//		const some = [{name, value, price, amount: (value * price)}]
//		const state = getState().invoices.total;
//		const newState = [...state, ...some]
//		console.log('state', state);
//		console.log('some', some);
//		console.log('newState', newState);
//		dispatch({type: 'INCREMENT_INVOICES', payload: newState})
//
//	}
//}


export const addToProdList = (product) => {
	return (dispatch, getState) => {
		const prevState = getState().invoices.list
		const filtered = prevState.filter((elem) => elem.name !== product[0].name)
		const newState = [...filtered, ...product]

		console.log('newState', newState);


		dispatch({type: 'LIST_INVOICES', payload: newState})

	}
}

export const deleteFromProdList = (deleted) => {

	return (dispatch) => {

		dispatch({type: 'DELETE_LIST_INVOICES', payload: deleted})

	}
}

export const saveInvoiceList = (saved) => {

	return (dispatch, getState) => {
		const state = getState().invoices.saved;
 		const product = state.filter(({customer}) => customer !== saved[0].customer)
		const newState = [...product, ...saved]
		dispatch({type: 'SAVE_LIST_INVOICES', payload: newState})

	}
}

export const deleteInvoiceList = (deletedList) => {

	return (dispatch) => {

		dispatch({type: 'DELETED_LIST_INVOICES', payload: deletedList})

	}
}
export const copyInvoices = (i) => {

	return (dispatch, getState) => {
		const state = getState().invoices.saved[i].pList;
		console.log('state', state);
		dispatch({type: 'COPY_INVOICES', payload: state})

	}
}


