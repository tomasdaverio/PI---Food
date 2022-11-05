const dietSet = (array) =>{
    return [...new Set(array)]
}

let array = ["gluten free",
"dairy free",
"lacto ovo vegetarian",
"vegan",
"dairy free",
"lacto ovo vegetarian",
"vegan",
"lacto ovo vegetarian",
"gluten free",
"dairy free",
"paleolithic",
"lacto ovo vegetarian",
"primal",
"whole 30",
"vegan",
"gluten free",
"dairy free",
"gluten free",
"dairy free",
"paleolithic",
"primal",
"whole 30",
"gluten free",
"dairy free",
"paleolithic",
"primal",
"whole 30",
"gluten free",
"dairy free",
"lacto ovo vegetarian",
"vegan",
"lacto ovo vegetarian",
"vegan",
"gluten free",
"dairy free",
"gluten free",
"dairy free",
"paleolithic",
"lacto ovo vegetarian",
"primal",
"whole 30",
"vegan"]

console.log(dietSet(array));

const last = [
    'gluten free',
    'dairy free',
    'lacto ovo vegetarian',
    'vegan',
    'paleolithic',
    'primal',
    'whole 30'
  ]

  //faltarian varios: pescetarian,ovo vegetarian, lacto vegetarian,ketogenic,paleo,low fodmap, whole 360, omnivore, fruitarian