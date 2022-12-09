import React, {Component} from 'react';
import {Text, View} from 'react-native';
import EssentialStyles from '../styles/essentialsStyle';

class App extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
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
