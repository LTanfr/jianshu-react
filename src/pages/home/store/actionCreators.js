import * as constants from './constants';

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});