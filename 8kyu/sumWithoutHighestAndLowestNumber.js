function sumArray(array) {
    if (Array.isArray(array) && array.length > 1) {
        let highest = array[0];
        let lowest = array[0];
        let sum = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] > highest) {
                highest = array[i];
            } else if (array[i] < lowest) {
                lowest = array[i];
            }
            sum += array[i];
        }
        return sum - (highest + lowest);
    }
    return 0;
}