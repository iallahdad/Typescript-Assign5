//Write a program that uses filter to remove all negative numbers from an array of numbers
//----------------------------------------------------
let array: number[] = [1 ,-2, 3, 4, -5, 6, -7,-8];

let updatedArray = array.filter((data) => {
        if (data > 0){
        return true;
    }}
    );

    console.log(updatedArray);
//     --------------------------------------------------

//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2

let array: number[] = [1 ,2, 3, 4, 5];

let updatedArray = array.map((data) => {
    return data*2;
})

console.log(updatedArray);
// --------------------------------------------------

//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

let array: string[] = ["banana" ,"apple", "date", "grape", "orange", "pineApple"];

let updatedArray= array.filter((char) => {
    return char.length>5;

})
console.log(updatedArray);

// ------------------------------------------------------
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers

let array: number[] = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];

const EvenArray = array.map((data) => {
   return data*data;
})
const updatedArray = EvenArray.filter((data) => {
    if (data % 2 ==0)
    return true;
})
console.log(updatedArray);

// ------------------------------------------------------

//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32

let array: number[] = [0 ,10, 20, 30, 40];

let updatedArray = array.map((data) => {
     return (data*9/5) +32;
})

console.log(updatedArray);

// -----------------------------------------------------

//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

 let array: number[] = [3 ,6, 9, 12, 15, 18];

const updatedArray = array.filter((data) => {
    if (data % 2 !==0){
    return true;}
})
const EvenArray = updatedArray.map((data) => {
    return data*2;
 })
console.log(EvenArray);

// -------------------------------------------------

//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

let array: string[] = ["Alice" ,"Bob", "Charlie", "David", "Emily"];

let updatedArray= array.forEach((data) => 
{
    console.log(data,"!");  
})

//---------------------------------------------------------------
 





