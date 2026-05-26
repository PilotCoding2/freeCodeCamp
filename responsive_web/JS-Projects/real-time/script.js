const textArea = document.getElementById("text-input");
const charCounter = document.getElementById("char-count");

const updateCharCount = () => {
    let currCount = Number(textArea.value.length);
    if(currCount <= 50){
        charCounter.textContent = `Character Count: ${currCount}/50`
    } 
    console.log(currCount)
};

textArea.addEventListener("input", () => {
    updateCharCount();
});

textArea.addEventListener('keydown', (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    if(!allowedKeys.includes(e.key) && textArea.value.length === 50){
        e.preventDefault();
    }
});