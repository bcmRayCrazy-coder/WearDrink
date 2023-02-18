import {combineReducers} from 'redux';
import {ADD_WATER, SET_GOAL} from './action';

function water(state = 0, action) {
  switch (action.type) {
    case ADD_WATER:
      return (state || 0) + action.v;

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

const wearDrinkApp = combineReducers({
  water,
  goal,
});

export default wearDrinkApp;
