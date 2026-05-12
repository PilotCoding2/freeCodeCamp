function repeatStringNumTimes(str, num){
    let emptyString = "";
    if(num > 0){
        for(let i = 0; i < num; i++){
            emptyString += str;
        }
        return emptyString;
    }
    return "";
}