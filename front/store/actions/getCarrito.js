import { SET_CART, REM_CART, QUANTITY_DOWN, QUANTITY_UP, DELETE_PRODUCT } from "../../utils/constants"
import Axios from "axios";
import store from "../../store/index"

export const setCart = (carrito) => {
    return {
        type: SET_CART,
        carrito
    }
}
export const remCart = (carrito) => ({
    type: REM_CART,
    carrito
})

export const quantityUp = (id) => ({
    type: QUANTITY_UP,
    id
})

export const quantityDown = (id) => ({
    type: QUANTITY_DOWN,
    id
})


export const deleteSingleProduct = (id) => ({
    type: DELETE_PRODUCT,
    id
})


export const fetchCarrito = (id, addedProducts) =>
    Axios.get(`/api/carrito/${id}`)
        .then(carrito => {
            carrito.data.concat(addedProducts)
            store.dispatch(setCart(carrito.data))
        }
        )

