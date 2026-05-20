function convertHTML(str){
    let newString = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === "&"){
            newString += "&amp;";
        } else if(str[i] === "<"){
            newString += "&lt;";
        } else if(str[i] === ">"){
            newString += "&gt;";
        } else if(str[i] === '"'){
            newString += "&quot;";
        } else if(str[i] === "'"){
            newString += "&apos;";
        } else {
            newString += str[i];
        }
    }
    console.log(newString);
    return newString;
}