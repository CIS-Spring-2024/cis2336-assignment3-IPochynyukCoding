//Menu Array for easier function implementation
//Price is in US dollars
const menuItems = [
    {
        item:"Borsch",
        price: 4.99
    },
    {
        item:"Varenyky",
        price: 6.99
    },
    {
        item:"Salo",
        price: 2.99
    },
    {
        item:"Pampushky",
        price:7.99
    },
]

//Add seperate array for import items
const importItems = [
    {
        item:"Roshen",
        price: 1.50
    },
    {
        item:"Zhivchik",
        price: 3.99
    },
    {
        item:"Flint",
        price: 1.99
    },
    {
        item:"Crazy Bee",
        price: 0.99
    },

]

//Port HTML elements using ID values 
let borschCounter = document.getElementById("borschCounter");
let varenykyCounter = document.getElementById("varenykyCounter");
let saloCounter = document.getElementById("saloCounter");
let pampushkyCounter = document.getElementById("pampushkyCounter");
let roshenCounter = document.getElementById("roshenCounter");
let zhivchikCounter = document.getElementById("zhivchikCounter");
let flintCounter = document.getElementById("flintCounter");
let crazyBeeCounter = document.getElementById("crazyBeeCounter");
let subTotal = document.getElementById("subTotal");
let taxCost= document.getElementById("taxCost");
let totalCost= document.getElementById("totalCost");