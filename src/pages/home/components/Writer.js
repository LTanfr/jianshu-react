import React, { Component } from 'react';
import {
  WriterWrapper,
  WriterRecommend,
  WriterRecommendSwitch
} from '../style'
export default class Writer extends Component {
  render(){
    return (
      <WriterWrapper>
        <WriterRecommend>
          作者推荐
          <WriterRecommendSwitch>

          </WriterRecommendSwitch>
        </WriterRecommend>
      </WriterWrapper>
    )
  }
}