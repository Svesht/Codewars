function findOdd(A) {
    A.sort((a, b) => a - b);
    let counter = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === A[i + 1]) {
            counter++;
        } else if (counter % 2 === 0) {
            return A[i];
        }
        counter = 0;
    }
}

function findOdd2(A) {
    const sorted = A.sort((a, b) => a - b);
    let counter = 0;
    for (let i = 0; i < A.length; i++) {
        counter++;
        if (A[i] !== A[i + 1]) {
            if (counter % 2 === 1) {
                return A[i];
            }
            counter = 0;
        }
    }
}

function findOdd3(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    arr.sort((a, z) => a - z);
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] !== arr[i + 1]) {
            if (count % 2 === 1) {
                return arr[i];
            }
            count = 0;
        }
    }
}
