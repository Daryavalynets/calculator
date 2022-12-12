const summCheck = document.querySelector(".summCheck");
const calculButton = document.querySelector(".calcul");
const pplAmount = document.querySelector(".pplAmount");
const cancel = document.querySelector(".cancel");
const conditions = document.querySelector(".conditions");
const tipsValue = document.querySelector(".tipsValue");
const chequeValue = document.querySelector(".chequeValue");

const tipsCalculator = {
    tips: 0,
    price: 0,
}


calculButton.addEventListener('click', calculButtonHandler);

function calculButtonHandler(event) {
   event.preventDefault();
   console.log(summCheck.value);
   console.log(conditions.value);
   console.log(pplAmount.value);
   tipsCalculator.tips = +summCheck.value / +pplAmount.value * +conditions.value
   tipsValue.innerHTML = tipsCalculator.tips
   chequeValue.innerHTML = +summCheck.value / +pplAmount.value + +tipsCalculator.tips
}