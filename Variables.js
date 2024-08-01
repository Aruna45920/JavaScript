// Here we have 3 keywords let var const
// 1. var is used to declare variable we can access this inside or out side the scope;
// 2. var can be modified wherever we want
var a = 10;
document.write(a);

{
 var a = 10;
 console.log(a)
}
console.log(a)
a=11;
console.log(a)
// -------------------------------------------
// modified but not access to outside the scope

{
    let b=12;
console.log(b)
b=22;
console.log(b)
}
//console.log(b)
// -------------------------------------------
// 3. const is used to declare constant variable
const c=10;
console.log(c)
// c=11;
// console.log(c)

// if we find any error then rest of the statement will not execute