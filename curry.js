var inviteToParty = function (a, b, c){
    console.log("Hi " + a, ", please come to the party at Room " + b + '. \nSincerely, \n' + c);
}

//inviteToParty('John', 3, 'Hank');


var inviteToParty2 = function (a){
    console.log(a);
    return function (b) {
        console.log(b);
        return function (c) {
            console.log("Hi " + a, ", please come to the party at Room " + b + '. \nSincerely, \n' + c);
        }
    }
}

//inviteToParty2('John');

var _ = {};

function curry (fn, length, args, holes) {
    length = length || fn.length;
    args = args || [];
    holes = holes || [];
    return function(){
        var _args = args.slice(0),
            _holes = holes.slice(0),
            argStart = _args.length,
            holeStart = _holes.length,
            arg, i;
        for(i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            if(arg === _ && holeStart) {
                holeStart--;
                _holes.push(_holes.shift()); // move hole from beginning to end
            } else if (arg === _) {
                _holes.push(argStart + i); // the position of the hole.
            } else if (holeStart) {
                holeStart--;
                _args.splice(_holes.shift(), 0, arg); // insert arg at index of hole
            } else {
                _args.push(arg);
            }
        }
        if(_args.length < length) {
            return curry.call(this, fn, length, _args, _holes);
        } else {
            return fn.apply(this, _args);
        }
    }
}

var f = curry(function(a, b, c) { return [a, b, c]; });
var g = curry(function(a, b, c, d, e) { return [a, b, c, d, e]; });

// all of these are equivalent
console.log(f("a","b","c"));
console.log(f("a")("b")("c"));
console.log(f("a", "b", "c"));
console.log(f("a", _, "c")("b"));
console.log(f( _, "b")("a", "c"));
//=> ["a", "b", "c"]

// all of these are equivalent
console.log(g(1, 2, 3, 4, 5));
console.log(g(_, 2, 3, 4, 5)(1));
console.log(g(1, _, 3)(_, 4)(2)(5));
