import {combineReducers} from 'redux';
import {ADD_WATER, SET_GOAL} from './action';

function water(state = [], action) {
  switch (action.type) {
    case ADD_WATER:
      return [
        {
          value: (state[0].v || 0) + action.v,
        },
      ];

    default:
      return state;
  }
}

function goal(state = [], action) {
  switch (action.type) {
    case SET_GOAL:
      return [
        {
          goal: action.v,
        },
      ];

    default:
      return state;
  }
}

const wearDrinkApp = combineReducers({
  water,
  goal,
});

export default wearDrinkApp;
