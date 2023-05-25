const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(categorie =>
  console.log(
    `Category: ${categorie.firstElementChild.textContent}
    Elements: ${categorie.lastElementChild.children.length}`,
  ),
);