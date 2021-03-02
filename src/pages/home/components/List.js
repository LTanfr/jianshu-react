import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  ListMeta,
  MetaItem,
  LoadMore
} from '../style';

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;

    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem >
                  <img className="pic" alt="" src={item.get('imgUrl')}></img>
                  <ListInfo>
                    <h3  className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                    <ListMeta>
                      <MetaItem>
                        <i className="iconfont level">&#xe63d;</i>
                        <span className="level">{item.get('level')}</span>
                      </MetaItem>
                      <MetaItem>
                        <span href="/">{item.get('author')}</span>
                      </MetaItem>
                      <MetaItem>
                        <i className="iconfont">&#xe629;</i>
                        <span>{item.get('comments')}</span>
                      </MetaItem>
                      <MetaItem>
                        <i className="iconfont">&#xe66d;</i>
                        <span>{item.get('stars')}</span>
                      </MetaItem>
                    </ListMeta>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }

        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
});


export default connect(mapState, mapDispatch)(List);