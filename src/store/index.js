import {createStore, combineReducers, applyMiddleware} from "redux"
import ProductsReducer from "./reducers/ProductsReducer"
import CartReducer from "./reducers/CartReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const root = combineReducers({
    ProductsReducer,
    CartReducer
});
const store = createStore(root, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));
export default store;