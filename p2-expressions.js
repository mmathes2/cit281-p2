const varName = function() { }
// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min,max){
    return Math.floor(Math.random() * (max - min) + min);
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    console.log(result);

//return single, random, lowercase letter 
const getRandomLetter = function(){ 
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)] 
}; 
console.log(getRandomLetter()); 
//return random length string 
const getRandomString = function(minLength,maxLength){ 
    let result = ""
    for (let i = 0; i < getRandomInteger(minLength,maxLength); i++) {
        result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    return result;
}
console.log(getRandomString(10,20));
//return string in ascending order  
const getSortedString = function(string){ 
    return Array.from(string).sort().join(''); 
} 
    console.log(getSortedString(getRandomString(10,20))); 

    //commit 