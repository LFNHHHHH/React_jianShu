import axios from 'axios'
import * as actiontypes from './actiontypes'

const changeLogin = ()=>({
    type: actiontypes.CHANGE_LOGIN,
    value: true
})

export const logOut = ()=>({
    type: actiontypes.LOGOUT,
    value: false
})

export const login = (accout, password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?accout=' + accout + '&password=' + password).then((res)=>{
            const result = res.data.data
            if(result){
                dispatch(changeLogin())
            }else{
                alert('登录失败')
            }
        })
    }
}