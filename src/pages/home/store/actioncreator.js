import * as actiontypes from './actiontypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const getHomeList = (data)=>({
    type: actiontypes.GET_HOME_LIST,
    articleList: fromJS(data.articleList)
})
export const addHomeList = (data, page)=>({
    type: actiontypes.ADD_HOME_LIST,
    articleListMore: fromJS(data.articleList),
    page
})
export const toggleTopShow = (show)=>({
    type: actiontypes.TOGGLE_SCROLL_TOP,
    show
})

export const getHome = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const data = res.data.data
            const action = getHomeList(data)
            dispatch(action)
        })
    }
}

export const getMoreList = (page)=>{
    return (dispatch)=>{
        axios.get('/api/home2.json?page='+ page).then((res)=>{
            const data = res.data.data
            const action = addHomeList(data,page +1)
            dispatch(action)
        })
        
    }
}