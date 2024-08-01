// Alert

var str1="Aruna"
var str2="Kumari"
alert(str1+str2);
//---------------------------------

// confirm -> same as alert but it have 2 buttons
 var str1="Aruna"
 var str2="Kumari"
 confirm(str1+str2);

//---------------------------------

// prompt

var str1 = prompt("Enter your firstname")
var str2 = prompt("Enter your lastname")
alert(str1 + str2)

//1. Adding 2 numbers
 
var a=10;
  var b=20;
  console.log(a+b);

// 2. Adding 3 numbers by taking the user inputs

// var a=prompt("Enter 1st number")
//  var b=prompt("Enter 2nd number")  // if we do like this it will concatinate
// var c=prompt("Enter 3rd number")   // it will taken as string so we have to convert through parseInt
// console.log(a+b+c)


var a=parseInt(prompt("Enter 1st number"))
var b=parseInt(prompt("Enter 2nd number"))
var c=parseInt(prompt("Enter 3rd number"))
console.log(a+b+c)

//---------------------------

//sqrt

var a=parseInt(prompt("Enter number") )
console.log(Math.sqrt(a))

//------------------------------------------------------------------------------------------

//1. Functional declaration
//  syntax:
//  function functionName(parameters){
//     // function body
//  }


 a=15
 b=30
function display(a,b){
    console.log(a+b)
}
display(a,b)


//----------------------------------------

//2. Function expression
// syntax:
// var functionName=function(parameters){
//     // function body
// }

var display = function(a,b) {
    if(a>b) {
        alert("The condtion is true, a is greater than b")
    }
    else {
        confirm("The condtion is false, b is greater than a")
    }
}
display(10,20)


//----------------------------------------

//3. Anonymous function
// syntax:
  
// () => {
//     // function body
// }


//Example
 ( 
() => {
    alert("It is an anonymous function")
}
 )
 ()
//------------------------------------------------------------------------


//4. Arrow function

// syntax:

// var functionName = (parameters) => {
//     // function body
// } here there is no need to mention the function keyword

var display = (a,b) => {
    console.log(a+b)
}
display(10,5)

