import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { 
  TopicWrapper,
  TopicItem
} from '../style';

class Topic extends Component {

  render(){
    const { list, getTopicList } = this.props;

    if (list.size === 0){
      getTopicList();
    }
    
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className='topic-pic' alt="" src={item.get('imgUrl')}></img>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "topicList"])
});

const mapDispath = (dispatch) => ({
  getTopicList() {
    dispatch(actionCreators.getTopicList());
  }
});

export default connect(mapState, mapDispath)(Topic);