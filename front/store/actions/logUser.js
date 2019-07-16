import { LOG_USER, DELOG_USER } from "../../utils/constants";
import Axios from "axios";
import store from "../../store/index"
import { setCart, remCart } from "../actions/getCarrito";

export const logUser = (user) => ({
    type: LOG_USER,
    user
})
export const deLogUser = () => ({
    type: DELOG_USER,
})

export const fetchUser = (user, history, addedProducts) => Axios.post("/api/user/login", user)
    .then(user => {
        store.dispatch(logUser(user.data))
        user.data.admin == true && history.push("/admin")
        return user.data
    })
    .then((user) => {
        Axios.get(`/api/carrito/${user.id}`)
            .then(carrito => {
                carrito.data.forEach(product => {
                    if (addedProducts[0]) addedProducts.forEach(ad => {
                        if (product.id !== ad.id) store.dispatch(setCart(product))
                    })
                    else store.dispatch(setCart(product))
                })
                return user
            })
            .then((user) => {
                addedProducts.forEach(prod => {
                    Axios.post(`/api/carrito/${user.id}`, {
                        product: prod
                    })
                })
            })
    })

export const fetchLoggedUser = () => Axios.get("/api/user/get-user").then(user => {
    store.dispatch(logUser(user.data))
    return user.data
})
    .then((user) => {
        Axios.get(`/api/carrito/${user.id}`)
            .then(carrito => {
                store.dispatch(remCart(carrito.data))
                return user
            })
    })
