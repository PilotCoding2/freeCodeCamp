const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

const getFlags = () => {
    if(caseInsensitiveFlag.checked && globalFlag.checked){
        return 'ig';
    } else if (caseInsensitiveFlag.checked && !globalFlag.checked){
        return 'i';
    } else if (!caseInsensitiveFlag.checked && globalFlag.checked){
        return 'g';
    } else {
        return '';
    }
}

const getMatches = () => {
    const flags = getFlags();
    const regex = new RegExp(regexPattern.value, flags);
    let matches = stringToTest.innerText.match(regex);
    if(matches){
        testResult.innerText = matches.join(', ');
        stringToTest.innerHTML = stringToTest.innerHTML.replace(regex, (content) => `<span class='highlight'>${content}</span>`);
    } else {
        testResult.innerText = 'no match';
    }
}

testButton.addEventListener('click', () => {
    if(testResult.innerText !== ''){
        stringToTest.innerText = '';
    }
    getMatches();
});