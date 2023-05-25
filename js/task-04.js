let counterValue = 0
const decrementButton = document.querySelector("button[data-action='decrement']")
const incrementButton= document.querySelector("button[data-action='increment']")
const valueEl = document.querySelector("#value")
console.log(decrementButton, incrementButton, valueEl)

decrementButton.addEventListener("click", () => {
    counterValue--

    valueEl.textContent = counterValue;
    console.log(counterValue)
});  
incrementButton.addEventListener("click", () => {
    counterValue++  
    
    valueEl.textContent = counterValue;
    console.log(counterValue)
});


