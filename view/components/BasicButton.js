/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {log} from '../../lib/logger';
import ES from '../styles/essentialsStyle';

class BasicButton extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          ES.cardBtnContainer,
          styles.container,
          {
            backgroundColor:
              this.props.bgColor || ES.cardBtnContainer.backgroundColor,
          },
        ]}
        onPress={() =>
          this.props.onPress
            ? this.props.onPress()
            : log('Basic Button Pressed without handler!')
        }>
        <Text style={[ES.text, styles.text]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 6,
  },
});

export default BasicButton;
