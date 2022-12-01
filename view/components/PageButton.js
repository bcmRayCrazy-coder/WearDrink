import {Component} from 'react';
import {Button, StyleSheet} from 'react-native';

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
      // eslint-disable-next-line react/react-in-jsx-scope
      <Button
        color={styles.container.backgroundColor}
        title={this.props.title}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a2b2c',
  },
});

export default PageButton;
