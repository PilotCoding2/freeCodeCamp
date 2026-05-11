function getVowelCount(sentence){
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowercaseSentence = sentence.toLowerCase();
    for(const letter of lowercaseSentence){
        for(const vowel of vowels){
          if(vowel === letter){
            count++;
          }
        }
    }
    return count;
}

let vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence){
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const symbols = [' ', "!", "?", ".", ",", ":", ";"]
    const lowercaseSentence = sentence.toLowerCase();
    for(const letter of lowercaseSentence){
        if(vowels.includes(letter)){
            count;
        } else if(!symbols.includes(letter)){
            count++;
        }
    }
    return count;
}

let consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence){
    let count = 0;
    const punctuation = ["!", "?", ".", ",", ":", ";", "'"];

    for(const letter of sentence){
        if(punctuation.includes(letter)){
            count++;
        }
    }
    return count;
}

let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence){
    if(sentence.trim() === ""){
        return 0;
    } else {
        let words = sentence.split(" ");
        let count = words.length;
        return count;
    }
}

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);