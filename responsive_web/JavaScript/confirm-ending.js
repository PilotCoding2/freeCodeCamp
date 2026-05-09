const confirmEnding = (checkStr, checkStrAgainst) => {
    if(checkStr.slice(-checkStrAgainst.length) === checkStrAgainst){
        return true;
    } else {
        return false;
    }
}