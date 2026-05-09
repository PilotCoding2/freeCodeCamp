const truncateString = (str, num) => {
    if(str.length > num){
        return str = str.substring(0, num) + "...";
    } else {
        return str;
    }
}