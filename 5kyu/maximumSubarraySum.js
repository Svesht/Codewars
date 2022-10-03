//Original solution, a bit messy

var maxSequence = function(arr){
    let maxSum = 0;
    if (arr.every(num => num < 0)) return 0;
    for (let first = 0; first < arr.length; first++) {
        for (let second = first + 1 ; second < arr.length + 1; second++) {
            const sum = arr.slice(first, second).reduce((sum, current) => sum + current, 0);
            if (sum > maxSum) maxSum = sum;
        }
    }
    return maxSum;
}

//Better solution

var maxSequence = function(arr){
    let min = 0, maxSum = 0, sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        min = Math.min(min, sum);
        maxSum = Math.max(maxSum, sum - min);
    }
    return maxSum;
}