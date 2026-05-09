const lunches = [];

const addLunchToEnd = (array, str) => {
    console.log(`${str} added to the end of the lunch menu.`);
    array.push(str);
    return array;
}

const addLunchToStart = (array, str) => {
    console.log(`${str} added to the start of the lunch menu.`);
    array.unshift(str);
    return array;
}

const removeLastLunch = (array) => {
    if(array.length === 0){
        console.log("No lunches to remove.");
    } else {
        console.log(`${array[array.length-1]} removed from the end of the lunch menu.`);
        array.pop();
        return array;
    }
}

const removeFirstLunch = (array) => {
    if(array.length === 0){
        console.log("No lunches to remove.");
    } else {
        console.log(`${array[0]} removed from the start of the lunch menu.`);
        array.shift();
        return array;
    }
}

const getRandomLunch = (array) => {
    if(array.length === 0){
        console.log("No lunches available.");
    } else {
        let max = array.length - 1;
        let selector = Math.floor(Math.random() * (max + 1));
        console.log(`Randomly selected lunch: ${array[selector]}`);
    }
}

const showLunchMenu = (array) => {
    if(array.length === 0){
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${array.join(", ")}`)
    }
}