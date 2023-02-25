import React from 'react';
import {Text, View} from 'react-native';
import EssentialStyles from '../styles/essentialsStyle';
import PageComponent from './PageComponent';

class App extends PageComponent {
  render() {
    return (
      <View style={EssentialStyles.background}>
        <Text style={EssentialStyles.title}>关于</Text>
        <Text style={EssentialStyles.text}>
          Wear Drink v1.0{'\n'}
          由bcmray_crazy开发, 在GitHub上开源:{'\n'}
          https://github.com/bcmRayCrazy-coder/WearDrink{'\n'}
          欢迎大家来做贡献!
        </Text>
      </View>
    );
  }
}

export default App;
