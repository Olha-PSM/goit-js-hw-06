const categoriesEl = document.querySelectorAll('li.item');


categoriesEl.forEach(categorie => {
  console.log(
    `Category: ${categorie.firstElementChild.textContent}`);
   
  console.log(
    `Elements: ${categorie.lastElementChild.children.length}`
  )
    
  
});

 