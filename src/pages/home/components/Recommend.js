import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  RecommendWrapper,
  RecommendItem
} from '../style'
class Recommend extends Component {
  render(){
    const { list, getRecommendList } = this.props;
    if (list.size === 0) {
      getRecommendList();
      // console.log(list);
    }
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

const mapDispatch = (dispatch) => ({
  getRecommendList() {
    dispatch(actionCreators.getRecommendList());
  }
})

export default connect(mapState, mapDispatch)(Recommend);