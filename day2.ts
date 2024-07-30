
// *2nd Day Task Of 30 Days Challenge From Hello Coders Team*

// Question 3:
//  First and Last Element
// Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.

// Requirements:

// If the array has only one element, the function should return an array with that element duplicated.
// Ensure the function handles arrays with a single element correctly.

function firstAndlast (num : number[]){
    if(num.length === 1){
        return [num[0],num[0]]
    } 
    return [num[0],num[num.length -1]]
}
console.log (firstAndlast([1,2,3,4,5]));  //[1,5]
console.log (firstAndlast([2]));  // [2,2]
console.log (firstAndlast([2,3,4]));  //[2,4]
console.log (firstAndlast([]));   //undefined

// Question: 4 
// Find the Largest Number
// Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.

// Requirements:

// The function should handle arrays with positive and negative numbers.
// If the array contains only one number, return that number.
// Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).

function findLargestNumber (arr: number []): number | undefined{
      if(arr.length ===0){
        return undefined ;
      }  
      let largest = arr[0];
      for (let i = 1 ; i<arr.length ; i++){
        if (arr[i] > largest){
            largest = arr[i]
        }
      } return largest
}
console.log(findLargestNumber([1, 2, 3, 4]));      // Output: 4
console.log(findLargestNumber([-10, -20, -3, -4])); // Output: -3
console.log(findLargestNumber([7]));               // Output: 7
console.log(findLargestNumber([]));                // Output: undefined






