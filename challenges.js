"use strict";
/*
Challenge One: When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April. Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch. Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
Challenge Source: https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/solutions/typescript
*/
exports.__esModule = true;
exports.multiply = void 0;
// export function sakuraFall(v: number): number {
//     let distanceFell = 400;
//     if (v > 0) {
//         let howManySeconds = distanceFell / v;
//         return howManySeconds;
//     } else {
//         return 0;
//     }
// }
// // TESTS
// console.log(sakuraFall(5));
// console.log(sakuraFall(8));
// console.log(sakuraFall(-7));
/*
Challenge Two: Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Challenge Source: https://www.codewars.com/kata/52fba66badcd10859f00097e/typescript
NOTE: the setup in my text editor is a little bit different than the setup in Codewars.
*/
// export function disemvowel(str: string) {
//     return str.replace(/[aeiou]/gi, "");
// }
// // TESTS
// console.log(disemvowel("This website is for losers LOL"));
// console.log(disemvowel("Trolling on and on"));
// console.log(disemvowel("Now are for real?"));
/*
Challenge Three: This code does not execute properly. Try to figure out why.
Challenge Source: https://www.codewars.com/kata/50654ddff44f800200000004/typescript
*/
// Starter code
// export function multiply(a: number, b: number): number {
//     return a + b;
// }
// Solution
// function multiply(a, b) {
//     return a * b;
// }
exports.multiply = multiply;
// TESTS
// console.log(multiply(3, 4));
// console.log(multiply(2, 6));
// console.log(multiply(7, 8));
