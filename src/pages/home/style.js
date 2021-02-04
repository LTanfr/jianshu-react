import styled from 'styled-components';

export const HomeWrapper = styled.div `
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div `
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;

  .banner-img {
    width: 625px;
    height: 240px;
  }
`;

export const HomeRight = styled.div `
  float: right;
  width: 240px;
`;

export const TopicWrapper = styled.div `
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -10px;
`;

export const TopicItem = styled.div `
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  float: left;
  margin-left: 16px;
  padding-right: 10px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 16px;

  .topic-pic {
    display:block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
