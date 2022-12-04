var Ball = function(ballType) {
    if (ballType) {
        this.ballType = ballType;
    } else {
        this.ballType = 'regular';
    }
};

//Refactored

var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
};