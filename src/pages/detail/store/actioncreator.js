import axios from 'axios'
import * as actiontypes from './actiontypes'

const changeDetail = (title, content)=>({
    type: actiontypes.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id=' + id).then((res)=>{
            const result = res.data.data
            dispatch(changeDetail( result.title, result.content ))
        })
    }
}