//Original solution

function arithmetic(a, b, operator){
    switch(operator) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "divide": return a / b;
        case "multiply": return a * b;
    }
}

//Alternate solution using object

const arithmetic = (a, b, operator) => ({
  'add': a + b,
  'subtract': a - b,
  'divide': a / b,
  'multiply': a * b}[operator]);