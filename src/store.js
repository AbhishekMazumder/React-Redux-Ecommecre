import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { productsReducer } from './reducers/productReducers';

// initial state value of whole application
const initialState = {};

// Redux Devtool Extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating store
const store = createStore(
	combineReducers({
		products: productsReducer,
	}),
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
