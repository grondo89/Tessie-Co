import {ADD_CATS} from '../../utils/constants'

const initialState ={
    cats: []
}

export default (state=initialState, action) =>{
    switch (action.type) {
        case ADD_CATS: {
            return Object.assign({}, state, {
                cats : action.categories
            })
        }
       
        default:
            return state;
    }
}


