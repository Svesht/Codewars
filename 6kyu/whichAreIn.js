//Original solution with double loop. Difficult to read.

function inArray(array1,array2){
    const resultArr = [];
    for (const str1 of array1) {
        for (const str2 of array2) {
            console.log(str1 + ' - ' + str2);
            console.log(str2.includes(str1));
            if (str2.includes(str1)) {
                resultArr.push(str1);
                break;
            }
        }
    }
    return resultArr.sort();
}

//Refactored using filter, find and match methods

function inArray(array1,array2){
    return array1
        .filter(a1 => array2.find(a2 => a2.match(a1)))
        .sort();
}