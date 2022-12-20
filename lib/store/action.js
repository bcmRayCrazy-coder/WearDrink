export let ADD_WATER = 'ADD_WATER';
export let SET_GOAL = 'SET_GOAL';

export function addWater(v) {
  return {
    type: ADD_WATER,
    v,
  };
}
export function setGoal(v) {
  return {
    type: SET_GOAL,
    v,
  };
}
