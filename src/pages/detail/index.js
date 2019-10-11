import React, { PureComponent } from 'react'
import { DetailWrapper } from './style'
import { connect } from 'react-redux'
import { actioncreator } from './store'
import { withRouter } from 'react-router-dom'

class Detail extends PureComponent{
    render(){
        return (
            <DetailWrapper>
                <div className="warp">
                    <div className="main">
                        <h1>{ this.props.title }</h1>
                        <div className="contain" dangerouslySetInnerHTML={{__html: this.props.content}}>
                        </div>
                    </div>
                </div>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapStateToProps = (state)=>{
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])

    }
}

const mapDispatch = (dispatch)=>({
    getDetail(id){
        dispatch(actioncreator.getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatch)(withRouter(Detail))