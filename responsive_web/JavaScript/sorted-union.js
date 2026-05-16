function uniteUnique(...arrays){
    let numberBox = [];
    for(const array of arrays){
        for(const number of array){
            numberBox.push(number);
        }
    }
    return [...new Set(numberBox)];
}