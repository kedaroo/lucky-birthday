const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const btnSubmit = document.querySelector("#btn-submit");
const divOutput = document.querySelector("#output");

function calculateSum() {
    let newDob = dob.value.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < newDob.length; i++) {
        sum += Number(newDob[i]);
    }
    return sum
}

function checkLuck(sum) {
    if (sum % luckyNum.value === 0) {
        return true
    } else {
        return false
    }
}

function clickHandler() {
    if (dob.value && luckyNum.value) {
        let sum = calculateSum();
        let luck = checkLuck(sum);
        if (luck) {
            divOutput.innerText = "your birthday is lucky!";
        } else {
            divOutput.innerText = "your birthday is not lucky!";
        }
    } else {
        divOutput.innerText = "please enter both the fields!";
    }

    
} 

btnSubmit.addEventListener("click", clickHandler);



