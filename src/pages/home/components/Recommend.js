import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper } from '../style'

class Recommend extends PureComponent{
    render(){
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item)=>{
                        return (
                            <a href=" " key={item.get('id')}>
                                <img alt="" src={item.get('img')}></img>
                            </a>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        list: state.getIn(['home', 'recommendsList'])
    }
}

export default connect(mapStateToProps, null)(Recommend)