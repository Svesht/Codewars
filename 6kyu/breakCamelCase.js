//Original solution

const solution = string => string.split(/(?=[A-Z])/).join(" ");

//Alternate solution

const solution = string => string.replace(/([A-Z])/, " $1");

//Without regex

function solution(string) {
  return string
    .split("")
    .map((el) => (el === el.toUpperCase() ? " " + el : el))
    .join("");
}
