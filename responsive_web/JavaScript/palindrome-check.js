function isPalindrome(word){

    word = word.toLowerCase();
    let backwards = "";

    for(let i = word.length - 1; i >= 0; i--){
        backwards += word[i];
    }

    if(backwards === word){
        return true;
    }
    return false;
}

function findPalindromeBreaks(words){

    let nonPalindromeIndex = [];

    for(const word of words){
        if(!isPalindrome(word)){
            nonPalindromeIndex.push(words.findIndex(element => element === word));
        }
    }
    return nonPalindromeIndex;
}

function findRepeatedPhrases(words, phraseLength){
    
    let repeatedPhrases = [];

    if(phraseLength >= words.length){
        return [];
    }

    let wordCompare = {};

    for(let i = 0; i < words.length; i++){
        let thePhrase = words.slice(i, i + phraseLength).join(" ");
        if(thePhrase in wordCompare){
            repeatedPhrases.push(wordCompare[thePhrase], i);
        } else {
            wordCompare[thePhrase] = i;
        }
    }
    return repeatedPhrases;
}

function analyzeTexts(texts, phraseLength){
    let returnArray = [];
    if(texts.length === 0){
        return [];
    }
    for(let i = 0; i < texts.length; i++){
        returnArray.push({'repeatedPhrases':findRepeatedPhrases(texts[i].split(" "), phraseLength), 'palindromeBreaks':findPalindromeBreaks(texts[i].split(" "))});
    }
    return returnArray;
}