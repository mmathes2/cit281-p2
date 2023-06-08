/* 
CIT 281 Assignment 2 
Name: Mia Matheson 
*/
/*
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = ""; 

let lengthOfOutputString = getRandomInteger(5, 26);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getRandomInteger(0,alphabet.length)];
}

console.log(result);
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    console.log("randomInt" + " " + result);

//return single, random, lowercase letter 
function getRandomLetter(){ 
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)] 
}; 
console.log("randomLetter" + " " + getRandomLetter()); 
//return random length string 
function getRandomString(minLength,maxLength){ 
    let result = ""
    for (let i = 0; i < getRandomInteger(minLength,maxLength); i++) {
        result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    return result;
}
console.log("randomString" + " " + getRandomString(10,20));
//return string in ascending order  
function getSortedString(string){ 
    return Array.from(string).sort().join(''); 
} 
    console.log("sorted" + " " +  getSortedString(getRandomString(10,20))); 