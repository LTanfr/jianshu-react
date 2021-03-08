import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import store from './store/index';
import { Fragment } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail';
import Write from './pages/write';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/login' exact component={Login} ></Route>
          <Route path='/write' exact component={Write} ></Route>
          <Route path='/detail/:id' component={Detail} ></Route>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
