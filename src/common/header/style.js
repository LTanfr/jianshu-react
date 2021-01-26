import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div `
  width: 960px;
  margin: 0 auto;
  height: 100%;
  padding-right: 100px;
  border-sizing: border-box;
`;

export const NavItem = styled.div `
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  line-height: 56px;
  padding:0 15px;
  font-size: 17px;
  color:#333;
`;

export const SearchWrapper = styled.div `
  float: left;
  position:relative;
  .iconfont {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width:30px;
    line-height:30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
  .slide-enter {
    width: 200px;
    transition: all .4s ease-out;
  }
  .slider-enter-active {
    width: 320px;
  }
  .slider-exit {
    transition: all .4s ease-out;
  }
  .slider-exit-active {
    width: 200px;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) `
  width: 200px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
`;

export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div `
&.reg {
  color: #ec6149;
}
&.writting {
  color: #fff;
  background: #ec6149;
}
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 16px;
  border-radius: 19px;
  border: 1px solid #ec6149;
`;