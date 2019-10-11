import React, { PureComponent } from 'react'
import { LoginWrapper } from './style'
import { connect } from 'react-redux'
import { actioncreator } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent{
    render(){
        if( !this.props.loginStatus ){
            return (
                <LoginWrapper>
                    <div className="loginBox">
                        <input placeholder="账号" ref='accout'></input>
                        <input placeholder="密码" type='password' ref='password'></input>
                        <div onClick={()=>{this.props.login(this.refs.accout.value, this.refs.password.value)}} className="buttonStyle">
                            登录
                        </div>
                    </div>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
    }
}

const mapState = (state)=>({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch)=>({
    login(accout, password){
        dispatch(actioncreator.login(accout, password))
    }
})

export default connect(mapState, mapDispatch)(Login)