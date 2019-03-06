class MyVehicle {
	public name:string;
	constructor(name) {
		this.name = name;	
	}
	
	cal(a: Number, b: Number) {
		let c = a + b;
		console.log('Total = ', c);	
	}
}
var obj1 = new MyVehicle('BMW');
obj1.cal(1, 2);

class Calculator {	
	cal(a: number, b: number, c?:number) {
		let d = a + b + c;
		console.log('Total = ', d);	
	}
}
var obj2 = new Calculator();
obj2.cal(1, 2, 3); // Total = 6
obj2.cal(1, 2);// Total = Nan but no error

class MyCalculator {	
	cal(a: number, b: number, ...c:number[]):number {
		let d = a + b + c[0];
		console.log('Total with rest parameters = ', d);
		return 0;	
	}

	calGeneric<U>(a: T, b: T, ...c:T[]):T {
		let d = a + b + c[0];
		console.log('Total with Generic parameters = ', d);
		return ;	
	}
} 
var obj3 = new MyCalculator();
obj3.cal(1, 2, 3); // Total = 6
obj3.cal(1, 2);// Total = Nan but no error

obj3.calGeneric(1, 2, 3); // Total = 6

// Generic Class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(1, 2));
console.log(myGenericNumber.add(myGenericNumber.zeroValue, "test"));

// Generic Interfaces
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;