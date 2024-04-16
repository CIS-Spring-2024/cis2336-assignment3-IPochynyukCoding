//Port HTML elements using ID values 

let borschCounterInput= document.getElementById("borschCounter");
let varenykyCounterInput = document.getElementById("varenykyCounter");
let saloCounterInput= document.getElementById("saloCounter");
let pampushkyCounterInput = document.getElementById("pampushkyCounter");
let roshenCounterInput = document.getElementById("roshenCounter");
let zhivchikCounterInput = document.getElementById("zhivchikCounter");
let flintCounterInput = document.getElementById("flintCounter");
let crazyBeeCounterInput = document.getElementById("crazyBeeCounter");
let subTotalText = document.getElementById("subTotal");
let taxText = document.getElementById("taxCost");
let totalCostText = document.getElementById("totalCost");

//Call to functions while user types
borschCounterInput.addEventListener("keyup",totalCostCalculate);
varenykyCounterInput.addEventListener("keyup",totalCostCalculate);
saloCounterInput.addEventListener("keyup",totalCostCalculate);
pampushkyCounterInput.addEventListener("keyup",totalCostCalculate);
roshenCounterInput.addEventListener("keyup",totalCostCalculate);
zhivchikCounterInput.addEventListener("keyup",totalCostCalculate);
flintCounterInput.addEventListener("keyup",totalCostCalculate);
crazyBeeCounterInput.addEventListener("keyup",totalCostCalculate);

//The function calculating the total price for each item
function fBorschCost(){ 
    const borschCost= borschCounterInput.value*4.99;
    const borschCostAdjust=borschCost.toFixed(2);
    document.getElementById("borschTotal").innerText=Number(borschCostAdjust);
    return borschCostAdjust;
}

function fVarenykyCost(){
    const varenykyCost=varenykyCounterInput.value*6.99;
    const varenykyCostAdjust = varenykyCost.toFixed(2);
    document.getElementById("varenykyTotal").innerText=Number(varenykyCostAdjust);
    return varenykyCostAdjust;
}

function fSaloCost(){
    const saloCost=saloCounterInput.value*2.99;
    const saloCostAdjust = saloCost.toFixed(2);
    document.getElementById("saloTotal").innerText=Number(saloCostAdjust);
    return saloCostAdjust;
}

function fPampushkyCost(){
    const pampushkyCost=pampushkyCounterInput.value*7.99;
    const pampushkyCostAdjust = pampushkyCost.toFixed(2);
    document.getElementById("pampushkyTotal").innerText=Number(pampushkyCostAdjust);
    return pampushkyCostAdjust;
}

function fRoshenCost(){
    //Prevent user from ordering more than 5 units.
    if(roshenCounterInput.value>5){
        alert("You cannot order more than 5 units per item.")
        roshenCounterInput.value = 5;
    }
    const roshenCost=roshenCounterInput.value*1.50;
    const roshenCostAdjust = roshenCost.toFixed(2);
    document.getElementById("roshenTotal").innerText=Number(roshenCostAdjust);
    return roshenCostAdjust;
}

function fZhivchikCost(){
    //Prevent user from ordering more than 5 units.
    if(zhivchikCounterInput.value>5){
        alert("You cannot order more than 5 units per item.");
        zhivchikCounterInput.value = 5;
    }
    const zhivchikCost=zhivchikCounterInput.value*3.99;
    const zhivchikCostAdjust = zhivchikCost.toFixed(2);
    document.getElementById("zhivchikTotal").innerText=Number(zhivchikCostAdjust);
    return zhivchikCostAdjust;
}

function fFlintCost(){
    const flintCost=flintCounterInput.value*1.99;
    //Prevent user from ordering more than 5 units.
    if(flintCounterInput.value>5){
        alert("You cannot order more than 5 units per item.")
        flintCounterInput.value = 5;
    }
    const flintCostAdjust = flintCost.toFixed(2);
    document.getElementById("flintTotal").innerText=Number(flintCostAdjust);
    return flintCostAdjust;
}

function fCrazyBeeCost(){
    const crazyBeeCost=crazyBeeCounterInput.value*0.99;
    //Prevent user from ordering more than 5 units.
    if(crazyBeeCounterInput.value>5){
        alert("You cannot order more than 5 units per item.")
        crazyBeeCounterInput.value = 5;
    }
    const crazyBeeCostAdjust = crazyBeeCost.toFixed(2);
    document.getElementById("crazyBeeTotal").innerText=Number(crazyBeeCostAdjust);
    return crazyBeeCostAdjust;
}

//Calculate the total amount before and after sales tax and calculate tax

function subTotalCalculate(){
    const subTotal = Number(fBorschCost(borschCounterInput)) + Number(fVarenykyCost(varenykyCounterInput)) + Number(fSaloCost(saloCounterInput)) + Number(fPampushkyCost(pampushkyCounterInput)) + Number(fRoshenCost(roshenCounterInput)) + Number(fZhivchikCost(zhivchikCounterInput)) + Number(fFlintCost(flintCounterInput)) + Number(fCrazyBeeCost(crazyBeeCounterInput));
    subTotalText.innerText=subTotal.toFixed(2);
    return subTotal;
}

function taxCalculate(){
    const taxRate = 0.05
    const taxCost = subTotalCalculate()*taxRate;
    taxText.innerText=taxCost.toFixed(2);
    return taxCost;
}

function totalCostCalculate(){
    const totalCost = taxCalculate()+subTotalCalculate();
    totalCostText.innerText=totalCost.toFixed(2);
}