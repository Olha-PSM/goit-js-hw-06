const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const itemList = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');

  
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add('item');
  console.log(ingredientsItem);
  

  return ingredientsItem;
});

ingredientsList.append(...itemList);




 