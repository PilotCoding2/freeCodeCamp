function frankenSplice(arr1, arr2, num){
    const arr1Copy = [...arr1];
    const arr2Copy = [...arr2];
    for(let i = 0; i < arr1Copy.length; i++){
        arr2Copy.splice(num, 0, arr1Copy[i]);
    }
    return arr2Copy;

}