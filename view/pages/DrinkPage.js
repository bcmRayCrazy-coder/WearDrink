import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';
import {addWater} from '../../lib/store/action';
import EssentialStyles from '../styles/essentialsStyle';
import PageComponent from './PageComponent';

// class App extends PageComponent {
//   drink(water = 0) {
//     console.log('Drink', water);
//     this.navigation.dispatch(addWater(water));
//     console.log(this.state);
//     this.navigation.goBack();
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <View style={EssentialStyles.background}>
//         <Text style={EssentialStyles.title}>喝水</Text>
//         <TouchableHighlight onPress={this.drink.bind(this, 20)}>
//           <Text style={EssentialStyles.text}>20 ml</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

function App({dispatch, navigation}) {
  return (
    <View style={EssentialStyles.background}>
      <Text style={EssentialStyles.title}>喝水</Text>
      <TouchableHighlight
        onPress={() => {
          dispatch(addWater(20));
          navigation.goBack();
        }}>
        <Text style={EssentialStyles.text}>20 ml</Text>
      </TouchableHighlight>
    </View>
  );
}

export default connect(state => ({water: state.water}))(App);
