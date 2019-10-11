import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ListWrapper } from '../style'
import { actioncreator } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent{
    render(){
        const { listData, page, getMoreList } = this.props
        return ( 
            <ListWrapper>
                <div className="banner">
                    <img alt='' src="https://upload.jianshu.io/admin_banners/web_images/4741/240c3b01ebd63e7a7129976df20c5e10bd43d799.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                </div>
                {
                    listData.map((item, index)=>{
                        return(
                            <Link className="textD" to={'/Detail/' + item.get('id')} key={ index }>
                                <li className="ListItem">
                                    <div className="listInfo">
                                        <h3>{ item.get('title') }</h3>
                                        <p>{ item.get('main') }</p>
                                        <div className="meta">
                                            <span className="zuan">
                                                <i className="iconfont">&#xeb65;</i>
                                                &nbsp;{ item.get('zuan') }
                                            </span>
                                            {/* <a href="/">{ item.get('ren') }</a> */}
                                            <span className="renx">{ item.get('ren') }</span>
                                            <span>
                                                <i className="iconfont">&#xe67d;</i>
                                                { item.get('xin') }
                                            </span>
                                        </div>
                                    </div>
                                    <img alt="" src={ item.get('img') }></img>
                                </li>
                            </Link>
                        )
                    })
                }
                <div onClick={()=>getMoreList(page)} className="loadMore">加载更多...</div>
                
            </ListWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        listData: state.getIn(['home','articleList']),
        page: state.getIn(['home','articlePage'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getMoreList(page){
            dispatch(actioncreator.getMoreList(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)