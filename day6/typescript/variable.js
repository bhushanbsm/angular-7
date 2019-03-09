var MyVehicle = /** @class */ (function () {
    function MyVehicle(name) {
        this.name = name;
    }
    MyVehicle.prototype.runs = function () {
        console.log('ruuns');
    };
    return MyVehicle;
}());
var obj1 = new MyVehicle('BMW');
obj1.runs();
console.log("hi");
