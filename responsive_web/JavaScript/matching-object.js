function whatIsInName(arr, src){
    return arr.filter(obj => Object.keys(src).every(key => obj[key] === src[key]));     
}