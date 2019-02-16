<<<<<<< HEAD
function findTypes(...value) {
    let arr = [];
    for (let i = 0; i < value.length; i++){
        arr.push (typeof value[i]);
    }
    return arr;
}

findTypes(null, 5, "hello");

function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1,2,3], function(el) {
    console.log(el);
});

function mapArray(arr, func) {
    let newArr = [];
    executeforEach(arr, value => newArr.push(func(value)));
    return newArr;
}

mapArray([2, 5, 8], function(el) {
    return el + 3;
});

function filterArray(arr, func) {
    let newArr = [];
    executeforEach(arr, value => {
        if (func(value)) {
            newArr.push(value);
        }
    });
    return newArr;
}

filterArray([2, 5, 8], function(el) {
    return el > 3;
});

function getAmountOfAdultPeople(data) {
    return filterArray(data, person => person.age > 18).length;
}

getAmountOfAdultPeople();

function getGreenAdultBananaLovers(data) {
    let filteredP = filterArray(data, person => 
        person.age > 18 && person.favoriteFruit === `banana` && person.eyeColor === `green`);
    return mapArray(filteredP, personName => personName.name);
}

getGreenAdultBananaLovers();

function keys(obj) {
    let newArr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newArr.push(key);
        }
    }
    return newArr;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(obj) {
    let newArr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newArr.push(obj[key]);
        }
    }
    return newArr;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date) {
    let monthNames = [`Jan`, `Feb`, `Mar`,
                      `Apr`, `May`, `Jun`, 
                      `Jul`, `Aug`, `Sep`, 
                      `Oct`, `Nov`, `Dec` ];
    return `Date: ${date.getDate()} of ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
    var year = date.getFullYear();
    return year % 2 === 0;   
}

isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
    var month = date.getMonth() + 1;
    return month % 2 === 0;
}

isEvenMonth(new Date('2019-02-27T01:10:00'));



=======
function findTypes(...value) {
    let arr = [];
    for (let i = 0; i < value.length; i++){
        arr.push (typeof value[i]);
    }
    return arr;
}

findTypes(null, 5, "hello");

function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1,2,3], function(el) {
    console.log(el);
});

function mapArray(arr, func) {
    let newArr = [];
    executeforEach(arr, value => newArr.push(func(value)));
    return newArr;
}

mapArray([2, 5, 8], function(el) {
    return el + 3;
});

function filterArray(arr, func) {
    let newArr = [];
    executeforEach(arr, value => {
        if (func(value)) {
            newArr.push(value);
        }
    });
    return newArr;
}

filterArray([2, 5, 8], function(el) {
    return el > 3;
});

function getAmountOfAdultPeople(data) {
    return filterArray(data, person => person.age > 18).length;
}

getAmountOfAdultPeople();

function getGreenAdultBananaLovers(data) {
    let filteredP = filterArray(data, person => 
        person.age > 18 && person.favoriteFruit === `banana` && person.eyeColor === `green`);
    return mapArray(filteredP, personName => personName.name);
}

getGreenAdultBananaLovers();

function keys(obj) {
    let newArr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newArr.push(key);
        }
    }
    return newArr;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(obj) {
    let newArr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newArr.push(obj[key]);
        }
    }
    return newArr;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date) {
    let monthNames = [`Jan`, `Feb`, `Mar`,
                      `Apr`, `May`, `Jun`, 
                      `Jul`, `Aug`, `Sep`, 
                      `Oct`, `Nov`, `Dec` ];
    return `Date: ${date.getDate()} of ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
    var year = date.getFullYear();
    return year % 2 === 0;   
}

isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
    var month = date.getMonth() + 1;
    return month % 2 === 0;
}

isEvenMonth(new Date('2019-02-27T01:10:00'));



>>>>>>> 44006f429462026720efa7c0f1f8f0cda016d413
