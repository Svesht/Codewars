//Original solution

// const areaOrPerimeter = (l , w) => l === w ? l * w : 2 * l + 2 * w;

//Refactored solution

const areaOrPerimeter = (l , w) => l === w ? l * w : 2 * (l +w);