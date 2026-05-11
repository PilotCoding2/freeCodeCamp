const recipes = [];

const recipe1 = {'name': 'Spaghetti Carbonara',
                'ingredients': ['spaghetti', 'Parmesan cheese',
                    'pancetta', 'black pepper'
                ],
                'cookingTime': 22,
                'totalIngredients': null,
                'difficultyLevel': ""
};

const recipe2 = {'name': 'Chicken Curry',
                'ingredients': ['chicken breast', 'coconut milk',
                    'curry powder', 'onion', 'garlic'
                ],
                'cookingTime': 42,
                'totalIngredients': null,
                'difficultyLevel': ""
};

const recipe3 = {'name': 'Vegetable Stir Fry',
                'ingredients': ['broccoli', 'carrot', 'bell pepper'],
                'cookingTime': 15,
                'totalIngredients': null,
                'difficultyLevel': ""
};

const recipe1Name = recipe1.name;
const recipe2CookingTime = recipe2.cookingTime;
const recipe3Ingredients = recipe3.ingredients;

console.log(recipe1Name);
console.log(recipe2CookingTime);
console.log(recipe3Ingredients);

recipes.push(recipe1);
recipes.push(recipe2);
recipes.push(recipe3);

const getTotalIngredients = (recipe) => {
    return recipe.length;
}

const getDifficultyLevel = (time) => {
    if(time <= 30){
        return "easy";
    } else if(time <= 60){
        return "medium";
    } else {
        return "hard";
    }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);