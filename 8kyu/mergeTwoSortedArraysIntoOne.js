function mergeArrays(arr1, arr2) {
    const combined = arr1.concat(arr2);
    combined.sort((a, z) => a - z);
    return [...new Set(combined)];
}