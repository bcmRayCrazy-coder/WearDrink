import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainPage from './view/pages/MainPage';
import {log} from './lib/logger';

class App extends Component {
  constructor(props) {
    super(props);
    log('WearDrink app started!');
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MainPage />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
});

export default App;
