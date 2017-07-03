describe("test the calculator", function () {

    it("should test the add function calculator", function () {
        //expect(calculator.add(10, 20)).toEqual(302); // test cause to fail
        expect(calculator.add(10, 20)).toEqual(30);
    });

    it("should test the substruct function calculator", function () {
        expect(calculator.substruct(100, 20)).toEqual(80);
        
    });

});

//console.log(22);


//beforeEach(function () {
//    task = new app.Task("do something!");
//});

//var a = 1;
//var b = 5;
//var result = calculator.add(a, b);
//console.log(result);

