function getIndexToIns(arr, num){
    arr.sort((a, b) => a - b);
    let index = arr.findIndex((element) => element >= num)
    if(arr.length > 0){
        if(index !== -1){
            return index;
        } else {
            return arr.length;
        }
    } else {
        return 0;
    }
}