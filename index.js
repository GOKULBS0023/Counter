const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const numberEl = document.querySelector(".number");
var number = 0;

function updateNumber(){
    if (number < 0) {
        numberEl.style.color ="Red";
    } else if (number > 0){
        numberEl.style.color ="Green";
    } else{
        numberEl.style.color ="#000";
    }
    numberEl.innerText = number;
}

increase.addEventListener("click", ()=>{
    number++;
    updateNumber();
});
decrease.addEventListener("click", ()=>{
    number--;
    updateNumber();
});
reset.addEventListener("click", ()=>{
    number = 0;
    updateNumber();
});