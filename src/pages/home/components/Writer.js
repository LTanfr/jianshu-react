import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  WriterWrapper,
  WriterRecommend,
  WriterRecommendSwitch,
  WriterList,
  WriterListItem
} from '../style'
class Writer extends Component {

  render() {
    const { handleChangWriterPage, list, page, totalPage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 5; i < page * 5; i++) {
        if (newList[i]) {
          pageList.push(
            <WriterListItem key={newList[i].id}>
              <a href="/" className="avatar">
                <img alt="" src={newList[i].imgUrl}></img>
              </a>
              <a href="/" className="follow">
                <i className="iconfont">&#xe624;</i>
                  关注
                </a>
              <a href="/" className="name">
                {newList[i].name}
              </a>
              <p>
                写了{newList[i].words}k字 · {newList[i].likes}k喜欢
              </p>
            </WriterListItem>
          );
        }
      }
    }
    return (
      <WriterWrapper>
        <WriterRecommend>
          推荐作者
          <WriterRecommendSwitch onClick={() => handleChangWriterPage(page, totalPage, this.spinIcon)}>
            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
              换一批
          </WriterRecommendSwitch>
        </WriterRecommend>
        <WriterList>
          { pageList }
        </WriterList>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    page: state.getIn(['home', 'page']),
    totalPage: state.getIn(['home', 'totalPage']),
    list: state.getIn(['home', 'writerList'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChangWriterPage(page, totalPage, spin) {
      const originAngle = +spin.style.transform.replace(/[^0-9]/ig, '');
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}


export default connect(mapState, mapDispatch)(Writer);