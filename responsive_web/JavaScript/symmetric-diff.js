function diffArray(arr1, arr2){
    let arr1Diff= arr1.filter(item => !arr2.includes(item));
    let arr2Diff = arr2.filter(item => !arr1.includes(item));
    return [...arr1Diff, ...arr2Diff];
}