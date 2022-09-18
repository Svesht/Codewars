//Original solution

function getAverage(marks) {
  const sum = marks.reduce((sum, num) => sum + num);
  return Math.floor(sum / marks.length);
}
