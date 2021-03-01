import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
  page: 1,
  totalPage: 0,
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.topicList,
    articleList: action.articleList,
    recommendList: action.recommendList,
    writerList: action.writerList,
    totalPage: action.totalPage
  });
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  });
}

const homeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.GET_TOTAL_PAGE:
      return state.set('totalPage', action.totalPage);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}

export default homeReducer;