//First try

function hero(bullets, dragons) {
    return dragons * 2 <= bullets;
}

//One-liner

const hero = (bullets, dragons) => dragons * 2 <= bullets;