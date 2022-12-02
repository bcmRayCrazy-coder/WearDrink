/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import ES from '../styles/essentialsStyle';

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
        style={styles.container}
        onPress={() => {
          console.log('Pressed');
        }}>
        <ButtonInner props={this.props} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a2b2c',
    borderRadius: 10,
    height: 50,
    marginBottom: 5,
  },
  viewContainer: {
    flexDirection: 'row',
  },
  innerTextContent: {
    marginTop: 13,
    marginLeft: 10,
    fontSize: 16,
  },
  innerImage: {
    marginLeft: 4,
    marginTop: 13,
    height: 18,
    width: 18,
  },
});

export default PageButton;
