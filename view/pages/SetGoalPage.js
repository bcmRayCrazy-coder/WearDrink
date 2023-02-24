import React from 'react';
import {Text, View} from 'react-native';
import EssentialStyles from '../styles/essentialsStyle';
import PageComponent from './PageComponent';

class App extends PageComponent {
  render() {
    return (
      <View style={EssentialStyles.background}>
        <Text style={EssentialStyles.title}>设置目标</Text>
      </View>
    );
  }
}

export default App;
