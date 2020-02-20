// console.log("1" == 1);
// // true
// console.log("1" != 1);
// // false
// console.log("1" === 1);
// // false
// console.log("1" !== 1);
// // true
// console.log("10" + 1);
// // 101
// console.log("10" - 1);
// // 9
// console.log(true && 10 && 11 && 9);
console.log(true && 9 && 10);
console.log(false && 9 && 10);
// // 9
// console.log(true || 10 || 11 || 9);
console.log(true || 9 || 10);
console.log(!true || 0 || 10);
// // 9
// console.log(!true || 0 || 11 || 9);
// // true
// console.log("b" + "a" + +"a" + "a");
// // baNaNa
// console.log({} === {});
// // false
// console.log({} == {});
// // false
// console.log(null - 5);
// // -5
// console.log(undefined - 5);
// // NaN

// ------------
// Explain the differences
// var - function scoped and gets hoisted
// let  - block scoped
// const  - doesnt let value change

// ------------
// When and what will this function log?
// Can you fix this to output 0 - 1 - 2 - 3 - 4 separated by 1s per log?

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// 5 , 5 , 5 , 5 , 5 (after 1 sec) because of scope/hoisting
// change "var i" to "let i"

// --------------
// What's the output of the following snippet?

// const a = { c: 2, d: 4 };
// const b = a; // passed reference
// b.c = 3;
// console.log(a.c);
// // 3 because of object reference

// --------------
// Write a js function that would allow this with the following output

// "Penny".sheldonize(3);
// // Knock, knock, knock Penny! Knock, knock, knock Penny! Knock, knock, knock Penny!

// String.prototype.sheldonize = function(val) {
//   let output = "Knock, knock, knock " + this.valueOf() + "! ";
//   if (val === 0) {
//     return "";
//   }
//   for (let i = 1; i < val; i++) {
//     output = output + "Knock, knock, knock " + this.valueOf() + "! ";
//   }
//   return output;
// };

// console.log("Penny".sheldonize(3));

// --------------
// Imagine that you have a gigantic array and you want to extract values to an array with the following conditions
// - evens
// - positives
// - uniques
// - sorted
// Write a function that would allow you to achieve this output

// const array = [1, -2, 5, -10, 14, "11", 9, 24, 2, 4, "21" /*,(...)*/];

// function filterArray(arr) {
//   const filteredArray = arr.reduce(
//     (array, el) =>
//       el % 2 !== 0 && el >= 1 && !array.includes(el) ? [...array, +el] : array,
//     []
//   );
//   console.log("Filtered");
//   console.log(filteredArray);
//   const sortedArray = sortArray(filteredArray);
//   console.log("Sorted");
//   console.log(sortedArray);
// }

// function sortArray(arr) {
//   let sorted = false;
//   let temp = null;
//   while (!sorted) {
//     sorted = true;
//     arr.forEach((el, index) => {
//       temp = arr[index];
//       if (temp > arr[index + 1]) {
//         arr[index] = arr[index + 1];
//         arr[index + 1] = temp;
//         sorted = false;
//       }
//     });
//   }
//   return arr;
// }
// console.time("filterArray");
// filterArray(array);
// console.timeEnd("filterArray");
