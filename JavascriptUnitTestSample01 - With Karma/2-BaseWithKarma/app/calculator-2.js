var app;
var calculator = (function (app) {


    //function Calculator() {
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
    //}

    ////return {
    ////    calculator: new Calculator()
    ////}

    //app.Calculator = function () {
    //    return new Calculator();
    //};


    //calculator.prototype.add = function (a, b) {
    //    console.log("a, b : " + a + ", " + b + ". sum : " + (a + b));
    //    return a + b;
    //};

    //app.Calculator.prototype.substruct = function (a, b) {
    //    console.log("a, b : " + a + ", " + b + ". substruct : " + (a - b));
    //    return a - b;
    //};

}(app = app || {}));


//var calculator = new app();
var a = 1;
var b = 5;
var result = calculator.add(a, b);
console.log(result);


//app.Agent = function (codeName, description) {
//    this.codeName = codeName ? codeName : '';
//    this.description = description ? description : '';
//    this.binoculars = new app.Binoculars();
//    this.tasks = [];
//}

//app.Agent.prototype.addTask = function (task) {
//    this.tasks.push(task);
//}

//app.Agent.prototype.isValid = function () {
//    return this.codeName.length > 0;
//}

//app.Agent.prototype.spy = function () {
//    this.binoculars.spy();
//}

//app.Binoculars = function () {
//}

//app.Binoculars.prototype.spy = function () {
//    // use binoculars to spy
//}

//app.Task = function (description) {
//    this.description = description ? description : '';
//    this.isComplete = false;
//}

//app.Task.prototype.toggleComplete = function () {
//    this.isComplete = !this.isComplete;
//}

