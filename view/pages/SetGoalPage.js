import React from 'react';
import {ScrollView, Text, ToastAndroid, View} from 'react-native';
import {connect} from 'react-redux';
import EssentialStyles from '../styles/essentialsStyle';
import BasicButton from '../components/BasicButton.js';
import {setGoal} from '../../lib/store/action';

function SetGoalPage({dispatch, navigation}) {
  function SetGoalButton({goal = 0}) {
    return (
      <BasicButton
        text={goal + ' ml'}
        onPress={() => {
          dispatch(setGoal(goal));
          ToastAndroid.show('设置成功!', ToastAndroid.SHORT);
          navigation.goBack();
        }}
      />
    );
  }
  return (
    <View style={EssentialStyles.background}>
      <Text style={EssentialStyles.title}>设置目标</Text>
      <ScrollView>
        <SetGoalButton goal={250} />
        <SetGoalButton goal={500} />
        <SetGoalButton goal={750} />
        <SetGoalButton goal={1000} />
        <SetGoalButton goal={1250} />
        <SetGoalButton goal={1500} />
        <SetGoalButton goal={1750} />
        <SetGoalButton goal={2000} />
      </ScrollView>
    </View>
  );
}

export default connect(state => ({goal: state.goal}))(SetGoalPage);
