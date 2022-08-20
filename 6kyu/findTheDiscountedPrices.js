function findDiscounted(prices) {

    const arr = prices.split(' ');
    const result = [];

    const cache = {};

    for (i = 0; i < arr.length; i++) {
        if (cache[0.75 * arr[i]] > 0) {
            cache[0.75 * arr[i]]--;
        } else {
            cache[arr[i]] ? cache[arr[i]]++ : cache[arr[i]] = 1;
            result.push(arr[i]);
        }
    }

    return result.join(' ');
}