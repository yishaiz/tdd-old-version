
describe("check bonus of new player", function () {
    it("registered player get bonus", function () {
        expect(true).toBe(true);
    });
});



describe("A suite is just a function", function () {
    var a;

    it("and so is a spec", function () {
        a = true;

        expect(a).toBe(true);
    });
});

describe("The 'toBe' matcher compares with ===", function () {

    it("and has a positive case", function () {
        expect(true).toBe(true);
    });

    it("and can have a negative case", function () {
        expect(false).not.toBe(true);
    });
});



describe("Included matchers:", function () {

    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;

        //a = [1, 2];
        //b = [1, 2];

        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });
    

    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = 12;

        //a = [1, 2];
        //b = [1, 2];

        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });
    

    it("The 'toBe' matcher compares with ===", function () {
        var a = [1, 2];
        var b = a;

        //a = [1, 2];
        //b = [1, 2];

        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });


    //this will faile
    /!*
    it("The 'toBe' matcher compares with ===", function () {
        var a = [1, 2];
        var b = [1, 2];

        //a = [1, 2];
        //b = [1, 2];

        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });

});


describe("The 'toEqual' matcher", function () {

    it("works for simple literals and variables", function () {
        var a = 12;
        expect(a).toEqual(12);
    });

    it("should work for objects", function () {
        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };
        expect(foo).toEqual(bar);
    });




    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });



    it("The 'toBeDefined' matcher compares against 'undefined'", function () {
        var a = {
            foo: "foo"
        };

        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });



    it("The 'toBeUndefined' matcher compares against 'undefined'", function () {
        var a = {
            foo: "foo"
        };

        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
    });


    it("The 'toBeNull' matcher compares against null", function () {
        var a = null;
        var foo = "foo";

        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", function () {
        var a, foo = "foo";

        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function () {
        var a, foo = "foo";

        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });


    







    it("The 'toContain' matcher is for finding an item in an Array", function () {
        var a = ["foo", "bar", "baz"];

        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926,
          e = 2.78;

        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926,
          e = 2.78;

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", function () {
        var pi = 3.1415926,
          e = 2.78;

        expect(pi).not.toBeCloseTo(e, 2);
        expect(pi).toBeCloseTo(e, 0);
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", function () {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function () {

            throw new ("an exception");

            return a + 1;
        };

        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });




});









describe("A spec", function () {
    it("is just a function, so it can contain any code", function () {
        var foo = 0;
        foo += 1;

        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        var foo = 0;
        foo += 1;

        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});



describe("A spec (with setup and tear-down)", function () {
    var foo;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    afterEach(function () {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});

 




/!*

//without this - it fails

describe("A spec", function () {
    var foo, bar;
    beforeEach(function () {
        foo = 0;
    });

    it("can use the 'this' to share state", function () {
        expect(foo).toEqual(0);
        bar = "test pollution?";
    });

    it("prevents test pollution by having an empty 'this' created for the next spec", function () {
        expect(foo).toEqual(0);
        expect(bar).toBe(undefined);
    });
});
*!/


describe("A spec", function () {
    
    beforeEach(function () {
        this.foo = 0;
    });

    it("can use the 'this' to share state", function () {
        expect(this.foo).toEqual(0);
        this.bar = "test pollution?";
    });

    it("prevents test pollution by having an empty 'this' created for the next spec", function () {
        expect(this.foo).toEqual(0);
        expect(this.bar).toBe(undefined);
    });
});


describe("A spec - test 2", function () {
    this.bar = 1;
    beforeEach(function () {
        this.foo = 0;
        //this.bar = 1;
        
    });

    it("can use the 'this' to share state", function () {
        expect(this.foo).toEqual(0);
        this.bar = "test pollution?";
    });

    it("prevents test pollution by having an empty 'this' created for the next spec", function () {
        expect(this.foo).toEqual(0);
        expect(this.bar).toBe(undefined);
    });
});




//nested

describe("A spec", function () {
    var foo;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    afterEach(function () {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });

    describe("nested inside a second describe", function () {
        var bar;

        beforeEach(function () {
            bar = 1;
        });

        it("can reference both scopes as needed", function () {
            expect(foo).toEqual(bar);
        });
    });
});

describe("A spec xxxx", function () {
    var foo;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });
});



//pending
describe("Pending specs", function() {

    xit("can be declared 'xit'", function() {
        expect(true).toBe(false);
    });

    it("can be declared with 'it' but without a function");

    it("can be declared by calling 'pending' in the spec body", function () {
        expect(true).toBe(false);
        pending();
    });
});



//spies:


describe("A spy", function () {
    var foo, bar = null;

    beforeEach(function () {
        foo = {
            setBar: function (value) {
                //console.log("set bar had been called");
                //alert("set bar had been called");
                bar = value;
            }
        };

        spyOn(foo, 'setBar');
        
        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function () {
        console.log(1111);
        expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function () {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function () {
        expect(bar).toBeNull();
    });
});



describe("A spy, when configured to call through", function () {
    var foo, bar, fetchedBar;

    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.callThrough();

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(123);
    });
});



//my test spy

describe("Person", function () {
    it("calls the sayHello() function, but not the anotherFunction() function", function () {
        
        var fakePerson = new Person();
        
        spyOn(fakePerson, "sayHello");
        spyOn(fakePerson, "anotherFunction");
        
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
        expect(fakePerson.anotherFunction).not.toHaveBeenCalled();
    });
});


describe("Person with params", function () {
    it("greets the world", function () {

        var fakePerson = new Person();
        
        spyOn(fakePerson, "helloSomeone");
        
        fakePerson.helloSomeone("world");
        
        expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
    });
});

describe("Person", function () {
    it("says hello", function () {

        var fakePerson = new Person();
        
        fakePerson.sayHello = jasmine.createSpy("Say-hello spy");
        
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });
});



describe("Person with fake value", function () {
    it("says hello", function () {

        var fakePerson = new Person();

        fakePerson.sayHello = jasmine.createSpy('"Say hello" spy').and.returnValue("ello ello");

        fakePerson.sayHello("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
        //expect(fakePerson.sayHello).toEqual('ello ello');
    });
});







describe("A spy, when configured to fake a return value", function () {
    var foo, bar, fetchedBar;

    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.returnValue(745);

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(745);
    });
});



describe("A spy, when configured with an alternate implementation", function () {
    var foo, bar, fetchedBar;

    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.callFake(function () {
            return 1001;
        });

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(1001);
    });
});*/
