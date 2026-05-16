function pyramid(str, num, bool){
    let emptyStr = "";
    const space = " ";
    if(bool===false){
        for(let i = 0; i < num; i++){
            emptyStr += "\n" + space.repeat(num-(i+1)) + str.repeat(i*2+1);
            if(i===num-1){
                emptyStr+= "\n";
            }
        }
    } else {
        for(let i = num-1; i >= 0; i--){
            emptyStr += "\n" + space.repeat(num-i-1) + str.repeat(i*2+1);
            if(i===0){
                emptyStr += "\n";
            }
        }
    }
    console.log(emptyStr);
    return emptyStr;
}
