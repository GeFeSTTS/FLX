<<<<<<< HEAD
function getMin () {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < arguments[0]) {
            arguments[0] = arguments[i];
        }
    }
    return arguments[0];
}

=======
function getMin () {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < arguments[0]) {
            arguments[0] = arguments[i];
        }
    }
    return arguments[0];
}

>>>>>>> 44006f429462026720efa7c0f1f8f0cda016d413
getMin(3, 0, -3);