import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {store} from '../../lib/store/store';
import EssentialStyles from '../styles/essentialsStyle';

class App extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState);
    });
  }
  render() {
    return (
      <View style={EssentialStyles.background}>
        <Text style={EssentialStyles.title}>标题</Text>
      </View>
    );
  }
}

export default App;
