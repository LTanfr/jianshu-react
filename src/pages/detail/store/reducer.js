import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: "毛毛虫成长记---【6】虚惊一场",
  content: "<p>风雨过后的，叶片上的雨珠正顺着叶子的纹路向下滑落。</p><p>“嗯····嗯·······嗯······”细细的压抑的痛苦声音再次在葵花园的角落中回荡。</p><p>蚂蚁甲乙丙丁已经完成了今天的工作，蚂蚁甲细细聆听着葵花园里的动静。另外三只像个跟屁虫似的，紧随其后。</p><p>虽然他们都不明白蚂蚁甲在做什么，但是并不能阻止他们跟随的步伐。</p><p>“啊·····嗯·····啊·····”呻吟声越来越大，证明蚂蚁甲找对了方向，黑黑一对触角不停摇晃，像是在接受信号的天线。</p><img alt='' src='//upload-images.jianshu.io/upload_images/16535071-40917c8941c058c4?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp'></img>"
});

const detailReducer =  (state = defaultState, action) => {
  switch (action.type) { 
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
}

export default detailReducer;