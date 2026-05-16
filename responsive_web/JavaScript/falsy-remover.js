function bouncer(arr){
    let trueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0 && arr[i] != null && !Number.isNaN(arr[i])){
            trueArr.push(arr[i]);
        }
    }
    console.log(trueArr);
    return trueArr;
}