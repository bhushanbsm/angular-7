var MyVehicle = /** @class */ (function () {
    function MyVehicle(name) {
        this.name = name;
    }
    MyVehicle.prototype.cal = function (a, b) {
        var c = a + b;
        console.log('Total = ', c);
    };
    return MyVehicle;
}());
var obj1 = new MyVehicle('BMW');
obj1.cal(1, 2);
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.cal = function (a, b, c) {
        var d = a + b + c;
        console.log('Total = ', d);
    };
    return Calculator;
}());
var obj2 = new Calculator();
obj2.cal(1, 2, 3); // Total = 6
obj2.cal(1, 2); // Total = Nan but no error
var MyCalculator = /** @class */ (function () {
    function MyCalculator() {
    }
    MyCalculator.prototype.cal = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        var d = c.reduce(function (x, y) { return x + y; }, 0) + a + b;
        console.log('Total with rest parameters = ', d);
        // console.log('addition of array elements = ',[1, 2, 3].reduce( (x,y) => x + y));
        return 0;
    };
    MyCalculator.prototype.calGeneric = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        // Operator '+' cannot be applied to types 'T' and 'T'
        // can not apply arithemetic operators on generic types
        // let d = a + b + c[0];
        // let d = a * b * c[0];
        var d = c.reduce(function (x, y) { return x; });
        // let d = c[0];
        console.log('Total with Generic parameters = ', d);
        return d;
    };
    return MyCalculator;
}());
var obj3 = new MyCalculator();
obj3.cal(1, 2, 3, 4); // Total = 6
obj3.cal(1, 2); // Total = Nan but no error
obj3.calGeneric(1, 2, 3); // Total = 6
// Generic Class
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(1, 2));
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 1));
function identity(arg) {
    return arg;
}
var myIdentity = identity;
console.log("interface function called =", myIdentity(1));
console.log("typeof identity =", typeof identity);
console.log("typeof myIdentity =", typeof myIdentity);
function sum(c) {
    return a + b;
}
var d = sum(1);
console.log(d);
