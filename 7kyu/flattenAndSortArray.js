"use strict";

function flattenAndSort(array) {
    array = array.reduce((result, current) => result.concat(current));
    return array.sort((a,z) => a - z);
}