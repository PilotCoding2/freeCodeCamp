
// the function takes a string as an argument
function findLongestWordLength(str){
    // the function creates a variable with an array that divides each word by spaces
    const wordArray = str.split(" ");
    // set longest word to 0
    let longestWord = 0;
    // loop the word array
    for(let i = 0; i < wordArray.length; i++){
        // if the current word is bigger than the stored value on longestWord, it replaces it
        if(wordArray[i].length > longestWord){
            longestWord = wordArray[i].length;
        }
    }
    return longestWord;
}