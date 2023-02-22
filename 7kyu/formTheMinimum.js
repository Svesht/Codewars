function minValue(values) {
    values = [...new Set(values)];  //remove duplicates
    values.sort((a, z) => a - z);   //sort ascending
    values = values.join('');       //join into string
    return Number(values);          //return as a number
}

// Parameters: array of numbers

// Return: ascending order sorted number without duplicates

// Example: [1,3,1,1] => 13

// Pseudocode
// 1) remove duplicates
// 2) sort in ascending order
// 3) convert to string and join
// 4) return as a number



//Alternative shorter version

function minValue(values) {
    values = [...new Set(values)];      //remove duplicates
    values = values.sort().join('');    //sort and join into string
    return Number(values);               //return as a number
}