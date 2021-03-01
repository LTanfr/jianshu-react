import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
});

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: fromJS(data.topicList),
  recommendList: fromJS(data.recommendList),
  articleList: fromJS(data.articleList),
  writerList: fromJS(data.writerList),
  totalPage: Math.ceil(data.writerList.length / 5)
});

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res) => {
      const data = res.data.data;
      dispatch(changeHomeData(data));
    }).catch(() => {
      console.log('error:getHomeData');
    });
  }
}

const addArticleList = (list, nextPage) =>({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage: nextPage
});

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('api/homeList.json?page=' + page).then((res) => {
      const data = res.data.data;
      dispatch(addArticleList(data, page + 1));
    }).catch(() => {
      console.log('error:getMoreList');
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})