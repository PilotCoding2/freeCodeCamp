/*const happyBtn = document.querySelector("#happy-btn");
const confusedBtn = document.querySelector("#confused-btn");
const sadBtn = document.querySelector("#sad-btn");
const lovingBtn = document.querySelector("#loving-btn");*/

const btns = document.querySelectorAll(".emoji-btn");

const updateCount = (button) => {
    const count = button.querySelector(".count")
    const countArray = count.textContent.split("/");
    let currCount = Number(countArray[0]);
    if(currCount < 10){
        currCount++;
        count.textContent = `${currCount}/10`;
    } 
}

btns.forEach(button => button.addEventListener("click", () => {
    updateCount(button);
}))

/*happyBtn.addEventListener("click", () => {
    updateCount(happyBtn);
})

confusedBtn.addEventListener("click", () => {
    updateCount(confusedBtn);
})

sadBtn.addEventListener("click", () => {
    updateCount(sadBtn);
})

lovingBtn.addEventListener("click", () => {
    updateCount(lovingBtn);
})*/


