import { actiontypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case actiontypes.INPUT_FOCUS:
            return state.set('focused', true)
        case actiontypes.INPUT_BLUR:
            return state.set('focused', false)
        case actiontypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actiontypes.ON_MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actiontypes.ON_MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actiontypes.CHANGE_PAGE:
            return state.set('page', action.page )
        default: 
            return state;
    }
}