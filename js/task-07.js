const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(inputEl, textEl)

inputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.target.value}px`
});
