import React, {Component} from 'react';
import {Button, Text} from 'react-native';

import PageButton from '../components/PageButton';
import EssentialStyles from '../styles/essentialsStyle';

class App extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  render() {
    return (
      <>
        <Text style={EssentialStyles.text}>腕上水杯</Text>
        <Button
          title="菜单"
          onPress={() => {
            this.navigation.navigate('Menu');
          }}
        />
      </>
    );
  }
}

export default App;
