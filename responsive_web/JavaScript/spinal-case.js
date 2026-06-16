const spinalCase = str => {
    let regexSeparator = /(_|(?<=[a-z])((?=[A-Z])|\s))/g;
    return str.replace(regexSeparator, "-").toLowerCase();
}

console.log(spinalCase("The_Andy_Griffith_Show"));