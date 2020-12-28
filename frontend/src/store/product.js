import { fetch } from './csrf';

const GET_PRODUCT = 'GET_PRODUCT';

//GET ALL THE PRODUCTS
const getProduct = (product) => {
    return{
        type: GET_PRODUCT,
        payload: product,
    }
}

//THUNK ACTION FOR GETTING ALL THE PRODUCTS
export const fetchProducts = () => async(dispatch) => {
    const response = await fetch("/api/products");
    dispatch(getProduct(response.data.product));
}

const initialState = [{
    title: " ",
    description: " ",
    image: " ",
    price: 0
}]

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}

export default productReducer;
