import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: "AAA",
        category: "BBB"
    }]
}
export const productReducer = (state, {type, payload}) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}