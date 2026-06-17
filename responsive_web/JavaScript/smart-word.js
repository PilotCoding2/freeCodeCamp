const myReplace = (str, replaced, replacement) => {
    let capsRegex = /[A-Z]/;
    if(replaced.match(capsRegex)){
        let capsReplacement = replacement[0].toUpperCase() + replacement.slice(1, replacement.length + 1);
        return str.replace(replaced, capsReplacement);
    } else {
        return str.replace(replaced, replacement.toLowerCase());
    }
}