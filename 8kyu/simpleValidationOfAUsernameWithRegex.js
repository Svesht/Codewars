function validateUsr(username) {
    if (username.length < 4 || username.length > 16) return false;
    return !/[^a-z0-9_]/.test(username);
}