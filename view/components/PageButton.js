/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import ES from '../styles/essentialsStyle';
import {log} from '../../lib/logger';

function ButtonInner({props}) {
  return (
    <View style={styles.viewContainer}>
      <Image style={styles.innerImage} source={{uri: props.img}} />
      <Text style={[ES.text, styles.innerTextContent]}>{props.title}</Text>
    </View>
  );
}

class PageButton extends Component {
  constructor(props) {
    super(props);
    if (!props.title || !props.img) {
      throw new Error(
        "Missing property 'title' or 'img' in PageButton component!",
      );
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
            : log('Page Button pressed without handler!');
        }}>
        <ButtonInner props={this.props} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
  },
  innerTextContent: {
    marginTop: 26,
    marginLeft: 20,
    fontSize: 32,
  },
  innerImage: {
    marginLeft: 8,
    marginTop: 30,
    height: 36,
    width: 36,
    resizeMode: 'stretch',
  },
});

export default PageButton;
