import { actiontypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

const getChangeList = (data)=>({
    type: actiontypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getInputFocusAction = (value)=>({
    type: actiontypes.INPUT_FOCUS,
    value
})

export const getInputBlurAction = (value)=>({
    type: actiontypes.INPUT_BLUR,
    value
})

export const onMouseEnter = ()=>({
    type: actiontypes.ON_MOUSE_ENTER
})

export const onMouseLeave = ()=>({
    type: actiontypes.ON_MOUSE_LEAVE
})

export const changePage = (page)=>({
    type: actiontypes.CHANGE_PAGE,
    page
})



export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data.data
            const action = getChangeList(data)
            dispatch(action)
        }).catch(()=>{console.log('获取数据失败')})
    }
}