import { fetch } from './csrf';

const GET_PRODUCTS = 'GET_PRODUCTS';

const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT';

//GET ALL THE PRODUCTS
const getProducts = (products) => {
    return{
        type: GET_PRODUCTS,
        payload: products,
    }
}

const getOneProduct = (product) => {
    return{
        type: GET_ONE_PRODUCT,
        payload: product,
    }
}

//THUNK ACTION FOR GETTING ALL THE PRODUCTS
export const fetchProducts = () => async(dispatch) => {
    const response = await fetch("/api/products");
    dispatch(getProducts(response.data.product));
}

export const fetchSingleProduct = (id) => async(dispatch) => {
    const response = await fetch(`/api/products/${id}`);
    dispatch(getOneProduct(response.data.singleItem));
}

const initialState = {}

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            const newProducts = {};
            action.payload.forEach((product) => {
                newProducts[product.id] = product
            })
            return newProducts;
        case GET_ONE_PRODUCT:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}

export default productReducer;
