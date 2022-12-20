/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './lib/store/store';

export default class AppIndex extends Component {
  render() {
    <Provider store={store}>
      <App />
    </Provider>;
  }
}
