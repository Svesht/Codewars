//Terrible first solution

function zero(op) {
    if (!op) return 0;
    if (op[0] === '+') {
        return 0 + op[1];
    }
    if (op[0] === '-') {
        return 0 - op[1];
    }
    if (op[0] === '*') {
        return 0;
    }
    if (op[0] === '/') {
        return 0;
    }
}
function one(op) {
    if (!op) return 1;
    if (op[0] === '+') {
        return 1 + op[1];
    }
    if (op[0] === '-') {
        return 1 - op[1];
    }
    if (op[0] === '*') {
        return 1 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(1 / op[1]);
    }
}
function two(op) {
    if (!op) return 2;
    if (op[0] === '+') {
        return 2 + op[1];
    }
    if (op[0] === '-') {
        return 2 - op[1];
    }
    if (op[0] === '*') {
        return 2 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(2 / op[1]);
    }
}
function three(op) {
    if (!op) return 3;
    if (op[0] === '+') {
        return 3 + op[1];
    }
    if (op[0] === '-') {
        return 3 - op[1];
    }
    if (op[0] === '*') {
        return 3 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(3 / op[1]);
    }
}
function four(op) {
    if (!op) return 4;
    if (op[0] === '+') {
        return 4 + op[1];
    }
    if (op[0] === '-') {
        return 4 - op[1];
    }
    if (op[0] === '*') {
        return 4 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(4 / op[1]);
    }
}
function five(op) {
    if (!op) return 5;
    if (op[0] === '+') {
        return 5 + op[1];
    }
    if (op[0] === '-') {
        return 5 - op[1];
    }
    if (op[0] === '*') {
        return 5 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(5 / op[1]);
    }
}
function six(op) {
    if (!op) return 6;
    if (op[0] === '+') {
        return 6 + op[1];
    }
    if (op[0] === '-') {
        return 6 - op[1];
    }
    if (op[0] === '*') {
        return 6 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(6 / op[1]);
    }
}
function seven(op) {
    if (!op) return 7;
    if (op[0] === '+') {
        return 7 + op[1];
    }
    if (op[0] === '-') {
        return 7 - op[1];
    }
    if (op[0] === '*') {
        return 7 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(7 / op[1]);
    }
}
function eight(op) {
    if (!op) return 8;
    if (op[0] === '+') {
        return 8 + op[1];
    }
    if (op[0] === '-') {
        return 8 - op[1];
    }
    if (op[0] === '*') {
        return 8 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(8 / op[1]);
    }
}
function nine(op) {
    if (!op) return 9;
    if (op[0] === '+') {
        return 9 + op[1];
    }
    if (op[0] === '-') {
        return 9 - op[1];
    }
    if (op[0] === '*') {
        return 9 * op[1];
    }
    if (op[0] === '/') {
        return Math.floor(9 / op[1]);
    }
}


function plus(right) {return ['+', right]}
function minus(right) {return ['-', right]}
function times(right) {return ['*', right]}
function dividedBy(right) {return ['/', right]}