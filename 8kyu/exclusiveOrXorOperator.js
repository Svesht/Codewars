//Cheap version

const xor = (a, b) => a !== b;

//More proper version

function xor(a, b) {
  return (a || b) && !(a && b);
}