eries = function(n) {
    if (n < 0) {
        console.log(undefined);
    }
    if (n === 1 || n === 2) {
        console.log(n);
    }

    console.log("1");
    console.log("1");
    console.log("2");
    for (var i = 3; i < n; i += 1) {
        console.log((i - 1) + (i - 2) + " ");
    }
};

getFibSeries(5);

var getFib = function(n) {
    return n < 2 ? n : getFib(n - 1) + getFib(n - 2);
};

var fibSeries = function(n) {
    if (n < 0) {
        console.log(n);
    }

    else {
        for (var i = 0; i <= n; i += 1) {
            console.log(i + ": " +getFib(i));
        }
    }
};

fibSeries(10);


var n = 10;
var optFab = function() {
    var memo= [0,1];
    var fib = function(n) {
        var result = memo[n];
        if (typeof(n) !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();


var memorizer = function(memo, base) {
    var shell = function(n) {
        if (typeof memo[n] !== 'number') {
            memo[n] = base(shell, n);
        }
        return memo[n];
    };
    return shell;
};

var fibonacci = memorizer([0, 1], function(shell, n) {
    return shell(n - 1) + shell(n - 2);
});

console.log(fibonacci (7));

for (var i = 0; i <= 10; i+=1) {
    console.log(fibonacci (i));
}
