function pipe(number) {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'function') {
            number = arguments[i](number);
        }
    }
    return number;
}

function addOne(x) {
    return x + 1;
}


pipe(1, addOne);
pipe(1, addOne, addOne);
