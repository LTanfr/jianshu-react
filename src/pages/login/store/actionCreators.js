import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
});

export const login = (username, password) => {
  return (dispatch) => {
    axios.get('./api/login.json?username=' + username + '&password=' + password).then((res) => {
      const data = res.data.data;
      if (data) {
        dispatch(changeLogin());
      } else {
        alert('登录失败！')
      }
    })
  }
}

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})