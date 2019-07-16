import { ADD_USERS } from '../../utils/constants'

const initialState = {
    all: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS: {
            return Object.assign({}, state, { all: action.users })
        }


        default:
            return state;
    }
}