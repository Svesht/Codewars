class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

//original solution

class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort((a, b) => a - b);
        return args[0];
    }
}