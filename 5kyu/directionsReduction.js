//Original solution

function dirReduc(arr) {
    const opposite = { NORTH: "SOUTH", SOUTH: "NORTH", EAST: "WEST", WEST: "EAST" };
    return arr.reduce((dirs, dir) => {
        if (dirs[dirs.length - 1] === opposite[dir]) { //if previous
            return dirs.pop()
        } else {
            return dirs.push(dir);
        }
    }, [])
}