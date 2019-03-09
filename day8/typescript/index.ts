//Generics

interface Person {
	name: string,
	age?: number
}


function pickItems<X extends Person>(obj: X) {

	return obj;
}

let a = pickItems({ name: 'XYZ' });
console.log(a);
console.log("interface extended as generics = ", pickItems({ name: 'XYZ', age: 26 }));
console.log("interface extended as generics with non existing prop = ", pickItems({ name: 'XYZ', myage: 26, h: 3 }));
// Argument of type '{ name1: string; age: number; }' is not assignable to parameter of type 'Person'.
// Object literal may only specify known properties, but 'name1' does not exist in type 'Person'
// console.log("interface extended as generics with non recognised props= ",pickItems({name1:'XYZ',age:26}));


// async and await functions.
async function f() {
	var i;
	 setTimeout(() => {
		console.log("inside timer",i);
		 i = Promise.resolve(0);
		 console.log("inside timer",i);
	}, 60);
    
    let result = await i;
	alert(result);
	
}

f();
console.log("out");

//Map Operators
// can not set string and numbered index for object
// use of map fixes this
var obj = {
	"1": "ABC",
	// 1: 12,
	true: 'ANC'
};

var map = new Map();
map.set("1","ABC");
map.set(1,12);
map.set(true,"ANC");
map.set(obj,"A");
map.set([1,2],4);
console.log(obj);
console.log(map);
console.log("get from map object by obj = ",map.get(obj));
console.log("get from map object = ",map.get(1));
console.log("get from map object = ",map.get("1"));


//Set Operators.
// does not allow duplicate entries
var ab = new Set();
ab.add("A");
ab.add("B");
ab.add("A");
ab.add("A");
ab.add("B");
ab.add(obj);
console.log(ab);
var it = ab.values();
console.log("get values from ab set = ",it.next());
// without use of iterator getting values from set
console.log("get values from ab set by array method = ",[...it][1]);

//Typescript Unions.
// can use multiple datatypes which will accept only one datatype among the specified
var q:number|number[]|string|string[];

q = 1;
q ="ABC"; 
q = ['hi','world'];
console.log(q);