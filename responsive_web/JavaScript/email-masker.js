let email = "kelokopa@gmail.com";

const maskEmail = arg => {
    let atIndex = arg.indexOf("@");
    let emailSlice = arg.slice(1, atIndex-1);
    let maskedEmail = arg.replace(emailSlice, "*".repeat(emailSlice.length));
    return maskedEmail;
}

console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));
console.log(maskEmail(email));