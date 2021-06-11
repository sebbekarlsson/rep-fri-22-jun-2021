const inputField = document.getElementById("name-input");
const text = document.getElementById("text");
const button = document.getElementById("button");


button.addEventListener("click", function(event){
    const inputNumber = parseInt(inputField.value);
    if (inputNumber === NaN || !inputNumber) {
        text.innerText = "Sorry, you can only enter a number.";
        inputField.value = "";
    } else {
        const result = inputNumber * 100;
        text.innerText = `The result is: ${result}`;
    }
});