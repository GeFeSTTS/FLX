function reverseNumber (a) {
    return parseInt(a.toString().split('').reverse().join('')) * Math.sign(a);
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);