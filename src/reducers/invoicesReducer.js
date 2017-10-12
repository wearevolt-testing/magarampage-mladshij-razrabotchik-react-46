export default (state = {
	list : [],
	saved: []

}, action) => {
	switch (action.type) {
		case "FETCH_INVOICES":
			return state
			break;

		case "INCREMENT_INVOICES":
			return {...state, total: action.payload}
			break;
		case "DECREMENT_INVOICES":
			return {total: action.payload, amount: action.amount}
			break;
		case "ADD_INVOICES":
			return action.payload
			break;

		case "_INVOICES":
			return action.payload
			break;

		case "LIST_INVOICES":
			return {...state, list: action.payload}
			break;

		case "COPY_INVOICES":
			return {...state, list: action.payload}
			break;

		case "DELETE_LIST_INVOICES":
			return {...state, list: action.payload}
			break;

		case "SAVE_LIST_INVOICES":

			return {
				...state,
				list : [],
				saved:  action.payload
			}
			break;

		case "DELETED_LIST_INVOICES":

			return {
				...state,
				list : [],
				saved:  action.payload
			}
			break;

		default:
			return state
	}
}