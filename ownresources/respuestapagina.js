// Respuestas de los ENDPOINTS permitidos:

//https://api.spoonacular.com/recipes/complexSearch?apiKey=26623d87ef014d3daeab072510ec275a
/*
{
    "results": [
    {
    "id": 716426,
    "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
    "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 715594,
    "title": "Homemade Garlic and Basil French Fries",
    "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 715497,
    "title": "Berry Banana Breakfast Smoothie",
    "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 644387,
    "title": "Garlicky Kale",
    "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 716268,
    "title": "African Chicken Peanut Stew",
    "image": "https://spoonacular.com/recipeImages/716268-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 716381,
    "title": "Nigerian Snail Stew",
    "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 782601,
    "title": "Red Kidney Bean Jambalaya",
    "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 794349,
    "title": "Broccoli and Chickpea Rice Salad",
    "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 715446,
    "title": "Slow Cooker Beef Stew",
    "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
    "imageType": "jpg"
    },
    {
    "id": 715415,
    "title": "Red Lentil Soup with Chicken and Turnips",
    "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
    "imageType": "jpg"
    }
    ],
    "offset": 0,
    "number": 10,
    "totalResults": 5223
    }

//https://api.spoonacular.com/recipes/716416/information?apiKey=26623d87ef014d3daeab072510ec275a
{
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 7,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 265,
    "healthScore": 27,
    "creditsText": "Full Belly Sisters",
    "license": "CC BY-SA 3.0",
    "sourceName": "Full Belly Sisters",
    "pricePerServing": 525.81,
    "extendedIngredients": [
    {
    "id": 2069,
    "aisle": "Oil, Vinegar, Salad Dressing",
    "image": "balsamic-vinegar.jpg",
    "consistency": "LIQUID",
    "name": "balsamic vinegar",
    "nameClean": "balsamic vinegar",
    "original": "1-2T balsamic vinegar",
    "originalName": "balsamic vinegar",
    "amount": 1.0,
    "unit": "T",
    "meta": [ ],
    "measures": {
    "us": {
    "amount": 1.0,
    "unitShort": "Tbsp",
    "unitLong": "Tbsp"
    },
    "metric": {
    "amount": 1.0,
    "unitShort": "Tbsp",
    "unitLong": "Tbsp"
    }
    }
    },
    {
    "id": 1034053,
    "aisle": "Oil, Vinegar, Salad Dressing",
    "image": "olive-oil.jpg",
    "consistency": "LIQUID",
    "name": "extra virgin olive oil",
    "nameClean": "extra virgin olive oil",
    "original": "2t extra virgin olive oil",
    "originalName": "extra virgin olive oil",
    "amount": 2.0,
    "unit": "t",
    "meta": [ ],
    "measures": {
    "us": {
    "amount": 2.0,
    "unitShort": "tsps",
    "unitLong": "teaspoons"
    },
    "metric": {
    "amount": 2.0,
    "unitShort": "tsps",
    "unitLong": "teaspoons"
    }
    }
    },
    {
    "id": 1019,
    "aisle": "Cheese",
    "image": "feta.png",
    "consistency": "SOLID",
    "name": "feta cheese",
    "nameClean": "feta cheese",
    "original": "1-2 ounces crumbled feta cheese",
    "originalName": "crumbled feta cheese",
    "amount": 1.0,
    "unit": "ounces",
    "meta": [
    "crumbled"
    ],
    "measures": {
    "us": {
    "amount": 1.0,
    "unitShort": "oz",
    "unitLong": "ounce"
    },
    "metric": {
    "amount": 28.35,
    "unitShort": "g",
    "unitLong": "grams"
    }
    }
    },
    {
    "id": 10111529,
    "aisle": "Produce",
    "image": "cherry-tomatoes.png",
    "consistency": "SOLID",
    "name": "grape tomatoes",
    "nameClean": "grape tomato",
    "original": "about 2 cups mini heirloom or grape tomatoes",
    "originalName": "about mini heirloom or grape tomatoes",
    "amount": 2.0,
    "unit": "cups",
    "meta": [
    "mini"
    ],
    "measures": {
    "us": {
    "amount": 2.0,
    "unitShort": "cups",
    "unitLong": "cups"
    },
    "metric": {
    "amount": 473.176,
    "unitShort": "ml",
    "unitLong": "milliliters"
    }
    }
    },
    {
    "id": 10011205,
    "aisle": "Produce",
    "image": "cucumber.jpg",
    "consistency": "SOLID",
    "name": "persian cucumber",
    "nameClean": "persian cucumber",
    "original": "1 kirby (aka pickling) or persian cucumber",
    "originalName": "kirby (aka pickling) or persian cucumber",
    "amount": 1.0,
    "unit": "",
    "meta": [
    "(aka pickling)"
    ],
    "measures": {
    "us": {
    "amount": 1.0,
    "unitShort": "",
    "unitLong": ""
    },
    "metric": {
    "amount": 1.0,
    "unitShort": "",
    "unitLong": ""
    }
    }
    },
    {
    "id": 10011282,
    "aisle": "Produce",
    "image": "red-onion.png",
    "consistency": "SOLID",
    "name": "red onion",
    "nameClean": "red onion",
    "original": "about 1/3c thinly sliced red onion",
    "originalName": "about thinly sliced red onion",
    "amount": 0.33333334,
    "unit": "c",
    "meta": [
    "red",
    "thinly sliced"
    ],
    "measures": {
    "us": {
    "amount": 0.333,
    "unitShort": "cups",
    "unitLong": "cups"
    },
    "metric": {
    "amount": 78.863,
    "unitShort": "ml",
    "unitLong": "milliliters"
    }
    }
    },
    {
    "id": 1102047,
    "aisle": "Spices and Seasonings",
    "image": "salt-and-pepper.jpg",
    "consistency": "SOLID",
    "name": "salt and pepper",
    "nameClean": "salt and pepper",
    "original": "salt and pepper, to taste",
    "originalName": "salt and pepper, to taste",
    "amount": 1.0,
    "unit": "serving",
    "meta": [
    "to taste"
    ],
    "measures": {
    "us": {
    "amount": 1.0,
    "unitShort": "serving",
    "unitLong": "serving"
    },
    "metric": {
    "amount": 1.0,
    "unitShort": "serving",
    "unitLong": "serving"
    }
    }
    }
    ],
    "id": 716416,
    "title": "Tomato, Cucumber & Onion Salad with Feta Cheese: Real Convenience Food",
    "readyInMinutes": 45,
    "servings": 1,
    "sourceUrl": "http://fullbellysisters.blogspot.com/2011/08/tomato-cucumber-onion-salad-with-feta.html",
    "image": "https://spoonacular.com/recipeImages/716416-556x370.jpg",
    "imageType": "jpg",
    "summary": "You can never have too many side dish recipes, so give Tomato, Cucumber & Onion Salad with Feta Cheese: Real Convenience Food a try. This recipe serves 1 and costs $5.34 per serving. One serving contains <b>262 calories</b>, <b>8g of protein</b>, and <b>16g of fat</b>. If you have onion, extra virgin olive oil, feta cheese, and a few other ingredients on hand, you can make it. 265 people were impressed by this recipe. It is a good option if you're following a <b>gluten free, primal, and vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-716406\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-pear-soup-real-convenience-food-716415\">Butternut Squash & Pear Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/tomato-cucumber-and-onion-salad-with-feta-vinaigrette-23013\">Tomato, Cucumber And Onion Salad With Feta Vinaigrette</a> for similar recipes.",
    "cuisines": [ ],
    "dishTypes": [
    "salad"
    ],
    "diets": [
    "gluten free",
    "lacto ovo vegetarian",
    "primal"
    ],
    "occasions": [ ],
    "winePairing": { },
    "instructions": "",
    "analyzedInstructions": [ ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/tomato-cucumber-onion-salad-with-feta-cheese-real-convenience-food-716416"
    }
    */