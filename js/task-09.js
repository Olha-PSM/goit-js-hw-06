function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const colorText = document.querySelector(".color");
const changeButtun = document.querySelector(".change-color");



changeButtun.addEventListener("click", () => {
  let color = getRandomHexColor()
  body.style.backgroundColor = color;
  colorText.textContent = color;
})
