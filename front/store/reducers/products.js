import { ADD_PRODUCTS, ADD_PRODUCT } from '../../utils/constants'

const initialState = {
    products: [],
    product: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS: {
            return Object.assign({}, state, { products: action.products })
        }
        case ADD_PRODUCT: {
            return Object.assign({}, state, { product: action.product })
        }
        default:
            return state;
    }
}


