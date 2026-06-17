const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const palindromeChecker = (str) => {
    const alphanumericCleaner = /[^a-zA-Z0-9]/g;
    const cleanString = str.replace(alphanumericCleaner, '');
    let reversedString = '';
    for(let i = cleanString.length - 1; i >= 0; i--){
        reversedString += cleanString[i];
    }
    if(reversedString.toLowerCase() == cleanString.toLowerCase()){
        console.log(cleanString);
        console.log(reversedString);
        return true;
    } else {
        console.log(cleanString);
        console.log(reversedString);
        return false;
    }
}

checkBtn.addEventListener('click', () => {
    if(textInput.value === ''){
        alert('Please input a value');
        return;
    }
    if(palindromeChecker(textInput.value) === true){
        result.textContent = `${textInput.value} is a palindrome.`;
    } else {
        result.textContent = `${textInput.value} is not a palindrome.`;
    }
});