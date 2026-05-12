function chunkArrayInGroups(array, num){
    const finalArray = [];
    for(let i = 0; i < array.length; i += num){
        const chunks = array.slice(i, i + num)
        finalArray.push(chunks)
    }
    console.log(finalArray);
    return finalArray;
}