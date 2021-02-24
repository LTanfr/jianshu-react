import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
  page: 1,
  totalPage: 0,
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
});

const homeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        writerList: action.writerList,
        totalPage: action.totalPage
      });
    case constants.GET_TOTAL_PAGE:
      return state.set('totalPage', action.totalPage);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}

export default homeReducer;