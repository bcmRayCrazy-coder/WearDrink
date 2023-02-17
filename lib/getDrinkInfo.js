export default function (e) {
  return {
    water: (e.state.water[0] || {value: 0}).value,
    goal: (e.state.goal[0] || {goal: 500}).goal,
  };
}
