import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    relatedProducts: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products:payload };

        case ActionTypes.SET_RELATED_PRODUCTS:
            return { ...state, relatedProducts: payload };
    
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
    
        default:
            return state;
    }
}