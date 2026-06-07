const hexCodeItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
                     "A", "B", "C", "D", "E", "F"];

const body = document.body;
const changeColorBtn = document.getElementById('color-btn');

const randomSelector = () => {
    let selector = Math.floor(Math.random() * hexCodeItems.length);
    return selector;
};

const hexCodeGenerator = (hexCodeItems) => {
    let hexCode = "#";
    do{
        hexCode += hexCodeItems[randomSelector()];
    } while (hexCode.length < 7);

    console.log(hexCode);
    return hexCode;
}

const changeBackgroundColor = () => {
    const backgroundColor = hexCodeGenerator(hexCodeItems);
    body.style.backgroundColor = backgroundColor;
}

changeColorBtn.addEventListener('click', () => {
    changeBackgroundColor();
});