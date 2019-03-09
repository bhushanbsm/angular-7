
class Greeter {

	@propertyDecorator() greeting: string;

	constructor(message: string) {
		this.greeting = message;
	}

	greet() {
		return `Hello, ${this.greeting}`;
	}
}

function propertyDecorator() {
	return function (target, key) {
		console.log('Hello');
	}
}

var a = new Greeter('CDE');
console.log(a.greet());

@sealed
class Greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

var n = new Greeter1('Hi');
console.log("sealed con", n.greet());
var n1 = new Greeter1('Hello');
console.log("sealed con", n1.greet());
