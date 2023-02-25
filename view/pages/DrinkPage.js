import React from 'react';
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableHighlight,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {addWater} from '../../lib/store/action';
import BasicButton from '../components/BasicButton';
import EssentialStyles from '../styles/essentialsStyle';

function App({dispatch, navigation}) {
  function AddWaterButton({water = 0}) {
    return (
      <BasicButton
        text={water + ' ml'}
        onPress={() => {
          dispatch(addWater(water));
          ToastAndroid.show(`喝了${water}ml水`, ToastAndroid.SHORT);
          navigation.goBack();
        }}
      />
    );
  }
  return (
    <View style={EssentialStyles.background}>
      <Text style={EssentialStyles.title}>喝水</Text>
      <ScrollView>
        <AddWaterButton water={10} />
        <AddWaterButton water={30} />
        <AddWaterButton water={50} />
        <AddWaterButton water={70} />
        <AddWaterButton water={90} />
        <AddWaterButton water={100} />
        <AddWaterButton water={120} />
        <AddWaterButton water={150} />
      </ScrollView>
    </View>
  );
}

export default connect(state => ({water: state.water}))(App);
