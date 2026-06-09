const hexCodeItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
                     "A", "B", "C", "D", "E", "F"];

const body = document.body;
const changeColorBtn = document.getElementById('color-btn');
const yourColorText = document.querySelector('.your-color');
const docTitle = document.querySelector('.title');

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

const hexCodeToRGB = (backgroundColor) => {
    let red = "";
    let green = "";
    let blue = "";

    for(let i = 1; i < backgroundColor.length; i+=2){
        if(i === 1){
            red = backgroundColor.slice(i, i + 2);
        } else if(i === 3){
            green = backgroundColor.slice(i, i + 2);
        } else if(i === 5){
            blue = backgroundColor.slice(i, i +2);
        }
    }

    red = parseInt(red, 16);
    green = parseInt(green, 16);
    blue = parseInt(blue, 16);

    return { red, green, blue };
}

const getComplimentaryColor = (backgroundColor) => {
    const rgbColor = hexCodeToRGB(backgroundColor);
    const red = 255 - rgbColor.red;
    const green = 255 - rgbColor.green;
    const blue = 255 - rgbColor.blue;
    
    return { red, green, blue};
}


const changeBackgroundColor = () => {
    const backgroundColor = hexCodeGenerator(hexCodeItems);
    const complimentColor = getComplimentaryColor(backgroundColor);

    body.style.backgroundColor = backgroundColor;
    yourColorText.innerHTML = `Your color HEX Code is: <br>${backgroundColor}`
    yourColorText.style.color = `rgb(${complimentColor.red},${complimentColor.green}, ${complimentColor.blue})`;
    changeColorBtn.style.backgroundColor = `rgb(${complimentColor.red},${complimentColor.green}, ${complimentColor.blue})`;
    changeColorBtn.style.color = backgroundColor;
    changeColorBtn.style.border = 'none';
    docTitle.style.color = `rgb(${complimentColor.red},${complimentColor.green}, ${complimentColor.blue})`;
}


changeColorBtn.addEventListener('click', () => {
    changeBackgroundColor();
});