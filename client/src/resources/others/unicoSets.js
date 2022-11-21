//archivo unico para sets:


pedidosApi = async () =>  {
    const r1 = await fetch('https://api.spoonacular.com/recipes/random?apiKey=26623d87ef014d3daeab072510ec275a&number=100');
    const r2 = await fetch('https://api.spoonacular.com/recipes/random?apiKey=26623d87ef014d3daeab072510ec275a&number=100');
    const r3 = await fetch('https://api.spoonacular.com/recipes/random?apiKey=26623d87ef014d3daeab072510ec275a&number=100');
    const r4 = await fetch('https://api.spoonacular.com/recipes/random?apiKey=26623d87ef014d3daeab072510ec275a&number=100');
    const r5 = await fetch('https://api.spoonacular.com/recipes/random?apiKey=26623d87ef014d3daeab072510ec275a&number=100');
    const r6 = await fetch('https://api.spoonacular.com/recipes/random?apiKey=26623d87ef014d3daeab072510ec275a&number=100');

   await Promise.all([r1,r2,r3,r4,r5,r6])
   const newarray = [r1,r2,r3,r4,r5,r6].map(response => response.recipes)
   const arrayId = newarray.map(recipe => recipe.id)
   const arrayDiet = newarray.map(recipe => recipe.diets)
   const setId = [...new Set(arrayId.flat())]
   const setDiet = [...new Set(arrayId.flat())]
   console.log(setId,setDiet)
   return [setId,setDiet]
}


