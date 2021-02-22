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

const topicList = (data) => ({
    type: constants.GET_TOPIC_LIST,
    data: fromJS(data)
});

export const getTopicList = () => {
    return (dispatch) => {
        axios.get('/api/topicList.json').then((res) => {
            const data = res.data;
            dispatch(topicList(data.data));
        }).catch(() => {
            console.log('error');
        });
    }
}

const articleList = (data) => ({
    type: constants.GET_ARTICLE_LIST,
    data: fromJS(data)
});

export const getarticleList = () => {
    return (dispatch) => {
        axios.get('api/articleList.json').then((res) => {
            const data = res.data;
            dispatch(articleList(data.data));
        }).catch(() => {
            console.log('error');
        });
    }
}
