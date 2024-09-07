// array
const name=["ayushman","shaw"]
console.log(name)
console.log(typeof name)
console.log(name[0]);

//array methods

let myArr=[1,2,3,4,5]
console.log(myArr)
myArr.push(6)
console.log(myArr)

//unshift

myArr.unshift(0)
console.log(myArr)
console.log(myArr.includes(9))
const newArr=myArr.join();
console.log(newArr)
console.log(typeof newArr)

//slice and splice
let arr1=[1,2,3,4,5]
let arr2=[1,3,4,5,6,7,8]
let slArr=arr1.slice(1,3);
console.log("original"+arr1)
console.log("after slice"+slArr)
console.log("after slice the original array"+arr1)
console.log("original"+arr2)
let spArr=arr2.splice(1,3);
console.log("after slice"+spArr)
console.log("after slice the original array"+arr2)
