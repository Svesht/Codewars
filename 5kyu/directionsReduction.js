//Original solution

function dirReduc(arr) {
    const opposite = { NORTH: "SOUTH", SOUTH: "NORTH", EAST: "WEST", WEST: "EAST" };
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === opposite[arr[i + 1]]) {
            arr.splice(i, 2);
            i = -1; //Rewind to check the newly adjacent directions
        }
    }
    return arr;
}

//Clever reduce version

function dirReduc(arr) {
    const opposite = { NORTH: "SOUTH", SOUTH: "NORTH", EAST: "WEST", WEST: "EAST" };
    return arr.reduce((dirs, dir) => {
        if (dirs[dirs.length - 1] === opposite[dir]) {
            dirs.pop()
        } else {
            dirs.push(dir);
        }
        return dirs;
    }, [])
}

