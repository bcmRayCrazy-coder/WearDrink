import React, {Component} from 'react';
import {Text, View} from 'react-native';
import i18n from '../../lib/i18n/index';
import EssentialStyles from '../styles/essentialsStyle';

console.log(i18n);
class App extends Component {
  t = i18n.t;
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
