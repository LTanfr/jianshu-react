import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

export const getTotalPage = (totalPage) => ({
    type: constants.GET_TOTAL_PAGE,
    totalPage
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
            console.log('error:getHomeData')
        });
    }
}