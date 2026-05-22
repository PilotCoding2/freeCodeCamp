function truthCheck(arr, pre){
    if(arr.every(element => element[pre])){
        return true;
    };
    return false;
}