import { ADD_USERS } from "../../utils/constants"
import Axios from "axios";

const addUsers = (users) => ({
    type: ADD_USERS,
    users
})


export const fetchUsers = () =>
    (dispatch) =>
        Axios.get(`/api/users/all`)
            .then(users => dispatch(addUsers(users.data)))


export const removeUsers = (user) =>
    (dispatch) =>
        Axios.post(`/api/users/remove`, user)
            .then(users => dispatch(addUsers(users.data)))

export const updateUser = (user) =>
    (dispatch) =>
        Axios.post(`/api/users/update`, user)
            .then(users => dispatch(addUsers(users.data)))


