function hello(name) {
    if (!name) return "Hello, World!"
    const capName = name.split('')[0].toUpperCase() + name.split('').slice(1).join('').toLowerCase();
    return `Hello, ${capName}!`;
}