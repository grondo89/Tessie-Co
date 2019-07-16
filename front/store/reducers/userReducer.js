import { LOG_USER, DELOG_USER } from '../../utils/constants'

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_USER: {
            return Object.assign({}, state, { user: action.user })
        }
        case DELOG_USER: {
            return Object.assign({}, state, { user: {} })
        }

        default:
            return state;
    }
}