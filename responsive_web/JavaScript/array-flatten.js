function steamrollArray(arr){
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
}