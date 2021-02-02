import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
export default class Home extends Component {
    render() {
        return (
          <HomeWrapper>
            <HomeLeft>
              <img alt="" src=""></img>
            </HomeLeft>
            <HomeRight>right</HomeRight>
          </HomeWrapper>
        )
    }
}