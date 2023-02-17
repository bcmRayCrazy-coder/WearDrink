/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import bottleSvgMaker from '../../lib/bottleSvgMaker';

class Bottle extends Component {
  onBottlePress() {
    console.log('Bottle pressed');
  }
  render() {
    console.log(this.props, bottleSvgMaker(this.props.water, this.props.goal));
    return (
      <TouchableOpacity onPress={this.onBottlePress}>
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
