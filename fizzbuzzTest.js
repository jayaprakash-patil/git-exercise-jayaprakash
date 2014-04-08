var fizzbuzz = require('fizzbuzz');
var assert = require('assert');


var statement = fizzbuzzWithMocha().statement;

describe("FizzBuzz test", function () {


    it("number is divisible by 3 and 5", function () {
        for (var i=0; i<divisiblebythreeandfive.length; i++){
            assert.equal("FizzBuzz");


        }
    })


    it("number is divisible by three", function () {
        for (var i=0; i<divisibleByThree.length; i++){
            assert.equal("Fizz");


        }
    })


    it("its divisible by 5", function(){
        for(var i=0; i<divisibleByFive.length; i++){
            assert.equal("Buzz");


        }
    })

})
function fizzbuzzWithMocha(){


    var divisiblebythreeandfive = [], divisibleByThree = [], divisibleByFive = [],
        statement = [];


    for (var i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            divisiblebythreeandfive.push(i);
            statement.push("FizzBuzz");
        } else if (i % 3 == 0) {
            divisibleByThree.push(i);
            statement.push("Fizz");
        } else if (i % 5 == 0) {
            divisibleByFive.push(i);
            statement.push("Buzz");
        }
    }
    return statement;
}
