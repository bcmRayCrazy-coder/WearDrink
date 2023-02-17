/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import bottleSvgMaker from '../../lib/bottleSvgMaker';

class Bottle extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onBottlePress}>
        <SvgXml
          xml={bottleSvgMaker(this.props.water, this.props.goal)}
          width="280px"
          height="280px"
        />
      </TouchableOpacity>
    );
  }
}

export default Bottle;
