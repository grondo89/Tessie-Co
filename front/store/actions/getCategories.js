import { ADD_CATS } from "../../utils/constants"
import Axios from "axios";

const addCategories = (categories) => ({
    type: ADD_CATS,
    categories
})

export const fetchCategories = () =>
    (dispatch) =>
        Axios.get(`/api/categories/all`)
            .then(categories => dispatch(addCategories(categories.data)))
export const remove = (cat) =>
    (dispatch) =>
        Axios.post(`/api/categories/remove`, cat)
            .then(categories => dispatch(addCategories(categories.data)))
export const create = (cat) =>
    (dispatch) =>
        Axios.post(`/api/categories/create`, cat)
            .then(categories => dispatch(addCategories(categories.data)))


