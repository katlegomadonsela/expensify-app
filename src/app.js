import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';


const store = configureStore(); //allows us to use store methods such as store.dispatch, store.getState, store.subscribe

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    const appRoot = document.getElementById("app");
    ReactDOM.render(jsx, appRoot);
    hasRendered = true;
  }
}


const appRoot = document.getElementById("app");
ReactDOM.render(<LoadingPage/>, appRoot);




firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
