import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import PageComponent from './PageComponent';
import EssentialStyles from '../styles/essentialsStyle';

class App extends PageComponent {
  render() {
    return (
      <View style={EssentialStyles.background}>
        {/* Menu bar */}
        <View style={[EssentialStyles.sameRow, styles.menu]}>
          <Text style={EssentialStyles.title}>腕上水杯</Text>
          <TouchableHighlight
            onPress={() => {
              this.navigation.navigate('Menu');
            }}
            style={styles.menuIconWrapper}>
            <Image
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAchJREFUeF7tWq1OxEAQni2hZwDRgsCQIFoMnsdAHc8ADQIMgSeAYAiEFJ7hHG+AxZ+hdSgEbS6gSkKXnAB5u+3u3u1kprY7s998883+dCqA+COIxw9MACuAOANcAsQFwIsglwCXAHEGuASIC4B3AS4B7RIYjUM42P3WHr/IgR2wKhUQP5b7soVrAEgXGVOPuQsRwFl1mDzNslUSEOXlK8Lg/2Iu6izZ6U/AaBxGH4OmB/vemNTrzWBW6WoooPgEEKveRNQJiPyqs3StvwIAIH4oL6WE807zejJYCLiqjpILIwKmxvF9sScDseVJXFowRCvfquP0RTVYWQIqB9jfMwHYM2iKnxVgyiB2e1YA9gya4lcqYOWu3FhegiEIGJpONk/7ANrbnyZ8npxuT4wOQlFengDAzTzB25rLykkQ+W3wvc6STVMFYL4OWyGAdgmQXwRtLUi++lFug74Ct4WLCbDFJFY/rACsmbOFmxWgwyTpj6LkP4tHOeXGCLfGAJBfhw2bo9OuEPX2+P8u0eGnA52dxemYDlj5HOA0EwicswIQJMkpRFaAU3oROGcFIEiSU4isAKf0InDOCkCQJKcQWQFO6UXgnLwCfgGHW4RBrPSITAAAAABJRU5ErkJggg==',
              }}
              style={styles.menuIcon}
            />
          </TouchableHighlight>
        </View>
        {/* Main View */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 320,
  },
  menuIconWrapper: {
    height: 32,
    width: 32,
    marginLeft: 'auto',
    marginRight: 16,
  },
  menuIcon: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
});

export default App;
