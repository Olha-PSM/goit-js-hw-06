const textInput = document.querySelector("#validation-input");
console.log(textInput)
const lengthOfInput = textInput.getAttribute("data-length")

    textInput.addEventListener('blur', (event) => {
        if (event.currentTarget.value.length === Number(lengthOfInput)) {
            textInput.classList.remove("invalid");
            textInput.classList.add("valid");
        }
            
        else
        {
            textInput.classList.remove("valid");
            textInput.classList.add("invalid");
        }
    
    })

 

   







