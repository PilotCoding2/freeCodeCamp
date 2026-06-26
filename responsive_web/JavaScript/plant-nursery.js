const ballerina = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Ballerina"
}

const prettyPolly = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Pretty Polly"
}

const willowVale = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Willow Vale"
}

const hidcote = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Hidcote"
}

const imperialGem = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Imperial Gem"
}

const royalCrown = {
    commonName: "French lavender",
    scientificName: "Lavandula dentata",
    cultivar: "Royal Crown"
}

const catalog = new Map();

catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });

/*
const getBallerina = catalog.get(ballerina);
console.log(getBallerina);
getBallerina.small = 19;
*/

const sellPlants = (plantObj, potSize, noToSell) => {
    if(!catalog.has(plantObj)) return 'Item not found.';

    const pots = catalog.get(plantObj)[potSize];
    if(noToSell > pots){
        return `Not enough ${potSize} size pots for ${plantObj.scientificName} '${plantObj.cultivar}'. Only ${pots} left.`;
    }
    catalog.get(plantObj)[potSize] -= noToSell;
    return 'Catalog successfully updated.';
}

const removePlant = plant => {
    return catalog.delete(plant);
}

// run each value-key:
const displayCatalog = () => {
    let result = '';
    catalog.forEach((value, key) => {
        result += 
        `${key.
            scientificName} 
            '${key.cultivar}
            ': ${value['small']} 
            S, ${value['medium']} 
            M, ${value['large']} L\n`;
    });
    return result
}

const displayPlantsSet = () => {
    const plantsArr = [ballerina.commonName, prettyPolly.commonName, willowVale.commonName, hidcote.commonName, imperialGem.commonName, royalCrown.commonName];
    const catalogSet = new Set(plantsArr);
    return catalogSet
};

const plantsSet = displayPlantsSet();
plantsSet.clear();
console.log(plantsSet.has(ballerina));
console.log(plantsSet);

// this displays the entire Map
const displayMap = () => {
    const entries = catalog.entries();
    for(const entry of entries){
        console.log(entry);
    }
}

const displayKeys = () => {
    const values = catalog.keys();
    for(const key of keys){
        console.log(key);
    }
}

const displayValues = () => {
    const values = catalog.values();
    for(const value of values){
        console.log(value);
    }
}

displayCatalog();


/*
console.log(removePlant("ballerina"));
console.log(sellPlants(ballerina, "small", 25));
console.log(catalog);
*/