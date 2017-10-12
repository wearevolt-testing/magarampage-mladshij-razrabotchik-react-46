import {combineReducers} from 'redux';
import productsReducer from "./productsReducer";
import customersReducer from "./customersReducer";
import invoicesReducer from "./invoicesReducer";


export default combineReducers({
	products : productsReducer,
	customers: customersReducer,
	invoices: invoicesReducer

});
