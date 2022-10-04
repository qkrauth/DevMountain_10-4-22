// Make Unique String

// Difficulty
// Medium

// Concepts
// Loops, Conditionals, String Methods

// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:
// >>> makeUnique('helloworld')
// helowrd

// >>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu

////////// CODE HERE //////////

// const wordCoder = (string) => {
//     let uniqueWord = "";
//     for (let i = 0; i < string.length; i++) {
//         for (let j = i + 1; j < string.length; j++) {
//             if (string[i] === string[j]){  // we do not want i or j to be equal cuz then the letter is not unique
//                 // if statement should get rid of the letter at i or j to make that letter unique
//             }
//         }
//     }
//     return uniqueWord;
// }
// console.log(wordCoder());

////////// SOLUTION //////////

function makeUnique(string) {
    let uniqueSet = new Set(string);
    let uniqueString = Array.from(uniqueSet).join("");
    return uniqueString
}
console.log(makeUnique("HelloWorld"));

////////// SOLUTION 2 /////////

function createUnique(string) {
    let unique = "";
    for (let i = 0; i < string.length; i++) {
        if (unique.indexOf(string[i]) === -1) {
            unique += string[i]
        }
    }
    return unique
}
console.log(createUnique("HelloWorld"));