function permuteString(str, prefix = str[0], arr = []){
    if(str.length === 0) return [""];
    if(str.length === 1) return [str];

    let result = [];

    for(let i = 0; i < str.length; i++){
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const remainingCharsPermuted = permuteString(remainingChars, prefix = str[i]);
        console.log(remainingChars);
        for(let j = 0; j < remainingCharsPermuted.length; j++){
            const permutation = prefix + remainingCharsPermuted[j];
            result.push(permutation);
        }
    }
    return [... new Set(result)];
}

console.log(permuteString('cat'));