export default function (e) {
  return {
    water: e.state.water || 0,
    goal: e.state.goal || 500,
  };
}
