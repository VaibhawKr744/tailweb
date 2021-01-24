import { GET_ALL_PRODUCTS } from "../actions/getAllProducts";

const initState = {
    products: [],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
        case GET_ALL_PRODUCTS:
            return { ...state, products: action.payload }
        default:
            return state;
    }
}
export default ProductsReducer;