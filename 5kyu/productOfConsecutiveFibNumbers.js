//Original solution

function productFib(prod){
    const cache = [0, 1];
    while (cache[0] * cache[1] < prod) {
        cache.push(cache[0] + cache[1]);
        cache.shift();
    }
    return [cache[0], cache[1], cache[0] * cache[1] === prod];
}