import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
  page: 1,
  totalPage: 0,
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [{
    id: 1,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '董克平日记',
    words: '1259.2',
    likes: '5.7'
  },
  {
    id: 2,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '卢璐说',
    words: '1782.2',
    likes: '34.7'
  },
  {
    id: 3,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '梅拾璎',
    words: '252.2',
    likes: '31.1'
  },
  {
    id: 4,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: 'Hobbit霍比特人',
    words: '380.5',
    likes: '1.4'
  },
  {
    id: 5,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '念远怀人',
    words: '692.5',
    likes: '14.4'
  },
  {
    id: 6,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '简书钻首席小管家',
    words: '454.4',
    likes: '106.2'
  },
  {
    id: 7,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/6539412/acc6e5b7-6c12-4dc3-a930-0b6651429e93.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '琪官Kafka',
    words: '274',
    likes: '4.3'
  },
  {
    id: 8,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/3730494/a5859e59-509d-4d2c-a594-d8d6e5c23d68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '格列柯南',
    words: '760.5',
    likes: '18.2'
  },
  {
    id: 9,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/6652326/21cbdf91-a930-45d2-ad61-4f91df1e9709.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '野狐狸_',
    words: '366.8',
    likes: '6.3'
  },
  {
    id: 10,
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    name: '吴晓布',
    words: '742.6',
    likes: '25.2'
  }]
});

const homeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_TOPIC_LIST:
      return state.set('topicList', action.data);
    case constants.GET_ARTICLE_LIST:
      return state.set('articleList', action.data);
    case constants.GET_RECOMMEND_LIST:
      return state.set('recommendList', action.data);
    case constants.GET_TOTAL_PAGE:
      return state.set('totalPage', action.totalPage);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}

export default homeReducer;