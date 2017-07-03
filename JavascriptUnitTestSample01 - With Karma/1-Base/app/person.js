var Person = function () { };

Person.prototype.helloSomeone = function (toGreet) {
    return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function () {
    return "Hello";
};

Person.prototype.anotherFunction = function () {
    return "This function should not be called";
};