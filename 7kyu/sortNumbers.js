//Original solution

const solution = nums => nums ? nums.sort((a,z) => a - z) : [];

//Alternate version using the OR operator
// const solution = nums => (nums || []).sort((a,z) => a - z);