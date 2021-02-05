import React, { Component, Fragment } from 'react';
import {
 ListItem,
 ListInfo,
 ListMeta
} from '../style';

export default class List extends Component {
  render(){
    return (
      <Fragment>
        <ListItem>
          <img className="pic" alt="" src="https://tse1-mm.cn.bing.net/th/id/OIP.GcxvHkvvzrVg4npU-QdaOQHaE8?w=280&h=187&c=7&o=5&pid=1.7"></img>
          <ListInfo>
            <a href="/" className="title">毛毛虫成长记---【6】虚惊一场</a>
            <p className="desc">日日无事，事复日日，忙忙。亦茫茫。 滴答······滴答······滴答······滴答······ 风雨过后的，叶片上的雨珠正顺着叶子的纹路向...</p>
          </ListInfo>
          <ListMeta>
            <i className="iconfont">&#xe63d;</i>
            <span>65.4</span>
            <a href="/">倾城的</a>
            <a href="/">103</a>
            <span>431</span>
          </ListMeta>
        </ListItem>

      </Fragment>
    )
  }
}