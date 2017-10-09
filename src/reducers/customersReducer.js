export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_CUSTOMERS":
			return action.payload || false
			break;
		case "ADD_CUSTOMERS":
			return [...state, action.payload]
			break;

		case "EDIT_CUSTOMERS":
			return action.payload
			break;

		default:
			return state
	}
}