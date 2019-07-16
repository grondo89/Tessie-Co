import { SET_CART, REM_CART, QUANTITY_DOWN, QUANTITY_UP, DELETE_PRODUCT } from '../../utils/constants'

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CART: {
            return Object.assign({}, state, {
                products: [...state.products, action.carrito]
            })
        }
        case REM_CART: {
            if (action.carrito)
                return Object.assign({}, state, {
                    products: action.carrito
                })
            else {
                return Object.assign({}, state, {
                    products: state.products
                })
            }
        }
        case QUANTITY_UP: {
            let index = state.products.findIndex(product => product.id == action.id)
            const selectedProduct = state.products[index]
            if(selectedProduct.stock-selectedProduct.quantity<=0) return state
            if (!selectedProduct.quantity) selectedProduct.quantity = 2
            else selectedProduct.quantity += 1
            return Object.assign({}, state, {
                products: [...state.products.slice(0, index), ...state.products.slice(index)]
            })
        }

        case QUANTITY_DOWN: {
            let index = state.products.findIndex(product => product.id == action.id)
            const selectedProduct = state.products[index]
            if (selectedProduct.quantity > 1) selectedProduct.quantity -= 1
            return Object.assign({}, state, { products: [...state.products] })
        }
        case DELETE_PRODUCT: {
            let index = state.products.findIndex(product => product.id == action.id)
            const selectedProduct = state.products[index]
            state.products.splice(index, 1)
            return Object.assign({}, state, {
                products: [...state.products]
            })
        }
        default:
            return state;
    }
}
