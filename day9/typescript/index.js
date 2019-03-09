var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        propertyDecorator()
    ], Greeter.prototype, "greeting", void 0);
    return Greeter;
}());
function propertyDecorator() {
    return function (target, key) {
        console.log('Hello');
    };
}
var a = new Greeter('CDE');
console.log(a.greet());
var Greeter1 = /** @class */ (function () {
    function Greeter1(message) {
        this.greeting = message;
    }
    Greeter1.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter1 = __decorate([
        sealed
    ], Greeter1);
    return Greeter1;
}());
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var n = new Greeter1('Hi');
console.log("sealed con", n.greet());
var n1 = new Greeter1('Hello');
console.log("sealed con", n1.greet());
