import {combineReducers} from 'redux';
import getDateString from '../getDateString';
import {ADD_WATER, SET_GOAL, SET_WATER, SET_CURRENT_DATE} from './action';

function water(state = 0, action) {
  switch (action.type) {
    case ADD_WATER:
      return (state || 0) + action.v;

    case SET_WATER:
      return action.v;

    default:
      return state;
  }
}

function goal(state = 500, action) {
  switch (action.type) {
    case SET_GOAL:
      return action.v;

    default:
      return state;
  }
}

function lastDate(state = '0', action) {
  switch (action.type) {
    case SET_CURRENT_DATE:
      return getDateString();
    default:
      return state;
  }
}

const wearDrinkApp = combineReducers({
  water,
  goal,
  lastDate,
});

export default wearDrinkApp;
