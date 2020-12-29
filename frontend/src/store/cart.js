import { fetch } from './csrf';

const ADD_ITEM = '/cart/ADD_ITEM';

const PURCHASE_ITEMS = '/CART/PURCHASE_ITEMS';

export const addItem = (id) => async(dispatch) => {
    const response = await fetch("/api")
    return {type: ADD_ITEM, payload: id}
}

export const purchaseItems = (id) => {
    return {type: PURCHASE_ITEMS, payload: id}
}

const cartReducer = (state={}, action) => {
    switch(action.type){
        case ADD_ITEM:
            const oldItem = state[action.payload]
            const newObj = {...state, [action.payload]: { id: action.payload, count: oldItem ? oldItem.count + 1 : 1 }}
            return newObj;
        case PURCHASE_ITEMS:
            return {};
        default:
            return state;
    }
}

export default cartReducer;
