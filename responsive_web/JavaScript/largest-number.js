function largestOfAll(arr){
    const newArray = [];
    let biggestNum = -Infinity;
    for(let i = 0; i < arr.length; i++){
        biggestNum = -Infinity;
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > biggestNum){
                biggestNum = arr[i][j];
            } 
        }
        newArray.push(biggestNum);
    }
    console.log(newArray)
    return newArray;
}

largestOfAll([[1, 2, 3], [1, 5, 6]]);