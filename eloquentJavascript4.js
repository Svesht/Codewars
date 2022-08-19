function range(start, end, step) {
    const result = [];
    for (i = start; end > start ? i <= end : i >= end; i = i + (step ? step : 1)) {
        result.push(i);
    }
    return result;
}

function sum(arr) {
    return arr.reduce((acc, n) => acc + n);
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// --------------- REVERSE ARRAY

function reverseArray(arr) {
    let result = [];
    for (let element of arr) {
        result.unshift(element);
    }
    return result;
}

let store;
function reverseArrayInPlace(arr) {
    for (i = 0; i < arr.length / 2; i++) {
        store = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = store;
        console.log(arr);
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// --------------- ARRAY TO LIST AND MISC LIST FUNCTIONS

function arrayToList(arr) {
    arr.reverse();
    let list = null;
    for (i = 0; i < arr.length; i++) {
        list = {
            value: arr[i],
            rest: list
        };
    }
    arr.reverse();
    return list;
}

function listToArray(list) {
    const arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(element, list) {
    list = {
        value: element,
        rest: list
    };
    return list;
}

function nth(list, number, i = 0) {
    if (i === number) {
        return list.value;
    }
    return list.rest ? nth(list.rest, number, i + 1) : undefined;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// --------------- DEEP COMPARISON

function deepEqual(v1, v2) {
    if (typeof v1 === "object" && v1 !== null) {
        if (typeof v2 !== "object") {
            return false;
        }

        let keys1 = Object.keys(v1);
        let keys2 = Object.keys(v2);
        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let i = 0; i < keys1.length; i++) {
            return deepEqual(v1[keys1[i]], v2[keys1[i]]);
        }
    }
    return v1 === v2;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true


// ---------------------------------------------------------------------------------------

//Sum Salaries in Object

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
const arr = Object.keys(salaries);

for (let salary of arr) {
    sum += salaries[salary];
}

//alternative of in loop version:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let salary in salaries) {
    sum += salaries[salary];
}

console.log(sum);

// Multiply all numerical values in an object by factor of 2:

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyNumeric(obj) {

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }

}

multiplyNumeric(menu);

alert("menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title);