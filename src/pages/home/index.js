import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

export default class Home extends Component {
    render() {
        return (
          <HomeWrapper>
            <HomeLeft>
              <img className='banner-img' alt="" src="https://th.bing.com/th/id/R498aad49e599493dbd00008a82cc22d3?rik=auskh%2fCLEgNW2w&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20191019%2f20f56bafae0a4b9d88d656eab967aa15.jpeg&ehk=Kc0GSzTkiwNFLX1R%2fidx8G2IaCFS9WHhgQ%2bzLaieJXw%3d&risl=&pid=ImgRaw"></img>
              <Topic />
              <List />
            </HomeLeft>
            <HomeRight>
              <Recommend />
              <Writer />
            </HomeRight>
          </HomeWrapper>
        )
    }
}