import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './view/pages/MainPage';
import MenuPage from './view/pages/MenuPage';
import SettingsPage from './view/pages/SettingsPage';
import AboutPage from './view/pages/AboutPage';
import SkinPage from './view/pages/SkinPage';

import {log} from './lib/logger';
import Header from './view/components/Header';

class App extends Component {
  Stack = createNativeStackNavigator();
  constructor(props) {
    super(props);
    log('WearDrink app started!');
  }
  render() {
    return (
      <NavigationContainer>
        <this.Stack.Navigator initialRouteName="Main">
          <this.Stack.Screen
            name="Main"
            component={MainPage}
            options={{header: props => <Header {...props} />}}
          />
          <this.Stack.Screen
            name="Menu"
            component={MenuPage}
            options={{header: props => <Header {...props} />}}
          />
          <this.Stack.Screen
            name="Settings"
            component={SettingsPage}
            options={{header: props => <Header {...props} />}}
          />
          <this.Stack.Screen
            name="Skin"
            component={SkinPage}
            options={{header: props => <Header {...props} />}}
          />
          <this.Stack.Screen
            name="About"
            component={AboutPage}
            options={{header: props => <Header {...props} />}}
          />
        </this.Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
