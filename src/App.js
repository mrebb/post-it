import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import store from './store/store.js';
import './App.css';
import Header from './components/Header';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <div className="App">
              <Header/>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
