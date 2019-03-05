function myFunWithoutDefault(a,param)
{
    console.log('Default Param = ', param); // undefined if not passed
    console.log('required Param = ', a); // undefined if not passed
}

myFunWithoutDefault();

// Default Param
function myFun(a,param = 1)
{
    console.log('Default Param = ', param); // 1 if not passed
    console.log('required Param = ', a); // undefined
}

myFun();
myFun(2);

function* generate() {
    
    yield 2;
    for(let i=0; i<10; i++){
        yield i;
    }
}

console.log('Generator o/p = ',generate().next());
console.log('Generator o/p = ',generate().next());
console.log('Generator o/p = ',generate().next());
