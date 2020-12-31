import { fetch } from './csrf';

const ADD_ITEM_TO_CART = '/cart/ADD_ITEM';

const PURCHASE_ITEMS = '/CART/PURCHASE_ITEMS';

const REMOVE_ITEM_FROM_CART = '/CART/REMOVE_ITEM';

const addToCart = (item) => {
    return {type: ADD_ITEM_TO_CART, payload: item}
}

const removeItem = (id) => {
    return {type: REMOVE_ITEM_FROM_CART, payload: item}
}
//THUNK ACTION TO ADD ITEM TO CART
export const addItemToCart = (productListingId, userId) => async(dispatch) => {
    const response = await fetch(`/api/cart/${productListingId}`, {
        method: 'POST',
        body: JSON.stringify({
            userId,

        })
    });
    dispatch(addToCart(response.data.cartItem));
}

export const removeItem = (id) => {
    
}

export const purchaseItems = (id) => {
    return {type: PURCHASE_ITEMS, payload: id}
}


const cartReducer = (state=[], action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART:
            return [...state, action.payload];
        case PURCHASE_ITEMS:
            return {};
        default:
            return state;
    }
}

export default cartReducer;
