class MyVehicle {
	public name:string;
	constructor(name) {
		this.name = name;	
	}
	
	runs() {
		console.log('ruuns');	
	}
}
var obj1 = new MyVehicle('BMW');
obj1.runs();
console.log("hi");


