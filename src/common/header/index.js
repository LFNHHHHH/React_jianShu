import React,{ PureComponent } from 'react'
import { HeaderWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actioncreator } from './store'
import { actioncreator as loginActioncreation } from '../../pages/login/store'
import { Link } from 'react-router-dom'

class Header extends PureComponent{
    render(){

        const { focused, list, login, logOut, handleInputFocus, handleINputBlur } = this.props

        return(
            <HeaderWrapper>
                <Link to='/'>
                    <div className="logo"><span></span></div>
                </Link>
                <div className='nav'>
                    <div className="navLeft">
                        <Link to='/' className="textD"><div className="navItem">首页</div></Link>
                        <div className="navDownload">下载App</div>
                        <div className='navInput'>
                            <CSSTransition
                                in = { focused }
                                timeout = {2000}   
                                classNames = 'slide'
                            >
                                <input 
                                    placeholder="搜索" 
                                    className={ [ focused?'focused navSearch':'navSearch'] }
                                    onFocus = {()=>handleInputFocus(list) }
                                    onBlur = { handleINputBlur }
                                ></input>
                            </CSSTransition>
                            <span className={ [ focused?'iconfocused iconfont':'iconfont'] }>&#xe64d;</span>
                            {this.getListArea()}
                        </div>
                    </div>
                    <div className="navRight">
                        <div className="navAa">
                            <span className="iconfont">&#xe636;</span>
                        </div>
                        {
                            login? 
                            <div onClick={logOut} className="navLoinIn">退出</div> : 
                            <Link to='/login' style={{textDecoration: 'none' }}><div className="navLoinIn">登录</div></Link>
                        }
                    </div>
                </div>
                <div><button className="navRegistered">注册</button></div>
                <div>
                    <Link to='/write'><button className="navWrite"><span className="iconfont">&#xe600;</span> 写文章</button></Link>
                </div>
            </HeaderWrapper>
        )
    }

    getListArea = ()=>{
 
        const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const newList = list.toJS()
        const pageList = []

        if(newList.length){
            for(let i = (page -1)*10; i < page*10; i++){
                pageList.push(
                    <li className="searchInfoItem" key={newList[i]}>{newList[i]}</li>
                )
            }
        }

        if( focused || mouseIn ){
            return(
                <div className="searchInfo" 
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                >
                    <div className="searchInfoTitle">
                        热门搜索 
                        <div className="searchInfoSwitch" 
                            onClick={()=> handleChangePage(page, totalPage, this.refs.icon) }
                        >
                            <span ref='icon' className="iconfont iconswithc">&#xe851;</span>
                            换一批
                        </div>
                        <div style={{marginTop: '10px'}}>
                            { pageList }
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login']),
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actioncreator.getList())
            dispatch(actioncreator.getInputFocusAction(true))
        },
        handleINputBlur(){
            dispatch(actioncreator.getInputBlurAction(false))
        },
        handleMouseEnter(){
            dispatch(actioncreator.onMouseEnter())
        },
        handleMouseLeave(){
            dispatch(actioncreator.onMouseLeave())
        },
        handleChangePage(page, totalPage, icon ){
            let originAngle = icon.style.transform.replace(/[^0-9]/ig, '')
            if(originAngle){
                originAngle = parseInt(originAngle, 10)
            }else{
                originAngle = 0
            }
            icon.style.transform = 'rotate('+ (originAngle + 360 ) + 'deg)'

            if(page < totalPage){
                dispatch(actioncreator.changePage(page+1))
            }else{
                dispatch(actioncreator.changePage(1))
            }
        },
        logOut(){
            dispatch(loginActioncreation.logOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)