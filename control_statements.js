//Switch case

var color="pink";

switch(color){
    case "red":
        console.log("Color is red");
        break;
    case "black":
        console.log("Color is black");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not found");
}

//--------------------------------------------

// While loop

var count=1;
while(count<=10){
    console.log(count);
    count++;
}

//--------------------------------------------

// Do while loop

var count=11;
do{
    console.log(count);
    count++;
}while(count<=10)


// --------------------------------------------

// For loop

for(var count=1;count<=10;count++){
    console.log(count);
}


// for in -> which is for used non iterable objects

var obj={
    firstName:"Aruna",
    lastName:"kumari",
    age:21
}
for( let res in obj) {
    console.log(obj[res]);
}

// for of -> used to iterate over array

var ar=[10,20,30,40,50];
    for(var i of ar){
        console.log(i);
    }