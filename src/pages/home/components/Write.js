import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriteWrapper } from '../style'

class Write extends PureComponent{
    render(){
        return (
            <WriteWrapper>
                <div className="title">
                    <span>推荐作者</span>
                    <span onClick={()=>this.props.handleChangeWriter(this.refs.icon)}><i ref='icon' className="iconfont iconswithc">&#xe851;</i>&nbsp;换一批</span>
                </div>
                    
                {
                    this.props.writeList.map((item)=>{
                        return(
                            <ul key={ item.get('id') } className="list">
                                <li className="listItem">
                                    <div className="avatar"><img alt="" src={item.get('img')}></img></div>
                                    <div className="author">
                                        <p className="authorName">{item.get('ren')}</p>
                                        <p className="authorFllowNumber">写了{item.get('zi')}字 · {item.get('xi')}喜欢</p>
                                    </div>
                                    <div className="fllow"><span className="fllowItem">+关注</span></div>
                                </li>
                            </ul>
                        )
                        
                    })
                }
                
            </WriteWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        writeList: state.getIn(['home', 'writeList'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleChangeWriter(icon){
            let originAngle = icon.style.transform.replace(/[^0-9]/ig, '')
            if(originAngle){
                originAngle = parseInt(originAngle, 10)
            }else{
                originAngle = 0
            }
            icon.style.transform = 'rotate('+ (originAngle + 360 ) + 'deg)'
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)