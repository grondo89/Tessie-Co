import {ADD_ORDERS, ADD_USER_ORDERS} from '../../utils/constants'

const initialState ={
    orders: [],
    userOrders:[]
}

export default (state=initialState, action) =>{
    switch (action.type) {
        case ADD_ORDERS: {
            return Object.assign({}, state, {
                orders : action.orders
            })
        }
        case ADD_USER_ORDERS: {
            return Object.assign({}, state, {
                userOrders : action.orders
            })
        }
       
        default:
            return state;
    }
}


