//Original solution

function greet (name, owner) {
    const title = name === owner ? 'boss' : 'guest';
    return `Hello ${title}`;
}

//Longform

function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss';
    }
    return 'Hello guest'
}

//Less dry but maybe more readable

function greet (name, owner) {
  return name === owner ? 'Hello boss' :  'Hello guest';
}

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';