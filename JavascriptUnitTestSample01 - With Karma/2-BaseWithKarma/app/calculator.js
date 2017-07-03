var app;
var calculator = (function (app) {
    
    var calculator = {};

    calculator.add = function (a, b) {
        console.log("a, b : " + a + ", " + b + ". sum : " + (a + b));
        return a + b;
    };

    calculator.substruct = function (a, b) {
        console.log("a, b : " + a + ", " + b + ". substruct : " + (a - b));
        return a - b;
    };

    return calculator;
   

}(app = app || {}));

var a = 1;
var b = 5;
var result = calculator.add(a, b);

console.log(result);
