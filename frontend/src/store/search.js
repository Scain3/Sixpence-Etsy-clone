import { fetch } from './csrf';

const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

const searchProduct = (product) => {
    return{
        type: SEARCH_PRODUCT,
        payload: product,
    }
}

export const fetchSearchProduct = (term) => async(dispatch) => {
    const response = await fetch(`/api/search?term=${encodeURIComponent(term)}`);

    dispatch(searchProduct(response.data.products));
}

const initialState = [];

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}

export default searchReducer;
