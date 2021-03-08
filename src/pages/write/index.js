import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';


class Write extends PureComponent {

  render() {
    const { login } = this.props;
    if (login) {
      return (
        <div>
          Write
        </div>
      )
    } else {
      return (
        <Redirect to='/login'></Redirect>
      )
    }

  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Write);