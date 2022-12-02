import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './view/pages/MainPage';
import MenuPage from './view/pages/MenuPage';
import {log} from './lib/logger';

class App extends Component {
  Stack = createNativeStackNavigator();
  constructor(props) {
    super(props);
    log('WearDrink app started!');
  }
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <this.Stack.Navigator initialRouteName="Main">
            <this.Stack.Screen name="Main" component={MainPage} />
            <this.Stack.Screen name="Menu" component={MenuPage} />
          </this.Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    marginBottom: 10,
  },
});

export default App;
