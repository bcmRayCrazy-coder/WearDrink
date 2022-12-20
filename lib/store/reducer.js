import {combineReducers} from 'redux';
import {ADD_WATER, SET_GOAL} from './action';

function water(state = [], action) {
  switch (action.type) {
    case ADD_WATER:
      return [
        ...state,
        {
          type: action.v.type,
          value: action.v.value,
          time: new Date().valueOf(),
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
