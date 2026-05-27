const textArea = document.getElementById("text-input");
const charCounter = document.getElementById("char-count");
const charNumber = document.getElementById("char-number");

const updateCharCount = () => {
    let currCount = Number(textArea.value.length);
    if(currCount < 51){
       charNumber.textContent = currCount;
       charNumber.style.color = '#22D4A0';
       charCounter.style.color = '#4A8FE7'

        
    } else {
        textArea.value = textArea.value.slice(0, 50);
        charCounter.style.color = '#E8445A';
        charNumber.style.color = '#E8445A';
    }
    
};

textArea.addEventListener("input", () => {
    updateCharCount();
});

/*textArea.addEventListener('keydown', (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    if(!allowedKeys.includes(e.key) && textArea.value.length === 50){
        e.preventDefault();
    }
});*/