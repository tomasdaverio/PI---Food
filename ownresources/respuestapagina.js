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


//https://api.spoonacular.com/recipes/complexSearch?apiKey=26623d87ef014d3daeab072510ec275a&addRecipeInformation=true
    /*

    {
"results": [
{
"vegetarian": true,
"vegan": true,
"glutenFree": true,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": true,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 4,
"gaps": "no",
"preparationMinutes": -1,
"cookingMinutes": -1,
"aggregateLikes": 3689,
"healthScore": 76,
"creditsText": "Full Belly Sisters",
"license": "CC BY-SA 3.0",
"sourceName": "Full Belly Sisters",
"pricePerServing": 112.39,
"id": 716426,
"title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
"readyInMinutes": 30,
"servings": 8,
"sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
"image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
"imageType": "jpg",
"summary": "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199\">Vegetable Fried Brown Rice</a>, <a href=\"https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261\">Vegetable Fried Cauliflower Rice</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042\">Easy Vegetable Fried Brown Rice with Egg</a>.",
"cuisines": [
"Chinese",
"Asian"
],
"dishTypes": [
"side dish"
],
"diets": [
"gluten free",
"dairy free",
"lacto ovo vegetarian",
"vegan"
],
"occasions": [ ],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
"ingredients": [
{
"id": 10011135,
"name": "cauliflower florets",
"localizedName": "cauliflower florets",
"image": "cauliflower.jpg"
},
{
"id": 10111135,
"name": "cauliflower rice",
"localizedName": "cauliflower rice",
"image": "cauliflower.jpg"
},
{
"id": 11135,
"name": "cauliflower",
"localizedName": "cauliflower",
"image": "cauliflower.jpg"
},
{
"id": 20028,
"name": "couscous",
"localizedName": "couscous",
"image": "couscous-cooked.jpg"
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [
{
"id": 404771,
"name": "food processor",
"localizedName": "food processor",
"image": "food-processor.png"
}
]
},
{
"number": 2,
"step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
"ingredients": [
{
"id": 1001,
"name": "butter",
"localizedName": "butter",
"image": "butter-sliced.jpg"
},
{
"id": 4582,
"name": "cooking oil",
"localizedName": "cooking oil",
"image": "vegetable-oil.jpg"
}
],
"equipment": [
{
"id": 404645,
"name": "frying pan",
"localizedName": "frying pan",
"image": "pan.png"
}
]
},
{
"number": 3,
"step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
"ingredients": [
{
"id": 11291,
"name": "green onions",
"localizedName": "green onions",
"image": "spring-onions.jpg"
},
{
"id": 11215,
"name": "garlic",
"localizedName": "garlic",
"image": "garlic.png"
}
],
"equipment": [ ]
},
{
"number": 4,
"step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
"ingredients": [
{
"id": 11135,
"name": "cauliflower",
"localizedName": "cauliflower",
"image": "cauliflower.jpg"
},
{
"id": 0,
"name": "spread",
"localizedName": "spread",
"image": ""
},
{
"id": 4582,
"name": "cooking oil",
"localizedName": "cooking oil",
"image": "vegetable-oil.jpg"
}
],
"equipment": [
{
"id": 404645,
"name": "frying pan",
"localizedName": "frying pan",
"image": "pan.png"
}
]
},
{
"number": 5,
"step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
"ingredients": [
{
"id": 4047,
"name": "coconut oil",
"localizedName": "coconut oil",
"image": "oil-coconut.jpg"
},
{
"id": 1001,
"name": "butter",
"localizedName": "butter",
"image": "butter-sliced.jpg"
},
{
"id": 0,
"name": "spread",
"localizedName": "spread",
"image": ""
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [
{
"id": 404645,
"name": "frying pan",
"localizedName": "frying pan",
"image": "pan.png"
}
]
},
{
"number": 6,
"step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
"ingredients": [
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [ ],
"length": {
"number": 2,
"unit": "minutes"
}
},
{
"number": 7,
"step": "Add the peas and broccoli and stir again.",
"ingredients": [
{
"id": 11090,
"name": "broccoli",
"localizedName": "broccoli",
"image": "broccoli.jpg"
},
{
"id": 11304,
"name": "peas",
"localizedName": "peas",
"image": "peas.jpg"
}
],
"equipment": [ ]
},
{
"number": 8,
"step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
"ingredients": [
{
"id": 4058,
"name": "sesame oil",
"localizedName": "sesame oil",
"image": "sesame-oil.png"
},
{
"id": 16124,
"name": "soy sauce",
"localizedName": "soy sauce",
"image": "soy-sauce.jpg"
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [ ]
},
{
"number": 9,
"step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
"ingredients": [
{
"id": 12023,
"name": "sesame seeds",
"localizedName": "sesame seeds",
"image": "sesame-seeds.png"
},
{
"id": 16124,
"name": "soy sauce",
"localizedName": "soy sauce",
"image": "soy-sauce.jpg"
},
{
"id": 11291,
"name": "green onions",
"localizedName": "green onions",
"image": "spring-onions.jpg"
},
{
"id": 5006,
"name": "whole chicken",
"localizedName": "whole chicken",
"image": "whole-chicken.jpg"
},
{
"id": 18070,
"name": "toast",
"localizedName": "toast",
"image": "toast"
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
},
{
"id": 2047,
"name": "salt",
"localizedName": "salt",
"image": "salt.jpg"
}
],
"equipment": [
{
"id": 404645,
"name": "frying pan",
"localizedName": "frying pan",
"image": "pan.png"
}
]
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
},
{
"vegetarian": true,
"vegan": true,
"glutenFree": false,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": true,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 19,
"gaps": "no",
"preparationMinutes": -1,
"cookingMinutes": -1,
"aggregateLikes": 1669,
"healthScore": 77,
"creditsText": "Jen West",
"sourceName": "Pink When",
"pricePerServing": 83.23,
"id": 715594,
"title": "Homemade Garlic and Basil French Fries",
"readyInMinutes": 45,
"servings": 2,
"sourceUrl": "http://www.pinkwhen.com/homemade-french-fries/",
"image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
"imageType": "jpg",
"summary": "The recipe Homemade Garlic and Basil French Fries is ready <b>in roughly 45 minutes</b> and is definitely a super <b>vegan</b> option for lovers of American food. One serving contains <b>596 calories</b>, <b>18g of protein</b>, and <b>15g of fat</b>. For <b>83 cents per serving</b>, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/homemade-french-fries-with-fresh-garlic-and-dill-494220\">Homemade French Fries with Fresh Garlic and Dill</a>, <a href=\"https://spoonacular.com/recipes/roasted-garlic-french-fries-519898\">Roasted Garlic French Fries</a>, and <a href=\"https://spoonacular.com/recipes/sweet-potato-fries-with-basil-salt-and-garlic-mayonnaise-120735\">Sweet Potato Fries With Basil Salt and Garlic Mayonnaise</a> for similar recipes.",
"cuisines": [
"American"
],
"dishTypes": [
"lunch",
"main course",
"main dish",
"dinner"
],
"diets": [
"dairy free",
"lacto ovo vegetarian",
"vegan"
],
"occasions": [ ],
"analyzedInstructions": [ ],
"spoonacularSourceUrl": "https://spoonacular.com/homemade-garlic-and-basil-french-fries-715594"
},
{
"vegetarian": true,
"vegan": false,
"glutenFree": false,
"dairyFree": false,
"veryHealthy": true,
"cheap": false,
"veryPopular": true,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 15,
"gaps": "no",
"preparationMinutes": 5,
"cookingMinutes": 0,
"aggregateLikes": 689,
"healthScore": 63,
"creditsText": "Jen West",
"sourceName": "Pink When",
"pricePerServing": 204.29,
"id": 715497,
"title": "Berry Banana Breakfast Smoothie",
"readyInMinutes": 5,
"servings": 1,
"sourceUrl": "http://www.pinkwhen.com/berry-banana-breakfast-smoothie/",
"image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
"imageType": "jpg",
"summary": "If you have around <b>5 minutes</b> to spend in the kitchen, Berry Banana Breakfast Smoothie might be a tremendous <b>lacto ovo vegetarian</b> recipe to try. This recipe makes 1 servings with <b>501 calories</b>, <b>21g of protein</b>, and <b>11g of fat</b> each. For <b>$2.19 per serving</b>, this recipe <b>covers 32%</b> of your daily requirements of vitamins and minerals. 688 people found this recipe to be tasty and satisfying. It is brought to you by Pink When. Head to the store and pick up graham crackers, soy milk, banana, and a few other things to make it today. It works well as a morn meal. Overall, this recipe earns a <b>super spoonacular score of 100%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-249239\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-and-banana-oat-breakfast-smoothie-626817\">Berry and Bananan Oat Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-breakfast-smoothie-774875\">Berry Breakfast Smoothie</a>.",
"cuisines": [ ],
"dishTypes": [
"morning meal",
"brunch",
"breakfast"
],
"diets": [
"lacto ovo vegetarian"
],
"occasions": [ ],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "Take some yogurt in your favorite flavor and add 1 container to your blender.",
"ingredients": [
{
"id": 1116,
"name": "yogurt",
"localizedName": "yogurt",
"image": "plain-yogurt.jpg"
}
],
"equipment": [
{
"id": 404726,
"name": "blender",
"localizedName": "blender",
"image": "blender.png"
}
]
},
{
"number": 2,
"step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
"ingredients": [
{
"id": 10018617,
"name": "graham cracker crumbs",
"localizedName": "graham cracker crumbs",
"image": "graham-crackers.jpg"
},
{
"id": 16223,
"name": "soymilk",
"localizedName": "soymilk",
"image": "soy-milk.jpg"
},
{
"id": 1009054,
"name": "berries",
"localizedName": "berries",
"image": "berries-mixed.jpg"
},
{
"id": 9040,
"name": "banana",
"localizedName": "banana",
"image": "bananas.jpg"
}
],
"equipment": [ ]
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/berry-banana-breakfast-smoothie-715497"
},
{
"vegetarian": true,
"vegan": true,
"glutenFree": true,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": false,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 5,
"gaps": "no",
"preparationMinutes": -1,
"cookingMinutes": -1,
"aggregateLikes": 19,
"healthScore": 92,
"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
"license": "CC BY 3.0",
"sourceName": "Foodista",
"pricePerServing": 69.09,
"id": 644387,
"title": "Garlicky Kale",
"readyInMinutes": 45,
"servings": 2,
"sourceUrl": "http://www.foodista.com/recipe/J2FTJBF7/garlicky-kale",
"image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
"imageType": "jpg",
"summary": "Garlicky Kale might be just the side dish you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 2 and costs <b>69 cents per serving</b>. One serving contains <b>179 calories</b>, <b>3g of protein</b>, and <b>15g of fat</b>. A few people made this recipe, and 17 would say it hit the spot. If you have olive oil, garlic, curly kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is awesome. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-14910\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-crostini-15010\">Garlicky Kale Crostini</a> for similar recipes.",
"cuisines": [ ],
"dishTypes": [
"side dish"
],
"diets": [
"gluten free",
"dairy free",
"paleolithic",
"lacto ovo vegetarian",
"primal",
"whole 30",
"vegan"
],
"occasions": [ ],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "Heat the olive oil in a large pot over medium heat.",
"ingredients": [
{
"id": 4053,
"name": "olive oil",
"localizedName": "olive oil",
"image": "olive-oil.jpg"
}
],
"equipment": [
{
"id": 404752,
"name": "pot",
"localizedName": "pot",
"image": "stock-pot.jpg"
}
]
},
{
"number": 2,
"step": "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
"ingredients": [
{
"id": 11233,
"name": "kale",
"localizedName": "kale",
"image": "kale.jpg"
}
],
"equipment": [ ]
},
{
"number": 3,
"step": "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
"ingredients": [
{
"id": 2053,
"name": "vinegar",
"localizedName": "vinegar",
"image": "vinegar-(white).jpg"
},
{
"id": 11215,
"name": "garlic",
"localizedName": "garlic",
"image": "garlic.png"
}
],
"equipment": [ ]
},
{
"number": 4,
"step": "Serve hot.",
"ingredients": [ ],
"equipment": [ ]
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/garlicky-kale-644387"
},
{
"vegetarian": false,
"vegan": false,
"glutenFree": true,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": false,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 32,
"gaps": "no",
"preparationMinutes": -1,
"cookingMinutes": -1,
"aggregateLikes": 124,
"healthScore": 100,
"creditsText": "afrolems.com",
"sourceName": "afrolems.com",
"pricePerServing": 355.78,
"id": 716268,
"title": "African Chicken Peanut Stew",
"readyInMinutes": 45,
"servings": 1,
"sourceUrl": "http://www.afrolems.com/2014/03/18/african-chicken-peanut-stew-recipe/",
"image": "https://spoonacular.com/recipeImages/716268-312x231.jpg",
"imageType": "jpg",
"summary": "Need a <b>gluten free and dairy free main course</b>? African Chicken Peanut Stew could be a tremendous recipe to try. This recipe makes 1 servings with <b>1377 calories</b>, <b>75g of protein</b>, and <b>102g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 62%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 124 people have tried and liked this recipe. Head to the store and pick up bell peppers, tomato, pepper, and a few other things to make it today. To use up the tomato you could follow this main course with the <a href=\"https://spoonacular.com/recipes/pink-peony-popcorn-balls-129348\">Pink Peony Popcorn Balls</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/african-chicken-peanut-stew-245461\">African Chicken Peanut Stew</a>, <a href=\"https://spoonacular.com/recipes/west-african-peanut-chicken-stew-163315\">West African Peanut-Chicken Stew</a>, and <a href=\"https://spoonacular.com/recipes/one-pot-african-peanut-stew-854978\">One-Pot African Peanut Stew</a> for similar recipes.",
"cuisines": [
"African"
],
"dishTypes": [
"lunch",
"main course",
"main dish",
"dinner"
],
"diets": [
"gluten free",
"dairy free"
],
"occasions": [
"fall",
"winter"
],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic.",
"ingredients": [
{
"id": 11507,
"name": "sweet potato",
"localizedName": "sweet potato",
"image": "sweet-potato.png"
},
{
"id": 1042027,
"name": "seasoning",
"localizedName": "seasoning",
"image": "seasoning.png"
},
{
"id": 11352,
"name": "potato",
"localizedName": "potato",
"image": "potatoes-yukon-gold.png"
},
{
"id": 11529,
"name": "tomato",
"localizedName": "tomato",
"image": "tomato.png"
},
{
"id": 5006,
"name": "whole chicken",
"localizedName": "whole chicken",
"image": "whole-chicken.jpg"
},
{
"id": 11215,
"name": "garlic",
"localizedName": "garlic",
"image": "garlic.png"
},
{
"id": 11216,
"name": "ginger",
"localizedName": "ginger",
"image": "ginger.png"
},
{
"id": 11282,
"name": "onion",
"localizedName": "onion",
"image": "brown-onion.png"
},
{
"id": 1002030,
"name": "pepper",
"localizedName": "pepper",
"image": "pepper.jpg"
},
{
"id": 1006615,
"name": "stock",
"localizedName": "stock",
"image": "chicken-broth.png"
},
{
"id": 2047,
"name": "salt",
"localizedName": "salt",
"image": "salt.jpg"
},
{
"id": 4582,
"name": "cooking oil",
"localizedName": "cooking oil",
"image": "vegetable-oil.jpg"
}
],
"equipment": [
{
"id": 404783,
"name": "bowl",
"localizedName": "bowl",
"image": "bowl.jpg"
},
{
"id": 404752,
"name": "pot",
"localizedName": "pot",
"image": "stock-pot.jpg"
}
],
"length": {
"number": 10,
"unit": "minutes"
}
},
{
"number": 2,
"step": "Add your seasoning, curry, thyme, parsley, salt and pepper to the pot.",
"ingredients": [
{
"id": 1102047,
"name": "salt and pepper",
"localizedName": "salt and pepper",
"image": "salt-and-pepper.jpg"
},
{
"id": 1042027,
"name": "seasoning",
"localizedName": "seasoning",
"image": "seasoning.png"
},
{
"id": 11297,
"name": "parsley",
"localizedName": "parsley",
"image": "parsley.jpg"
},
{
"id": 2015,
"name": "curry powder",
"localizedName": "curry powder",
"image": "curry-powder.jpg"
},
{
"id": 2049,
"name": "thyme",
"localizedName": "thyme",
"image": "thyme.jpg"
}
],
"equipment": [
{
"id": 404752,
"name": "pot",
"localizedName": "pot",
"image": "stock-pot.jpg"
}
]
},
{
"number": 3,
"step": "Pour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it.",
"ingredients": [
{
"id": 16098,
"name": "peanut butter",
"localizedName": "peanut butter",
"image": "peanut-butter.png"
},
{
"id": 11352,
"name": "potato",
"localizedName": "potato",
"image": "potatoes-yukon-gold.png"
},
{
"id": 5006,
"name": "whole chicken",
"localizedName": "whole chicken",
"image": "whole-chicken.jpg"
},
{
"id": 0,
"name": "sauce",
"localizedName": "sauce",
"image": ""
},
{
"id": 1006615,
"name": "stock",
"localizedName": "stock",
"image": "chicken-broth.png"
},
{
"id": 14412,
"name": "water",
"localizedName": "water",
"image": "water.png"
}
],
"equipment": [ ],
"length": {
"number": 10,
"unit": "minutes"
}
},
{
"number": 4,
"step": "Serve with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.   ",
"ingredients": [
{
"id": 11507,
"name": "sweet potato",
"localizedName": "sweet potato",
"image": "sweet-potato.png"
},
{
"id": 10211821,
"name": "bell pepper",
"localizedName": "bell pepper",
"image": "bell-pepper-orange.png"
},
{
"id": 10220444,
"name": "white rice",
"localizedName": "white rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [ ]
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/african-chicken-peanut-stew-716268"
},
{
"vegetarian": false,
"vegan": false,
"glutenFree": true,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": true,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 3,
"gaps": "no",
"preparationMinutes": -1,
"cookingMinutes": -1,
"aggregateLikes": 361,
"healthScore": 89,
"creditsText": "Afrolems",
"license": "CC BY 4.0",
"sourceName": "Afrolems",
"pricePerServing": 908.06,
"id": 716381,
"title": "Nigerian Snail Stew",
"readyInMinutes": 45,
"servings": 1,
"sourceUrl": "http://www.afrolems.com/2015/12/08/nigerian-snail-stew/",
"image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
"imageType": "jpg",
"summary": "Nigerian Snail Stew might be just the main course you are searching for. For <b>$9.08 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>363 calories</b>, <b>23g of protein</b>, and <b>5g of fat</b> each. Plenty of people made this recipe, and 361 would say it hit the spot. If you have chili powder, snails, limes, and a few other ingredients on hand, you can make it. To use up the ice cubes you could follow this main course with the <a href=\"https://spoonacular.com/recipes/nectarine-blackberry-and-pecan-sundaes-50465\">Nectarine, Blackberry, and Pecan Sundaes</a> as a dessert. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/nigerian-kidney-bean-stew-with-a-peanut-sauce-112643\">Nigerian Kidney Bean Stew With a Peanut Sauce</a>, <a href=\"https://spoonacular.com/recipes/little-snail-rolls-369096\">Little Snail Rolls</a>, and <a href=\"https://spoonacular.com/recipes/maple-snail-cookies-76877\">Maple Snail Cookies</a> for similar recipes.",
"cuisines": [ ],
"dishTypes": [
"lunch",
"main course",
"main dish",
"dinner"
],
"diets": [
"gluten free",
"dairy free",
"paleolithic",
"primal",
"whole 30"
],
"occasions": [
"fall",
"winter"
],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "In a bowl, wash the snails with lime and salt till all the slime is gone.",
"ingredients": [
{
"id": 90560,
"name": "escargot",
"localizedName": "escargot",
"image": "escargot.png"
},
{
"id": 9159,
"name": "lime",
"localizedName": "lime",
"image": "lime.jpg"
},
{
"id": 2047,
"name": "salt",
"localizedName": "salt",
"image": "salt.jpg"
}
],
"equipment": [
{
"id": 404783,
"name": "bowl",
"localizedName": "bowl",
"image": "bowl.jpg"
}
]
},
{
"number": 2,
"step": "Place the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat.",
"ingredients": [
{
"id": 0,
"name": "seasoning cube",
"localizedName": "seasoning cube",
"image": "stock-cube.jpg"
},
{
"id": 2009,
"name": "chili powder",
"localizedName": "chili powder",
"image": "chili-powder.jpg"
},
{
"id": 10211821,
"name": "bell pepper",
"localizedName": "bell pepper",
"image": "bell-pepper-orange.png"
},
{
"id": 11529,
"name": "tomato",
"localizedName": "tomato",
"image": "tomato.png"
},
{
"id": 10111333,
"name": "peppers",
"localizedName": "peppers",
"image": "green-pepper.jpg"
},
{
"id": 11215,
"name": "garlic",
"localizedName": "garlic",
"image": "garlic.png"
},
{
"id": 11282,
"name": "onion",
"localizedName": "onion",
"image": "brown-onion.png"
},
{
"id": 10014052,
"name": "scotch whiskey",
"localizedName": "scotch whiskey",
"image": "whiskey-bottle.jpg"
},
{
"id": 14412,
"name": "water",
"localizedName": "water",
"image": "water.png"
},
{
"id": 2047,
"name": "salt",
"localizedName": "salt",
"image": "salt.jpg"
},
{
"id": 4582,
"name": "cooking oil",
"localizedName": "cooking oil",
"image": "vegetable-oil.jpg"
}
],
"equipment": [
{
"id": 404732,
"name": "wooden spoon",
"localizedName": "wooden spoon",
"image": "wooden-spoon.jpg"
},
{
"id": 404752,
"name": "pot",
"localizedName": "pot",
"image": "stock-pot.jpg"
}
],
"length": {
"number": 18,
"unit": "minutes"
}
},
{
"number": 3,
"step": "Pour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat.",
"ingredients": [
{
"id": 1002030,
"name": "pepper",
"localizedName": "pepper",
"image": "pepper.jpg"
},
{
"id": 11529,
"name": "tomato",
"localizedName": "tomato",
"image": "tomato.png"
}
],
"equipment": [ ],
"length": {
"number": 10,
"unit": "minutes"
}
},
{
"number": 4,
"step": "Pour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat.",
"ingredients": [
{
"id": 1006615,
"name": "stock",
"localizedName": "stock",
"image": "chicken-broth.png"
}
],
"equipment": [ ],
"length": {
"number": 5,
"unit": "minutes"
}
},
{
"number": 5,
"step": "Add your seasoning cubes and taste for salt.",
"ingredients": [
{
"id": 0,
"name": "seasoning cube",
"localizedName": "seasoning cube",
"image": "stock-cube.jpg"
},
{
"id": 2047,
"name": "salt",
"localizedName": "salt",
"image": "salt.jpg"
}
],
"equipment": [ ]
},
{
"number": 6,
"step": "Add your snails and stir in and allow to stew for 2-4 minutes more on medium heat.",
"ingredients": [
{
"id": 90560,
"name": "escargot",
"localizedName": "escargot",
"image": "escargot.png"
},
{
"id": 0,
"name": "stew",
"localizedName": "stew",
"image": ""
}
],
"equipment": [ ],
"length": {
"number": 4,
"unit": "minutes"
}
},
{
"number": 7,
"step": "Serve with Rice, Pasta, Plantain, Yams or Potatoes.",
"ingredients": [
{
"id": 99295,
"name": "plantain",
"localizedName": "plantain",
"image": "plantains.jpg"
},
{
"id": 11352,
"name": "potato",
"localizedName": "potato",
"image": "potatoes-yukon-gold.png"
},
{
"id": 20420,
"name": "pasta",
"localizedName": "pasta",
"image": "fusilli.jpg"
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
},
{
"id": 11601,
"name": "yam",
"localizedName": "yam",
"image": "sweet-potato.png"
}
],
"equipment": [ ]
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/nigerian-snail-stew-716381"
},
{
"vegetarian": true,
"vegan": true,
"glutenFree": true,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": false,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 13,
"gaps": "no",
"preparationMinutes": -1,
"cookingMinutes": -1,
"aggregateLikes": 53,
"healthScore": 100,
"creditsText": "blogspot.com",
"sourceName": "blogspot.com",
"pricePerServing": 185.77,
"id": 782601,
"title": "Red Kidney Bean Jambalaya",
"readyInMinutes": 45,
"servings": 6,
"sourceUrl": "http://foodandspice.blogspot.com/2016/05/red-kidney-bean-jambalaya.html",
"image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
"imageType": "jpg",
"summary": "Red Kidney Bean Jambalaya might be just the <b>Creole</b> recipe you are searching for. One serving contains <b>538 calories</b>, <b>21g of protein</b>, and <b>8g of fat</b>. For <b>$1.69 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. This recipe from foodandspice.blogspot.com has 52 fans. A few people really liked this main course. Head to the store and pick up brown rice, vegetable stock, liquid smoke, and a few other things to make it today. To use up the sea salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/raspberry-sea-salt-brownies-494161\">Raspberry Sea Salt Brownies</a> as a dessert. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/red-kidney-bean-dip-148569\">Red Kidney Bean Dip</a>, <a href=\"https://spoonacular.com/recipes/kidney-bean-dip-119992\">Kidney Bean Dip</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a> for similar recipes.",
"cuisines": [
"Creole",
"Cajun"
],
"dishTypes": [
"lunch",
"main course",
"main dish",
"dinner"
],
"diets": [
"gluten free",
"dairy free",
"lacto ovo vegetarian",
"vegan"
],
"occasions": [ ],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
"ingredients": [
{
"id": 16033,
"name": "kidney beans",
"localizedName": "kidney beans",
"image": "kidney-beans.jpg"
},
{
"id": 20040,
"name": "brown rice",
"localizedName": "brown rice",
"image": "uncooked-brown-rice.png"
},
{
"id": 14412,
"name": "water",
"localizedName": "water",
"image": "water.png"
}
],
"equipment": [
{
"id": 404783,
"name": "bowl",
"localizedName": "bowl",
"image": "bowl.jpg"
}
],
"length": {
"number": 960,
"unit": "minutes"
}
},
{
"number": 2,
"step": "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
"ingredients": [
{
"id": 16033,
"name": "kidney beans",
"localizedName": "kidney beans",
"image": "kidney-beans.jpg"
},
{
"id": 14412,
"name": "water",
"localizedName": "water",
"image": "water.png"
}
],
"equipment": [
{
"id": 404669,
"name": "sauce pan",
"localizedName": "sauce pan",
"image": "sauce-pan.jpg"
}
],
"length": {
"number": 60,
"unit": "minutes"
}
},
{
"number": 3,
"step": "Drain and set aside.",
"ingredients": [ ],
"equipment": [ ]
},
{
"number": 4,
"step": "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
"ingredients": [
{
"id": 2007,
"name": "celery seed",
"localizedName": "celery seed",
"image": "celery-seed.jpg"
},
{
"id": 11052,
"name": "green beans",
"localizedName": "green beans",
"image": "green-beans-or-string-beans.jpg"
},
{
"id": 11821,
"name": "red pepper",
"localizedName": "red pepper",
"image": "red-pepper.jpg"
},
{
"id": 11209,
"name": "eggplant",
"localizedName": "eggplant",
"image": "eggplant.png"
},
{
"id": 2023,
"name": "marjoram",
"localizedName": "marjoram",
"image": "marjoram.jpg"
},
{
"id": 11529,
"name": "tomato",
"localizedName": "tomato",
"image": "tomato.png"
},
{
"id": 11124,
"name": "carrot",
"localizedName": "carrot",
"image": "sliced-carrot.png"
},
{
"id": 11143,
"name": "celery",
"localizedName": "celery",
"image": "celery.jpg"
},
{
"id": 11215,
"name": "garlic",
"localizedName": "garlic",
"image": "garlic.png"
},
{
"id": 11282,
"name": "onion",
"localizedName": "onion",
"image": "brown-onion.png"
},
{
"id": 2049,
"name": "thyme",
"localizedName": "thyme",
"image": "thyme.jpg"
},
{
"id": 99226,
"name": "sage",
"localizedName": "sage",
"image": "fresh-sage.png"
},
{
"id": 4582,
"name": "cooking oil",
"localizedName": "cooking oil",
"image": "vegetable-oil.jpg"
}
],
"equipment": [
{
"id": 404669,
"name": "sauce pan",
"localizedName": "sauce pan",
"image": "sauce-pan.jpg"
}
],
"length": {
"number": 10,
"unit": "minutes"
}
},
{
"number": 5,
"step": "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
"ingredients": [
{
"id": 6615,
"name": "vegetable stock",
"localizedName": "vegetable stock",
"image": "chicken-broth.png"
},
{
"id": 16033,
"name": "kidney beans",
"localizedName": "kidney beans",
"image": "kidney-beans.jpg"
},
{
"id": 93627,
"name": "liquid smoke",
"localizedName": "liquid smoke",
"image": "dark-sauce.jpg"
},
{
"id": 20444,
"name": "rice",
"localizedName": "rice",
"image": "uncooked-white-rice.png"
}
],
"equipment": [ ],
"length": {
"number": 45,
"unit": "minutes"
}
},
{
"number": 6,
"step": "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
"ingredients": [
{
"id": 1102047,
"name": "salt and pepper",
"localizedName": "salt and pepper",
"image": "salt-and-pepper.jpg"
},
{
"id": 93627,
"name": "liquid smoke",
"localizedName": "liquid smoke",
"image": "dark-sauce.jpg"
},
{
"id": 1042027,
"name": "seasoning",
"localizedName": "seasoning",
"image": "seasoning.png"
},
{
"id": 1016168,
"name": "sriracha",
"localizedName": "sriracha",
"image": "hot-sauce-or-tabasco.png"
},
{
"id": 1002030,
"name": "pepper",
"localizedName": "pepper",
"image": "pepper.jpg"
},
{
"id": 1002044,
"name": "herbs",
"localizedName": "herbs",
"image": "mixed-fresh-herbs.jpg"
},
{
"id": 14412,
"name": "water",
"localizedName": "water",
"image": "water.png"
},
{
"id": 2047,
"name": "salt",
"localizedName": "salt",
"image": "salt.jpg"
},
{
"id": 0,
"name": "stew",
"localizedName": "stew",
"image": ""
}
],
"equipment": [ ]
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/red-kidney-bean-jambalaya-782601"
},
{
"vegetarian": true,
"vegan": true,
"glutenFree": true,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": false,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 14,
"gaps": "no",
"preparationMinutes": -1,
"cookingMinutes": -1,
"aggregateLikes": 44,
"healthScore": 100,
"creditsText": "blogspot.com",
"sourceName": "blogspot.com",
"pricePerServing": 137.57,
"id": 794349,
"title": "Broccoli and Chickpea Rice Salad",
"readyInMinutes": 45,
"servings": 6,
"sourceUrl": "http://foodandspice.blogspot.com/2016/07/broccoli-and-chickpea-rice-salad.html",
"image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
"imageType": "jpg",
"summary": "Need a <b>gluten free and vegan main course</b>? Broccoli and Chickpea Rice Salad could be a spectacular recipe to try. One serving contains <b>524 calories</b>, <b>19g of protein</b>, and <b>12g of fat</b>. For <b>$1.38 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up almonds, olive oil, 2 tablespoons pineapple juice (juice from canned pineapple), and a few other things to make it today. 42 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/easy-balsamic-chickpea-brown-rice-broccoli-salad-101160\">Easy Balsamic Chickpea, Brown Rice & Broccoli Salad</a>, <a href=\"https://spoonacular.com/recipes/super-easy-chickpea-brown-rice-broccoli-crockpot-casserole-584241\">Super Easy Chickpea, Brown Rice & Broccoli Crockpot Casserole</a>, and <a href=\"https://spoonacular.com/recipes/chickpea-and-broccoli-salad-29686\">Chickpean And Broccoli Salad</a>.",
"cuisines": [ ],
"dishTypes": [
"lunch",
"main course",
"main dish",
"dinner"
],
"diets": [
"gluten free",
"dairy free",
"lacto ovo vegetarian",
"vegan"
],
"occasions": [ ],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "In a large skillet, heat the oil over medium heat.",
"ingredients": [
{
"id": 4582,
"name": "cooking oil",
"localizedName": "cooking oil",
"image": "vegetable-oil.jpg"
}
],
"equipment": [
{
"id": 404645,
"name": "frying pan",
"localizedName": "frying pan",
"image": "pan.png"
}
]
},
{
"number": 2,
"step": "Add the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender.",
"ingredients": [
{
"id": 11090,
"name": "broccoli",
"localizedName": "broccoli",
"image": "broccoli.jpg"
}
],
"equipment": [ ]
},
{
"number": 3,
"step": "Add the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl.",
"ingredients": [
{
"id": 11090,
"name": "broccoli",
"localizedName": "broccoli",
"image": "broccoli.jpg"
}
],
"equipment": [
{
"id": 404661,
"name": "whisk",
"localizedName": "whisk",
"image": "whisk.png"
},
{
"id": 404783,
"name": "bowl",
"localizedName": "bowl",
"image": "bowl.jpg"
}
]
},
{
"number": 4,
"step": "Pour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve.",
"ingredients": [
{
"id": 1042027,
"name": "seasoning",
"localizedName": "seasoning",
"image": "seasoning.png"
}
],
"equipment": [ ]
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/broccoli-and-chickpea-rice-salad-794349"
},
{
"vegetarian": false,
"vegan": false,
"glutenFree": true,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": false,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 10,
"gaps": "no",
"preparationMinutes": 10,
"cookingMinutes": 480,
"aggregateLikes": 57,
"healthScore": 100,
"creditsText": "pinkwhen.com",
"sourceName": "pinkwhen.com",
"pricePerServing": 293.64,
"id": 715446,
"title": "Slow Cooker Beef Stew",
"readyInMinutes": 490,
"servings": 6,
"sourceUrl": "http://www.pinkwhen.com/slow-cooker-beef-stew-recipe/",
"image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
"imageType": "jpg",
"summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One portion of this dish contains approximately <b>52g of protein</b>, <b>16g of fat</b>, and a total of <b>528 calories</b>. This recipe serves 6. For <b>$2.94 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. 58 people found this recipe to be scrumptious and satisfying. It works well as a reasonably priced main course for <b>Winter</b>. A mixture of canned beef broth, carrots, green onions, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around <b>8 hours and 10 minutes</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/butternut-squash-beef-stew-instant-pot-pressure-cooker-or-slow-cooker-840470\">Butternut Squash Beef Stew (Instant Pot, Pressure Cooker or Slow Cooker)</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-990111\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-770894\">Slow-Cooker Beef Stew</a>.",
"cuisines": [ ],
"dishTypes": [
"lunch",
"main course",
"main dish",
"dinner"
],
"diets": [
"gluten free",
"dairy free"
],
"occasions": [
"fall",
"winter"
],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "To get started, heat your slow cooker to low.",
"ingredients": [ ],
"equipment": [
{
"id": 404718,
"name": "slow cooker",
"localizedName": "slow cooker",
"image": "slow-cooker.jpg"
}
]
},
{
"number": 2,
"step": "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
"ingredients": [
{
"id": 6147,
"name": "cream of mushroom soup",
"localizedName": "cream of mushroom soup",
"image": "cream-of-mushroom-soup.png"
},
{
"id": 6008,
"name": "beef broth",
"localizedName": "beef broth",
"image": "beef-broth.png"
},
{
"id": 1042027,
"name": "seasoning",
"localizedName": "seasoning",
"image": "seasoning.png"
},
{
"id": 14412,
"name": "water",
"localizedName": "water",
"image": "water.png"
}
],
"equipment": [ ]
},
{
"number": 3,
"step": "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them.",
"ingredients": [
{
"id": 1102047,
"name": "salt and pepper",
"localizedName": "salt and pepper",
"image": "salt-and-pepper.jpg"
},
{
"id": 11291,
"name": "green onions",
"localizedName": "green onions",
"image": "spring-onions.jpg"
},
{
"id": 10023618,
"name": "beef stew meat",
"localizedName": "beef stew meat",
"image": "beef-cubes-raw.png"
},
{
"id": 11352,
"name": "potato",
"localizedName": "potato",
"image": "potatoes-yukon-gold.png"
},
{
"id": 11124,
"name": "carrot",
"localizedName": "carrot",
"image": "sliced-carrot.png"
},
{
"id": 11143,
"name": "celery",
"localizedName": "celery",
"image": "celery.jpg"
},
{
"id": 11282,
"name": "onion",
"localizedName": "onion",
"image": "brown-onion.png"
}
],
"equipment": [ ],
"length": {
"number": 480,
"unit": "minutes"
}
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-beef-stew-715446"
},
{
"vegetarian": false,
"vegan": false,
"glutenFree": true,
"dairyFree": true,
"veryHealthy": true,
"cheap": false,
"veryPopular": true,
"sustainable": false,
"lowFodmap": false,
"weightWatcherSmartPoints": 11,
"gaps": "no",
"preparationMinutes": 10,
"cookingMinutes": 45,
"aggregateLikes": 1866,
"healthScore": 73,
"creditsText": "Jen West",
"sourceName": "Pink When",
"pricePerServing": 276.67,
"id": 715415,
"title": "Red Lentil Soup with Chicken and Turnips",
"readyInMinutes": 55,
"servings": 8,
"sourceUrl": "http://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
"image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
"imageType": "jpg",
"summary": "Need a <b>gluten free and dairy free main course</b>? Red Lentil Soup with Chicken and Turnips could be an outstanding recipe to try. For <b>$2.8 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. One serving contains <b>448 calories</b>, <b>23g of protein</b>, and <b>20g of fat</b>. Head to the store and pick up garlic, olive oil, celery stalks, and a few other things to make it today. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes about <b>55 minutes</b>. Plenty of people made this recipe, and 1866 would say it hit the spot. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/clean-eating-carrot-ginger-red-lentil-soup-921419\">Clean Eating Carrot & Ginger Red Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/one-pot-red-lentil-sweet-potato-stew-928497\">One-Pot Red Lentil Sweet Potato Stew</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a> for similar recipes.",
"cuisines": [ ],
"dishTypes": [
"soup"
],
"diets": [
"gluten free",
"dairy free"
],
"occasions": [
"fall",
"winter"
],
"analyzedInstructions": [
{
"name": "",
"steps": [
{
"number": 1,
"step": "To a large dutch oven or soup pot, heat the olive oil over medium heat.",
"ingredients": [
{
"id": 4053,
"name": "olive oil",
"localizedName": "olive oil",
"image": "olive-oil.jpg"
},
{
"id": 0,
"name": "soup",
"localizedName": "soup",
"image": ""
}
],
"equipment": [
{
"id": 404667,
"name": "dutch oven",
"localizedName": "dutch oven",
"image": "dutch-oven.jpg"
}
]
},
{
"number": 2,
"step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
"ingredients": [
{
"id": 11124,
"name": "carrot",
"localizedName": "carrot",
"image": "sliced-carrot.png"
},
{
"id": 11143,
"name": "celery",
"localizedName": "celery",
"image": "celery.jpg"
},
{
"id": 11282,
"name": "onion",
"localizedName": "onion",
"image": "brown-onion.png"
}
],
"equipment": [ ],
"length": {
"number": 10,
"unit": "minutes"
}
},
{
"number": 3,
"step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
"ingredients": [
{
"id": 1102047,
"name": "salt and pepper",
"localizedName": "salt and pepper",
"image": "salt-and-pepper.jpg"
},
{
"id": 6615,
"name": "vegetable stock",
"localizedName": "vegetable stock",
"image": "chicken-broth.png"
},
{
"id": 10016069,
"name": "red lentils",
"localizedName": "red lentils",
"image": "red-lentils.png"
},
{
"id": 11529,
"name": "tomato",
"localizedName": "tomato",
"image": "tomato.png"
},
{
"id": 10316069,
"name": "lentils",
"localizedName": "lentils",
"image": "lentils-brown.jpg"
},
{
"id": 11564,
"name": "turnip",
"localizedName": "turnip",
"image": "turnips.png"
},
{
"id": 11215,
"name": "garlic",
"localizedName": "garlic",
"image": "garlic.png"
},
{
"id": 0,
"name": "soup",
"localizedName": "soup",
"image": ""
}
],
"equipment": [
{
"id": 404794,
"name": "stove",
"localizedName": "stove",
"image": "oven.jpg"
},
{
"id": 404752,
"name": "pot",
"localizedName": "pot",
"image": "stock-pot.jpg"
}
],
"length": {
"number": 22,
"unit": "minutes"
}
},
{
"number": 4,
"step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
"ingredients": [
{
"id": 5062,
"name": "chicken breast",
"localizedName": "chicken breast",
"image": "chicken-breasts.png"
},
{
"id": 1042027,
"name": "seasoning",
"localizedName": "seasoning",
"image": "seasoning.png"
},
{
"id": 11297,
"name": "parsley",
"localizedName": "parsley",
"image": "parsley.jpg"
}
],
"equipment": [ ],
"length": {
"number": 5,
"unit": "minutes"
}
},
{
"number": 5,
"step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
"ingredients": [
{
"id": 10511297,
"name": "fresh parsley",
"localizedName": "fresh parsley",
"image": "parsley.jpg"
},
{
"id": 0,
"name": "soup",
"localizedName": "soup",
"image": ""
}
],
"equipment": [ ]
}
]
}
],
"spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415"
}
],
"offset": 0,
"number": 10,
"totalResults": 5223
}
    */