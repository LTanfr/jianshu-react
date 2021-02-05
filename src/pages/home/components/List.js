import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
 ListItem,
 ListInfo,
 ListMeta,
 MetaItem
} from '../style';

class List extends Component {
  render(){
    const { list } = this.props;
    return (
      <Fragment>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="pic" alt="" src={item.get('imgUrl')}></img>
                <ListInfo>
                  <a href="/" className="title">{item.get('title')}</a>
                  <p className="desc">{item.get('desc')}</p>
                  <ListMeta>
                    <MetaItem>
                      <i className="iconfont level">&#xe63d;</i>
                      <span className="level">65.4</span>
                    </MetaItem>
                    <MetaItem>
                      <a href="/">倾城的</a>
                    </MetaItem>
                    <MetaItem>
                      <i className="iconfont">&#xe629;</i>
                      <a href="/">103</a>
                    </MetaItem>
                    <MetaItem>
                      <i className="iconfont">&#xe66d;</i>
                      <span>431</span>
                    </MetaItem>
                  </ListMeta>
                </ListInfo>
              </ListItem>      
            );
          })
        }
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"])
});

const mapDispatch = () => ({

});

export default connect(mapState, mapDispatch)(List);