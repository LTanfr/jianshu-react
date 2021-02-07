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
                      <span className="level">{item.get('level')}</span>
                    </MetaItem>
                    <MetaItem>
                      <a href="/">{item.get('author')}</a>
                    </MetaItem>
                    <MetaItem>
                      <i className="iconfont">&#xe629;</i>
                      <a href="/">{item.get('comments')}</a>
                    </MetaItem>
                    <MetaItem>
                      <i className="iconfont">&#xe66d;</i>
                      <span>{item.get('stars')}</span>
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