const translatePigLatin = str => {
    let vowelsRegex = /[aeiou]/i;
    let consonantRegex = /(?<=[^aeiou])(?=[aeiou])/i;
    if(str[0].match(vowelsRegex)){
        return str + "way";
    } else if(str.match(consonantRegex)){
        let index = str.match(consonantRegex).index
        let strBegin = str.slice(0, index);
        return str.slice(index, str.length+1) + strBegin + "ay";
    } else if(!str.match(vowelsRegex)){
        return str + "ay";
    }
}