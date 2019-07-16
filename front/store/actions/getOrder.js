import { ADD_ORDERS, ADD_USER_ORDERS } from "../../utils/constants"
import Axios from "axios";

export const addOrders = (orders) => ({
    type: ADD_ORDERS,
    orders
})
export const addUserOrders = (orders) => ({
    type: ADD_USER_ORDERS,
    orders
})

export const fetchOrders = () =>
    (dispatch) =>
        Axios.get("/api/order/all").then(response => {
            dispatch(addOrders(response.data))
        })

export const fetchUserOrders = (id) =>
    (dispatch) =>
        Axios.get(`/api/order/${id}`).then(response =>
            dispatch(addUserOrders(response.data))
        )

export const updateOrder = (statusAndId) =>
    (dispatch) =>
        Axios.post("/api/order/update", statusAndId).then(res =>
            dispatch(addOrders(res.data))
        )
