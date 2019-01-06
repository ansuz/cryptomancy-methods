var Methods = module.exports;

Methods.shuffle = function (die, B) {
    var i = B.length;
    var temp;
    var rand;

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    while (0 !== i) {
        rand = die(i);
        i--;
        temp = B[i];
        B[i] = B[rand];
        B[rand] = temp;
    }
    return B;
};

// perturb in place
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Sattolo's_algorithm

// given a list of elements
// generate a shuffled copy of the list FIXME this is in place
// where no element occupies its original position in the array
Methods.perturb = function (die, B) {
    var i = B.length;
    var temp;
    var rand;

    while (i-- > 1) {
        rand = die(i);
        temp = B[i];
        B[i] = B[rand];
        B[rand] = temp;
    }
    return B;
};

/*  a die. given a stream of random numbers,
    return a function which takes a number and generates
    integers between 0 and n */
Methods.die = function (src) {
    return function (n) {
        return Math.floor((src() / Number.MAX_SAFE_INTEGER) * n);
    };
};

Methods.floating_point = function (src) {
    return src() / Number.MAX_SAFE_INTEGER;
};

// return true or false with equal likelihood
Methods.coin = function (src) {
    return Methods.die(src)(2) === 1;
};

