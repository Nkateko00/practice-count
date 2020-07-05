const myIncrease = document.querySelector(".increment");
const myDecrease = document.querySelector(".decrement");
const myTotal = document.querySelector(".total");

const myCount = allCount();

myIncrease.addEventListener("click",function(){
    myCount.increment();
    myTotal.innerHTML = myCount.getTotal();

});
myDecrease.addEventListener("click",function(){
    myCount.decrement();
    myTotal.innerHTML = myCount.getTotal();
});