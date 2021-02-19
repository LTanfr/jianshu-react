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
],
  articleList: [{
    id: 1,
    title: '毛毛虫成长记---【6】虚惊一场',
    desc: '日日无事，事复日日，忙忙。亦茫茫。 滴答······滴答······滴答······滴答······ 风雨过后的，叶片上的雨珠正顺着叶子的纹路向...',
    imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.GcxvHkvvzrVg4npU-QdaOQHaE8?w=280&h=187&c=7&o=5&pid=1.7',
    level: 64.5,
    author: '倾城',
    comments: 103,
    stars: 431
  },
  {
    id: 2,
    title: '终于理解父母为什么不开口问儿女要钱了',
    desc: '国庆期间，因换了一部新车，而老公又不愿意按揭，一下付清车款后，生意突然周转不开来，在不想动用储蓄的情况下，想出了一个馊主意：老公让我问问...',
    imgUrl: 'https://tse3-mm.cn.bing.net/th/id/OIP.NDEo8s1jaePHQpsSztorFgHaFj?w=268&h=185&c=7&o=5&pid=1.7',
    level: 32.8,
    author: '萨达',
    comments: 83,
    stars: 293
  },
  {
    id: 3,
    title: '香港情侣在5平米廉租房的一幕，撕开了穷人',
    desc: '01 前几天看了一篇报道，记录了香港一对年轻情侣，挤住在5平米房间里生活的场景。 5平米什么概念？普通人家的厕所都比这要宽敞，而她们却要在...',
    imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.dWWF6fvfUo1l3DRRfb8dtQHaFc?w=245&h=180&c=7&o=5&pid=1.7',
    level: 95.4,
    author: '第三方的蔷薇',
    comments: 1203,
    stars: 603
  },
  {
    id: 4,
    title: '心理学家：永远不要为了省钱而穿旧？',
    desc: '相信很多人都不舍得扔掉自己的旧衣服，总是觉得还可以再穿一个春秋，尤其是那些经济收入不好的家庭，自然会为了省钱而穿旧衣服，即便已经很多年...',
    imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.pckTujBFMjvpUpkx1JMCVwHaEi?w=304&h=186&c=7&o=5&pid=1.7',
    level: 29.1,
    author: '落叶',
    comments: 13,
    stars: 43
  },
  {
    id: 5,
    title: '终于理解父母为什么不开口问儿女要钱了',
    desc: '国庆期间，因换了一部新车，而老公又不愿意按揭，一下付清车款后，生意突然周转不开来，在不想动用储蓄的情况下，想出了一个馊主意：老公让我问问...',
    imgUrl: 'https://tse3-mm.cn.bing.net/th/id/OIP.NDEo8s1jaePHQpsSztorFgHaFj?w=268&h=185&c=7&o=5&pid=1.7',
    level: 24.5,
    author: '午睡',
    comments: 21,
    stars: 31
  },
  {
    id: 6,
    title: '香港情侣在5平米廉租房的一幕，撕开',
    desc: '01 前几天看了一篇报道，记录了香港一对年轻情侣，挤住在5平米房间里生活的场景。 5平米什么概念？普通人家的厕所都比这要宽敞，而她们却...',
    imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.dWWF6fvfUo1l3DRRfb8dtQHaFc?w=245&h=180&c=7&o=5&pid=1.7',
    level: 62.5,
    author: '姑息',
    comments: 73,
    stars: 331
  },
  {
    id: 7,
    title: '心理学家：永远不要为了省钱而？',
    desc: '相信很多人都不舍得扔掉自己的旧衣服，总是觉得还可以再穿一个春秋，尤其是那些经济收入不好的家庭，自然会为了省钱而穿旧衣服，即便已经很多年...',
    imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.pckTujBFMjvpUpkx1JMCVwHaEi?w=304&h=186&c=7&o=5&pid=1.7',
    level: 64.5,
    author: '倾城',
    comments: 103,
    stars: 431
  }],
  recommendList: [{
    id: 1,
    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"
  },
  {
    id: 2,
    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
  },
  {
    id: 3,
    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
  },
  {
    id: 4,
    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
  }]
});

const homeReducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default homeReducer;