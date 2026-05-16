function titleCase(str){
    const stringNormalizer = str.toLowerCase();
    const wordArray = stringNormalizer.split(" ");
    const newArray = [];

    for(let i = 0; i < wordArray.length; i++){
        newArray.push(wordArray[i][0].toUpperCase() + wordArray[i].substring(1));
    }
    console.log(newArray.join(" "));
    return newArray.join(" ");
}