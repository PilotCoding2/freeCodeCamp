const recipes = new Map();

const addRecipe = name => {
    if(!name || name === "") return "Recipe name cannot be empty."
    
    if(!recipes.has(name)){
        recipes.set(name, new Set())
        return `Recipe "${name}" created.`
    } else {
        return `Recipe "${name}" already exists.`
    }
}

const addIngredient = (recipeName, ingredient) => {
    if(!recipes.has(recipeName)) return `Recipe "${recipeName}" not found.`

    const recipeBook = recipes.get(recipeName);
    if(recipeBook.has(ingredient)){
        return `"${ingredient}" is already in ${recipeName}`;
    } else {
        recipeBook.add(ingredient);
        return `Added "${ingredient}" to ${recipeName}.`;
    }
}

const getIngredientCount = recipeName => {
    if(!recipes.has(recipeName)) return -1;

    //return [...recipes].find(([name, ingredient]) => name === recipeName)?.[1].size;
    return recipes.get(recipeName).size;
}

const findRecipesWithIngredient = ingredient => {
    let arr = [];
    recipes.forEach((value, key) => {
        let recipeBook = recipes.get(key);
        if(recipeBook.has(ingredient)) arr.push(key);
    });
    return arr;
}

const getCommonIngredients = (recipeA, recipeB) => {
    const ingredientsA = recipes?.get(recipeA);
    const ingredientsB = recipes?.get(recipeB);

    if(!ingredientsA || !ingredientsB) return [];

    return Array.from(ingredientsA).filter(ingredients => ingredientsB.has(ingredients));
}