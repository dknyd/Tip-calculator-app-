"use strict"
const inputBill = document.querySelector("#inputBill");
const inputPeople = document.querySelector("#inputPeople");
const buttonsPercentage = document.querySelectorAll(".buttonPercent");
const buttonReset = document.querySelector("#buttonReset");
const buttonCustom = document.querySelector("#buttonCustom");
let tipPercentage;
const tipPlaceHolder = document.querySelector("#tipPlaceholder");
const totalPlaceHolder = document.querySelector("#totalPlaceholder");

// CUSTOM PERCENTAGE
let runCheck = true;

if (buttonCustom.value){
    const buttonValue = buttonCustom.value;
    const billAmount = parseFloat(inputBill.value);
    const percentage = parseFloat(buttonValue) / 100;
    const tipAmount = billAmount * percentage / inputPeople.value;
    const totalAmount = billAmount + tipAmount;
    let totalPP = totalAmount / inputPeople.value;
    totalPlaceHolder.innerHTML = `$${totalPP.toFixed(2)}`;
    tipPlaceHolder.innerHTML =` $${tipAmount.toFixed(2)}`;
}
	
// ERROR MESSAGE CREATOR FUNCTION
let childElements = 0;
function createErrorMessage(element, message){
	if (childElements < 2){
    element.style.border = "2px solid red";
    const newParagraph = document.createElement("p");
    newParagraph.style.position = "relative";
    newParagraph.innerHTML = message;
    newParagraph.style.color = "hsl(0, 100%, 66%)";
    newParagraph.style.fontSize = "1rem";
    newParagraph.style.position = "relative";
    newParagraph.style.left = "13rem";
    newParagraph.style.bottom = "5rem"
    newParagraph.className = "errorMessage";
    newParagraph.style.margin = "0px";
    element.insertAdjacentElement('afterend', newParagraph);
		childElements++;
	}
}

// PERCENTAGE BUTTONS FUNCTION
buttonsPercentage.forEach(button => {
    button.addEventListener("click", () => {
      const buttonValue = button.value;
      const billAmount = parseFloat(inputBill.value);
      const percentage = parseFloat(buttonValue) / 100;
      const tipAmount = billAmount * percentage / inputPeople.value;
      const totalAmount = billAmount + tipAmount;
      let totalPP = totalAmount / inputPeople.value;
      totalPlaceHolder.innerHTML = `$${totalPP.toFixed(2)}`;
      tipPlaceHolder.innerHTML =` $${tipAmount.toFixed(2)}`;

      if (inputBill.value === "0" || !inputBill.value){
        createErrorMessage(inputBill, "Cant be zero");
        totalPlaceHolder.innerHTML = `$0.00`;
        tipPlaceHolder.innerHTML =`$0.00`;
      } else {
        inputBill.style.border = "2px solid hsl(172, 67%, 45%)"
      }

      if (inputPeople.value === "0" || !inputPeople.value){
        createErrorMessage(inputPeople, "Cant be zero");
        totalPlaceHolder.innerHTML = `$0.00`;
        tipPlaceHolder.innerHTML =`$0.00`;
      } else {
        inputPeople.style.border = "2px solid hsl(172, 67%, 45%)"
      }
    });
  });

// RESET BUTTON FUNCTIONS
    //reset values   
buttonReset.addEventListener("click", function(){
	childElements = 0;
    totalPlaceHolder.innerHTML = `$0.00`;
    tipPlaceHolder.innerHTML =`$0.00`;
    inputBill.style.border = "none";
    inputPeople.style.border = "none";
    const errorMessages = document.querySelectorAll(".errorMessage");
    for (let i = 0; i < errorMessages.length; i++){
        errorMessages[i].remove();
    }
  })

    //inputs' event listeners      
inputBill.addEventListener("input", function() {
    if (inputBill.value) {
      buttonReset.style.backgroundColor = "hsl(172, 67%, 45%)";
    } else {
      buttonReset.style.backgroundColor = "hsl(183, 100%, 20%)";
    }
  });
  
buttonReset.addEventListener("click", function() {
    buttonReset.style.backgroundColor = "hsl(183, 100%, 20%)";
  });

inputPeople.addEventListener("input", function() {
    if (inputPeople.value) {
      buttonReset.style.backgroundColor = "hsl(172, 67%, 45%)";
    } else {
      buttonReset.style.backgroundColor = "hsl(183, 100%, 20%)";
    }
  });
  
buttonReset.addEventListener("click", function() {
    buttonReset.style.backgroundColor = "hsl(183, 100%, 20%)";
  });

  //percentage buttons' event listener  
for (let i = 0; i < buttonsPercentage.length; i++){
    buttonsPercentage[i].addEventListener("click", function() {
        if (buttonsPercentage[i].value) {
          buttonReset.style.backgroundColor = "hsl(172, 67%, 45%)";
        } else {
          buttonReset.style.backgroundColor = "hsl(183, 100%, 20%)";
        }
      });
}
    //custom button's event listener  

buttonCustom.addEventListener("input", function(){
    const buttonValue = buttonCustom.value;
    const billAmount = parseFloat(inputBill.value);
    const percentage = parseFloat(buttonValue) / 100;
    const tipAmount = billAmount * percentage / inputPeople.value;
    const totalAmount = billAmount + tipAmount;
    let totalPP = totalAmount / inputPeople.value;
    totalPlaceHolder.innerHTML = `$${totalPP.toFixed(2)}`;
    tipPlaceHolder.innerHTML =` $${tipAmount.toFixed(2)}`;
})





  
