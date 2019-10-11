import React, { PureComponent } from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Write from './components/Write'
import { HomeWrapper } from './style'
import { connect } from 'react-redux'
import { actioncreator } from './store'

class Home extends PureComponent{
    render(){
        return (
            <HomeWrapper>
                <div className="homeLeft">
                    <List></List>
                </div>
                <div className="homeRight">
                    <Recommend></Recommend>
                    <Write></Write>
                </div>
                { this.props.showScroll ? <div onClick={()=>{this.handleScrollTop()}} className="toTop">回到顶部</div>: null }
                
            </HomeWrapper>
            
        )
    }

    handleScrollTop = ()=>{
        window.scrollTo(0, 0)
    }
    
    componentDidMount(){
        this.props.gatHomeData()
        this.bindEvents()
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents = ()=>{
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

}

const mapState = (state)=>({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch)=>{
    return {
        gatHomeData(){
            dispatch(actioncreator.getHome())
        },
        changeScrollTopShow(){
            if(document.documentElement.scrollTop > 300){
                dispatch(actioncreator.toggleTopShow(true))
            }else{
                dispatch(actioncreator.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapState, mapDispatchToProps)(Home)