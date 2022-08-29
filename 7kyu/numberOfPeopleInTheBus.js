//First solution before I try destructuring

var number = function (busStops) {
    return busStops.reduce((peopleInBus, [on, off]) => peopleInBus + on - off, 0)
}

//First solution before I try destructuring

var number = function (busStops) {
    return busStops.reduce((peopleInBus, onAndOff) => peopleInBus + onAndOff[0] - onAndOff[1], 0)
}