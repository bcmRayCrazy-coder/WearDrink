/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {log} from '../../lib/logger';
import ES from '../styles/essentialsStyle';

function ButtonInner({props}) {
  return (
    <View>
      <Text style={[ES.text, styles.title]}>{props.title}</Text>
      <Text style={[ES.text, styles.description]}>{props.description}</Text>
    </View>
  );
}

class SettingButton extends Component {
  constructor(props) {
    super(props);
    if (!props.title || !props.description) {
      throw new Error("Missing property 'title' in SettingButton component!");
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={ES.cardBtnContainer}
        onPress={() => {
          this.props.onPress
            ? this.props.onPress()
            : log('Setting Button pressed without handler!');
        }}>
        <ButtonInner props={this.props} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    marginTop: 4,
    marginLeft: 2,
    color: '#ffffff',
    opacity: 0.8,
  },
});

export default SettingButton;
