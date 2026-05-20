function dropElements(arr, func){
    let arrCopy = [...arr];
    for(let i = 0; i < arrCopy.length; i++){
        if(func(arrCopy[i]) === true){
            let index = arrCopy.indexOf(arrCopy[i]);
            console.log(arrCopy.slice(index, arrCopy.length));
            return arrCopy.slice(index, arrCopy.length)
        } 
    } 
    return [];
}