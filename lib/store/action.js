export let ADD_WATER = 'ADD_WATER';
export let SET_WATER = 'SET_WATER';
export let SET_GOAL = 'SET_GOAL';
export let SET_CURRENT_DATE = 'SET_CURRENT_DATE';

export function addWater(v) {
  return {
    type: ADD_WATER,
    v,
  };
}
export function setWater(v) {
  return {
    type: SET_WATER,
    v,
  };
}
export function setGoal(v) {
  return {
    type: SET_GOAL,
    v,
  };
}
export function setCurrentDate() {
  return {
    type: SET_CURRENT_DATE,
  };
}
