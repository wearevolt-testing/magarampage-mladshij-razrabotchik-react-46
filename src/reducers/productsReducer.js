export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_PRODUCTS":
			return action.payload || false
			break;

		case "ADD_PRODUCTS":
			return [...state, action.payload]
			break;

		case "EDIT_PRODUCTS":
			return action.payload
			break;

		case "DELETE_PRODUCTS":
			return action.payload
			break;

 
		default:
			return state
	}
}