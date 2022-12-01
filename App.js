import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainPage from './view/pages/MainPage';

class App extends Component {
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
