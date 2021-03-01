import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';

class Home extends PureComponent {


  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  
  render() {
    const { showScroll } = this.props;
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
        {
          showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount() {
    const { changeHomeDate } = this.props;
    changeHomeDate();
    this.bindEvents();
  }

  componentWillUnmount() {
    const { changeScrollTopShow } = this.props;
    window.removeEventListener('scroll', changeScrollTopShow);
  }

  bindEvents() {
    const { changeScrollTopShow } = this.props;
    window.addEventListener('scroll', changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = (dispatch) => ({
  changeHomeDate() {
    dispatch(actionCreators.getHomeData());
  },

  changeScrollTopShow() {
    if(document.documentElement.scrollTop >= 242) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }

  }
});

export default connect(mapState, mapDispatch)(Home);