"use strict";

/*exported exercise1, exercise2, exercise3, exercise4,arrayContains,arrayContainsTwo,arrayContainsNTimes*/

function isArray(obj) {
    return obj.constructor === Array;
}

function checkArr(obj) {
    if (!isArray(obj)) {
        throw new Error("Argument must be an array");
    }
}

/**
 * return the average for the array
 */
function exercise1(arr) {
    checkArr(arr);
    if (arr.length === 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

/**
 * return the biggest number in the array
 */
function exercise2(arr) {
    checkArr(arr);
    if (arr.length === 0) {
        return -Infinity;
    }
    var biggest = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

/**
 * return true if there is any even number in the array
 */
function exercise3(arr) {
    checkArr(arr);
    if (arr.length === 0) {
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return true;
        }
    }
    return false;
}

/**
 * return true if every element is even in the array
 */
function exercise4(arr) {
    checkArr(arr);
    if (arr.length === 0) {
        return true;
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

/**
 * return whether array contains target
 * @param array
 * @param target
 */
function arrayContains(array, target) {
    var results = _.find(array, function (ele) {
        return ele === target;
    });
    if (results && results.length > 0) {
        return true;
    }
    return false;
}


/**
 * return whether array contains target at least twice
 * @param array
 * @param target
 */
function arrayContainsTwo(array, target) {
    var results = _.filter(array, function (ele) {
        return ele === target;
    });
    if (results && isArray(results) && results.length >= 2) {
        return true;
    }
    return false;
}

/**
 * return whether array contains target at least n times
 * @param array
 * @param target
 * @param n
 */
function arrayContainsNTimes(array, target, n) {
    var results = _.filter(array, function (ele) {
        return ele === target;
    });
    if (results && isArray(results) && results.length >= n) {
        return true;
    }
    return false;
}
