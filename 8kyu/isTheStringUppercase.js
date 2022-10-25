//Original solution, too difficult

String.prototype.isUpperCase = function() {
    for (i = 0; i < this.length; i++) {
        console.log(this[i] + '   -    ' + this[i].charCodeAt())
        if (this[i].charCodeAt() >= 97 && this[i].charCodeAt() <= 122) return false
    }   
    return true;
}

//Second attempt. typeof this is always object, so this needs == instead of ===

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase(); 
}