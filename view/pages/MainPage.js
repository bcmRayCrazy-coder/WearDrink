import React, {Component} from 'react';
import {Text} from 'react-native';

import PageButton from '../components/PageButton';
import EssentialStyles from '../styles/essentialsStyle';

class App extends Component {
  render() {
    return (
      <>
        <Text style={EssentialStyles.text}>Main page</Text>
        <PageButton title="atitle" img="/" />
      </>
    );
  }
}

export default App;
