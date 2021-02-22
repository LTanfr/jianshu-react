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
            console.log('error:getTopicList');
        });
    }
}

const articleList = (data) => ({
    type: constants.GET_ARTICLE_LIST,
    data: fromJS(data)
});

export const getArticleList = () => {
    return (dispatch) => {
        axios.get('api/articleList.json').then((res) => {
            const data = res.data;
            dispatch(articleList(data.data));
        }).catch(() => {
            console.log('error:getArticleList');
        });
    }
}

const recommendList = (data) => ({
    type: constants.GET_RECOMMEND_LIST,
    data: fromJS(data)
});

export const getRecommendList = () => {
    return (dispatch) => {
        axios.get('api/recommendList.json').then((res) => {
            const data = res.data;
            console.log(data);
            dispatch(recommendList(data.data));
        }).catch(() => {
            console.log('error:getRecommendList')
        })
    }
}