import {combineReducers} from 'redux';
import productsReducer from "./productsReducer";
import customersReducer from "./customersReducer";


export default combineReducers({
	products : productsReducer,
	customers: customersReducer

});
