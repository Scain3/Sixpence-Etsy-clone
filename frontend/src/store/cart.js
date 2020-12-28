import { fetch } from './csrf';

const ADD_ITEM = '/cart/ADD_ITEM';

export const addItem = (id) => {
    return {type: ADD_ITEM, payload: id}
}

const cartReducer = (state={}, action) => {
    switch(action.type){
        case ADD_ITEM:
            const oldItem = state[action.payload]
            const newObj = {...state, [action.payload]: { id: action.payload, count: oldItem ? oldItem.count + 1 : 1 }}
            return newObj;
        default:
            return state;
    }
}

export default cartReducer;
