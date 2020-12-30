import { fetch } from './csrf';

const GET_PRODUCTS = 'GET_PRODUCTS';

const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT';

const SET_PRODUCT = 'SET_PRODUCT';

//GET ALL THE PRODUCTS
const getProducts = (products) => {
    return{
        type: GET_PRODUCTS,
        payload: products,
    }
}

//GET ONE PRODUCT
const getOneProduct = (product) => {
    return{
        type: GET_ONE_PRODUCT,
        payload: product,
    }
}

//CREATE A PRODUCT
const setProduct = (product) => {
    return{
        type: SET_PRODUCT,
        payload: product,
    }
}

//THUNK ACTION FOR GETTING ALL THE PRODUCTS
export const fetchProducts = () => async(dispatch) => {
    const response = await fetch("/api/products");
    dispatch(getProducts(response.data.product));
}

//THUNK ACTION FOR GETTING A SINGLE PRODUCT
export const fetchSingleProduct = (id) => async(dispatch) => {
    const response = await fetch(`/api/products/${id}`);
    dispatch(getOneProduct(response.data.singleItem));
}

export const fetchSetProducts = (product) => async(dispatch) => {
    const { userId, title, description, image, price } = product;

    const response = await fetch("/api/products/add-a-listing", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify( {
            userId,
            title,
            description,
            image,
            price
        })
    });

    dispatch(setProduct(response.data.productItem));
    return response;
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
        case SET_PRODUCT:
            return [action.payload];
        default:
            return state;
    }
}

export default productReducer;
