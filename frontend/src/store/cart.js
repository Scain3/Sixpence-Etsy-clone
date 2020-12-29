import { fetch } from './csrf';

const ADD_ITEM_TO_CART = '/cart/ADD_ITEM';

const PURCHASE_ITEMS = '/CART/PURCHASE_ITEMS';

const addToCart = (id) => {
    return {type: ADD_ITEM_TO_CART, payload: id}
}

export const addItemToCart = (productListingId, userId) => async(dispatch) => {
    const response = await fetch("/api/cart/${productListingId}", {
        method: 'POST',
        body: JSON.stringify({
            userId
        })
    });
    dispatch(addToCart(response.data.cartItem));
}

export const purchaseItems = (id) => {
    return {type: PURCHASE_ITEMS, payload: id}
}

const cartReducer = (state={}, action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART:
            return [action.payload];
        case PURCHASE_ITEMS:
            return {};
        default:
            return state;
    }
}

export default cartReducer;
