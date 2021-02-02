import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import store from './store/index';
import { Fragment } from 'react';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/detail' component={Detail} ></Route>

        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
