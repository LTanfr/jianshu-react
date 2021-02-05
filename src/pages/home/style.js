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
  border-bottom: 1px solid #dcdcdc;
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


export const ListItem = styled.div `
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;

  .pic {
    margin-left:10px;
    display:block;
    width: 145px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div `
  width: 470px;
  float: left;
  .title {
    font-size: 18px;
    display: inherit;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
    color: #333;
  }

  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;


export const ListMeta = styled.div `
  padding-right: 0!important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  
  .iconfont {
    font-size: 13px;
    color: red;
  }
`;
