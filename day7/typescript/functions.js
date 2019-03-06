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
        var d = a + b + c[0];
        console.log('Total with rest parameters = ', d);
        return 0;
    };
    MyCalculator.prototype.calGeneric = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        var d = a + b + c[0];
        console.log('Total with Generic parameters = ', d);
        return;
    };
    return MyCalculator;
}());
var obj3 = new MyCalculator();
obj3.cal(1, 2, 3); // Total = 6
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
console.log(myGenericNumber.add(myGenericNumber.zeroValue, "test"));
function identity(arg) {
    return arg;
}
var myIdentity = identity;
