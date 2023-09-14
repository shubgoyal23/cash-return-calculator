const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const check = document.querySelector("#check");
const notes = document.querySelectorAll(".notes");
const message = document.querySelector("#message");
const nextBtn = document.querySelector("#next")
const MainDiv = document.querySelector("#innercheck")
const Denominations = [2000, 500, 100, 20, 10, 5, 1];



MainDiv.style.display = "none"


nextBtn.addEventListener("click", function Checker() {
    message.style.display = "none"
    MainDiv.style.display = "none"
    if (Number(billAmount.value) > 0) {
        MainDiv.style.display = "block"
        nextBtn.style.display = "none"
        check.addEventListener("click", function valueChecker() {
            if (Number(cashAmount.value) >= Number(billAmount.value)) {
                
                message.style.display = "none"
                const cash = Number(cashAmount.value) - Number(billAmount.value);
                calculator(cash)
            } else {
                message.style.display = "block"
                message.innerText = "There is no such thing as credit here give money or wash plates"

            }
        });

    } else {
        message.style.display = "block"
        message.innerText = "enter positive amount only"

    }
});

function calculator(cash) {
    for (i = 0; i < Denominations.length; i++) {
        const notesNumber = Math.trunc(cash / Denominations[i]);
        notes[i].innerText = notesNumber;
        cash = cash % Denominations[i];
    }

}