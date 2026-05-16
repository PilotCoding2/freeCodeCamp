function fearNoLetter(str){
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const strBegins = abc.indexOf(str[0]);
    const strEnds = strBegins + str.length;
    const abcSubstring = abc.slice(strBegins, strEnds);
    for(let i = 0; i < abcSubstring.length; i++){
        if(abcSubstring[i] !== str[i]){
            return abcSubstring[i];
        }
    }
    return undefined;
}