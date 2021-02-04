import React, { Component } from 'react';
import { 
  TopicWrapper,
  TopicItem
} from '../style';

export default class Topic extends Component {
  render(){
    return (
      <TopicWrapper>
        <TopicItem>
          <img className='topic-pic' alt="" src="https://th.bing.com/th/id/R9fbb3c49bb0b9924d883b97e7690e285?rik=XU2iOWyshd7UNw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f03%2fCat-PNG-2-180x180.png&ehk=gk1oHZGY8bp5ltkl1otZq8DqnXUkjDknqqgn%2bi11qKg%3d&risl=&pid=ImgRaw"></img>
          社会热点
        </TopicItem>
      </TopicWrapper>
    )
  }
}