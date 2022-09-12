//First solution

var min = function (list) {
    list.sort((a, z) => a - z)
    return list[0];
}

var max = function (list) {
    list.sort((a, z) => z - a)
    return list[0];
}

//Second solution

const min = (array) => Math.min(...array);
const max = (array) => Math.max(...array);