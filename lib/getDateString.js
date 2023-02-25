export default function () {
  var date = new Date();
  return (
    date.getFullYear().toString() +
    (date.getMonth() * 10).toString() +
    (date.getDate() * 10).toString()
  );
}
