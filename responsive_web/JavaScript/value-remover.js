function destroyer(arr, ...args){
    for(const arg of args){
        let index = arr.indexOf(arg);
        for(let i = 0; i < arr.length; i++){
            if(index > -1){
                arr.splice(index, 1);
            }

        }
    }
    return arr;
}