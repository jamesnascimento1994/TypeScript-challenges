"use strict";
/*
Challenge One: When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April. Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch. Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
Challenge Source: https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/solutions/typescript
*/
exports.__esModule = true;
exports.isValidWalk = void 0;
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
// export function multiply(a: number, b: number): number {
//     return a * b;
// }
// TESTS
// console.log(multiply(3, 4));
// console.log(multiply(2,6));
// console.log(multiply(7,8));
/*
Challenge Four: Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String). Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
Challenge Source: https://www.codewars.com/kata/57e3f79c9cb119374600046b/typescript
*/
// export function hello(name = ''): string {
//     if (name) {
//         return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
//     } else {
//         return "Hello, World!";
//     }
// }
// // TESTS
// console.log(hello("jAmEs"));
// console.log(hello());
// console.log(hello(""));
/*
Challenge Twenty-Seven: You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
Challenge Source: https://www.codewars.com/kata/54da539698b8a2ad76000228/typescript
*/
// function isValidWalk(walk) {
//     var ns = 0;
//     var we = 0;
//     for (var _i = 0, walk_1 = walk; _i < walk_1.length; _i++) {
//         var dir = walk_1[_i];
//         if (dir == 'n')
//             ns += 1;
//         if (dir == 's')
//             ns -= 1;
//         if (dir == 'w')
//             we += 1;
//         if (dir == 'e')
//             we -= 1;
//     }
//     if (ns === 0 && we === 0 && walk.length === 10) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// exports.isValidWalk = isValidWalk;
// // TESTS
// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
