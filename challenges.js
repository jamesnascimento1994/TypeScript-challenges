"use strict";
/*
Challenge One: When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April. Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch. Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
Challenge Source: https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/solutions/typescript
*/
exports.__esModule = true;
exports.doors = exports.Challenge = exports.pigIt = exports.duplicateCount = exports.descendingOrder = exports.arr = exports.getCount = exports.isValidWalk = exports.hello = exports.multiply = exports.disemvowel = exports.sakuraFall = void 0;
function sakuraFall(v) {
    var distanceFell = 400;
    if (v > 0) {
        var howManySeconds = distanceFell / v;
        return howManySeconds;
    }
    else {
        return 0;
    }
}
exports.sakuraFall = sakuraFall;
// TESTS
// console.log(sakuraFall(5));
// console.log(sakuraFall(8));
// console.log(sakuraFall(-7));
/*
Challenge Two: Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Challenge Source: https://www.codewars.com/kata/52fba66badcd10859f00097e/typescript
NOTE: the setup in my text editor is a little bit different than the setup in Codewars.
*/
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "");
}
exports.disemvowel = disemvowel;
// TESTS
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
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
// TESTS
// console.log(multiply(3, 4));
// console.log(multiply(2,6));
// console.log(multiply(7,8));
/*
Challenge Four: Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String). Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
Challenge Source: https://www.codewars.com/kata/57e3f79c9cb119374600046b/typescript
*/
function hello(name) {
    if (name === void 0) { name = ''; }
    if (name) {
        return "Hello, " + name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    }
    else {
        return "Hello, World!";
    }
}
exports.hello = hello;
// TESTS
// console.log(hello("jAmEs"));
// console.log(hello());
// console.log(hello(""));
/*
Challenge Five: You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
Challenge Source: https://www.codewars.com/kata/54da539698b8a2ad76000228/typescript
*/
function isValidWalk(walk) {
    var ns = 0;
    var we = 0;
    for (var _i = 0, walk_1 = walk; _i < walk_1.length; _i++) {
        var dir = walk_1[_i];
        if (dir == 'n')
            ns += 1;
        if (dir == 's')
            ns -= 1;
        if (dir == 'w')
            we += 1;
        if (dir == 'e')
            we -= 1;
    }
    if (ns === 0 && we === 0 && walk.length === 10) {
        return true;
    }
    else {
        return false;
    }
}
exports.isValidWalk = isValidWalk;
// TESTS
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
/* Challenge Six: Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
Challenge Source: https://www.codewars.com/kata/54ff3102c1bad923760001f3/typescript
*/
function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}
exports.getCount = getCount;
// TESTS
// console.log(getCount("vowel"));
// console.log(getCount('cover'));
// console.log(getCount('cranium'));
/* Challenge Seven: We want an array, but not just any old array, an array with contents! Write a function that produces an array with the numbers 0 to N-1 in it.
Challenge Source: https://www.codewars.com/kata/571d42206414b103dc0006a1
*/
var arr = function (n) {
    if (n === void 0) { n = 0; }
    return Array.from({ length: n }, function (_, i) { return i; });
};
exports.arr = arr;
// TESTS
// console.log(arr());
// console.log(arr(4));
// console.log(arr(0));
/* Challenge Eight: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Challenge Source: https://www.codewars.com/kata/5467e4d82edf8bbf40000155
*/
function descendingOrder(n) {
    // your code here
    return (parseFloat(n.toString().split('').sort().reverse().join('')) * Math.sign(n));
}
exports.descendingOrder = descendingOrder;
// TESTS
// console.log(descendingOrder(42145));
// console.log(descendingOrder(145263));
// console.log(descendingOrder(123456789));
/* Challenge Nine: In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words. Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
Challenge Source: https://www.codewars.com/kata/54b724efac3d5402db00065e

NOTE: The MORSE_CODE variable is exclusive to codewars. I'm not sure how to fix the error on VS code without having to create a giant array of every letter with its morse code.
*/
// export function decodeMorse(morseCode: string): string {
//     // your code here
//     let trimmedMorseCode = morseCode.trim();
//     let splitMorseCode = trimmedMorseCode.split(/  | /);
//     let mappedMorseCode = splitMorseCode.map((morse) =>  MORSE_CODE[morse] || ' ');
//     let joinedMorseCode = mappedMorseCode.join('');
//     return joinedMorseCode;
// }
// TESTS
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
/*
Challenge Ten: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Challenge Source: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
*/
function duplicateCount(text) {
    //...
    var lowerCaseText = text.toLowerCase();
    var splitText = lowerCaseText.split("");
    return splitText.filter(function (val, i, arr) {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
exports.duplicateCount = duplicateCount;
// TESTS
// console.log(duplicateCount("abcde"));
// console.log(duplicateCount("aabbcde"));
// console.log(duplicateCount("aabBcde"));
// console.log(duplicateCount("indivisibility"));
// console.log(duplicateCount("Indivisibilities"));
// console.log(duplicateCount("aA11"));
// console.log(duplicateCount("ABBA"));
/*
Challenge Eleven: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Challenge Source: https://www.codewars.com/kata/520b9d2ad5c005041100000f
*/
var pigIt = function (a) {
    // code away
    var words = a.split(" ");
    var pigLatinWords = words.map(function (word) {
        if (!/\w/.test(word))
            return word;
        return word.substr(1) + word.charAt(0) + 'ay';
    });
    return pigLatinWords.join(" ");
};
exports.pigIt = pigIt;
// TESTS
// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('Hello world !'));
/*
Challenge Twelve: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
Challenge Source: https://www.codewars.com/kata/514b92a657cdc65150000006/typescript
*/
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        var sum = 0;
        if (number <= 0) {
            return 0;
        }
        else {
            for (var i = 1; i < number; i++) {
                if (i % 3 == 0 || i % 5 == 0) {
                    sum += i;
                }
            }
            return sum;
        }
    };
    return Challenge;
}());
exports.Challenge = Challenge;
// TESTS
// console.log(Challenge.solution(10));
// console.log(Challenge.solution(35));
// console.log(Challenge.solution(65));
/*
Challenge Thirteen: In the morning all the doors in the school are closed. The school is quite big: there are N doors. Then pupils start coming. It might be hard to believe, but all of them want to study! Also, there are exactly N children studying in this school, and they come one by one. When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). Each student has their number, and each i-th student alters the status of every i-th door. For example: when the first child comes to the schools, he changes every first door (he opens all of them). The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).You need to count how many doors are left opened after all the students have come.
Challenge Source: https://www.codewars.com/kata/57c15d314677bb2bd4000017
*/
var doors = function (n) {
    return ~~Math.sqrt(n);
};
exports.doors = doors;
// TESTS
console.log(exports.doors(0));
console.log(exports.doors(2));
console.log(exports.doors(3));
console.log(exports.doors(5));
console.log(exports.doors(10));
