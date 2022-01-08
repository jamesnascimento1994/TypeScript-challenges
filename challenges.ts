/* 
Challenge One: When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April. Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch. Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
Challenge Source: https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/solutions/typescript
*/

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
Challenge Five: You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
Challenge Source: https://www.codewars.com/kata/54da539698b8a2ad76000228/typescript
*/

// export function isValidWalk(walk: string[]) {
//   let ns = 0;
//   let we = 0;
//   for (let dir of walk) {
//     if (dir == 'n') ns += 1;
//     if (dir == 's') ns -= 1;
//     if (dir == 'w') we += 1;
//     if (dir == 'e') we -= 1;
//   }
//   if (ns === 0 && we === 0 && walk.length === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // TESTS
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

/* Challenge Six: Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
Challenge Source: https://www.codewars.com/kata/54ff3102c1bad923760001f3/typescript
*/

// export function getCount(str: string) {
//     return str. replace(/[^aeiou]/gi,''). length;
// }

// // TESTS
// console.log(getCount("vowel"));
// console.log(getCount('cover'));
// console.log(getCount('cranium'));

/* Challenge Seven: We want an array, but not just any old array, an array with contents! Write a function that produces an array with the numbers 0 to N-1 in it.
Challenge Source: https://www.codewars.com/kata/571d42206414b103dc0006a1
*/

// export const arr = (n = 0): number[] => Array.from({length: n}, (_, i) => i);

// // TESTS
// console.log(arr());
// console.log(arr(4));
// console.log(arr(0));

/* Challenge Seven: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Challenge Source: https://www.codewars.com/kata/5467e4d82edf8bbf40000155
*/

export function descendingOrder(n: number): number {
    // your code here
    return (
      parseFloat(
        n.toString().split('').sort().reverse().join('')
      ) * Math.sign(n)
    )
}

// TESTS
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));