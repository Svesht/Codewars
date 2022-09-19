//Original solution

const solution = (string) => string.split(/(?=[A-Z])/).join(" ");

//Without regex

function solution(string) {
  return string
    .split("")
    .map((el) => (el === el.toUpperCase() ? " " + el : el))
    .join("");
}
