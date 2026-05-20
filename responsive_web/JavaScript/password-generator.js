function generatePassword(num){
    const elements = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for(let i = 0; i<num; i++){
        let picker = Math.floor(Math.random() * elements.length);
        password += elements[picker];
    }
    return password;
}

let password = generatePassword(9);
console.log(`Generated password: ${password}`);