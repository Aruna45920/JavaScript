// Type 1

var ar = [1,2,3,4,5]

console.log(ar)

//------------------------------------------

// Type 2

var ar = []
 ar[0] = 1
 ar[1] = 2
 ar[2] = 3
 ar[3] = 4
 ar[4] = 5

 console.log(ar)


// Type 3

var ar = new Array("a","b","c","d","e")

console.log(ar)


// Array Operations

//1. push() -> adds element at the end of the array
//2. unshift() -> adds element at the start of the array
//3. pop() -> removes element at the end of the array
//4. shift() -> removes element at the start of the array
//5. splice() -> removes and adds elements in the array
//6. delete -> removes elements in the array
// 7.sort() -> sorts the array here it is checking the only first digit based on that it will sort the array
// 8. reverse() -> reverses the array
// 9. slice() -> extracts elements from the array starts at the index and it does not include the end index

var a=[1,2,3,4,5]

console.log(a)
a.push(6)
console.log(a)
a.unshift(0)
console.log(a)
a[2]=10
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a)
// delete  a[3]
// console.log(a)
a.splice(3,1)
console.log(a)
a.splice(1,2,21,11,12)
console.log(a)
a.sort()
console.log(a)
a.reverse()
console.log(a)

//-----------------------------------------

var fruits=["apple","mango","banana","orange"]
console.log(fruits)
console.log(fruits.slice(1,3))


