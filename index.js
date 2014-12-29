'use strict';

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
var aValue = 'a'.charCodeAt(0);


function getAnagramValue(str) {
    var val = 1;

    str = str.replace(/\s/g, "").toLowerCase();
    var ln = str.length;
    while(ln--) {
        val *= primeNumbers[ str.charCodeAt(ln) - aValue ];
    }
    return val;
}

function anagramChecker() {
    var args = Array.prototype.slice.call(arguments);

    if(args.length > 1) {
        var firstValue = getAnagramValue(args.shift());

        return args.every(function(str) {
            return firstValue == getAnagramValue(str);
        });
    }

    return false;
}

module.exports = anagramChecker;