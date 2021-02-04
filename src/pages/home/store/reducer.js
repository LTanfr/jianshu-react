import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'https://th.bing.com/th/id/R9fbb3c49bb0b9924d883b97e7690e285?rik=XU2iOWyshd7UNw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f03%2fCat-PNG-2-180x180.png&ehk=gk1oHZGY8bp5ltkl1otZq8DqnXUkjDknqqgn%2bi11qKg%3d&risl=&pid=ImgRaw'
  },
  {
    id: 2,
    title: '手绘',
    imgUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP.7pEKHF7s05ogjhzX6kUxzwAAAA?pid=Api&rs=1'
  }  
]
});

const homeReducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default homeReducer;