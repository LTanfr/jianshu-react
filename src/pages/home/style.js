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
  width: 280px;
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
    dispaly: inline-block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div `
  width: 460px;
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
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;


export const ListMeta = styled.div `
  padding-top: 5px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;

export const MetaItem = styled.span `
  margin-right:10px;
  color: #b4b4b4;
  .iconfont {
    font-size: 13px;
    margin-right:3px;
  }
  .level {
    color: red;
  }

  a {
    text-decoration: none;
    color: #b4b4b4;
  }
`;

export const RecommendWrapper = styled.div  `
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div `
  width: 280px;
  height: 50px;
  background: url(${(props)=> props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
`;

export const WriterWrapper = styled.div `
  width: 278px;
  height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  line-height: 300px;
  text-align: center;
`;