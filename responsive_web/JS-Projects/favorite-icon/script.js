const favoriteIcon = document.querySelectorAll(".favorite-icon");

const toggleFavorite = (button) => {
    if(button.classList.contains('filled')){
        button.classList.remove('filled')
        button.textContent = "\u2661";
    } else {
        button.classList.add('filled');
        button.textContent = "\u2764"
    }
}

favoriteIcon.forEach(button => {
    button.addEventListener("click", () =>{
        toggleFavorite(button);
    })
})