import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import EssentialStyles from '../styles/essentialsStyle';
import PageComponent from './PageComponent';

class App extends PageComponent {
  drink(water = 0) {
    console.log('Drink', water);
    this.props.addWater(water);
    console.log(this.state);
    this.navigation.goBack();
  }
  render() {
    return (
      <View style={EssentialStyles.background}>
        <Text style={EssentialStyles.title}>喝水</Text>
        <TouchableHighlight onPress={this.drink.bind(this, 20)}>
          <Text style={EssentialStyles.text}>20 ml</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default App;
