"use strict";

let foodMenu = [];
// create constructor for the menu
function menuGenerator (id, name, type, price, imgUrl){
    this.ID = id;
    this.Name = name;
    this.Type = type;
    this.Price = price;
    this.Image = imgUrl;
    foodMenu.push(this)
}

// declare an integer for the id and an array to save date from the form in it
let foodId =0, foodArray = [];
// get the form and add event listener to it
const foodFrom = document.getElementById("foodForm");
foodFrom.addEventListener("submit",handleFood);

// create the first row in our menu
const firstRow = new menuGenerator ("ID", "Name", "Type", "Price JD", "Image")

let fill = ["ID", "Name", "Type", "Price", "Image"]

const table = document.getElementById("table")
const tableForm = document.createElement('table')
table.append(tableForm)

// create the event listener function to add a row in our menu each time the user press submit
function handleFood(event){
    event.preventDefault();
    let newDish = new menuGenerator (foodId+=1,`${event.target.foodName.value}`, `${event.target.foodTypes.value}`, `${event.target.price.value}`, `${event.target.imgUrl.value}`)
    foodArray.push(newDish)
    
    for (let i=0; i< 1; i++){
        const raw = document.createElement('tr')
        tableForm.append(raw)
        for (let j=0; j<fill.length-1;j++){
            
            const tableClm = document.createElement("th")
            raw.append(tableClm)
            tableClm.textContent = `${foodMenu[foodMenu.length-1][fill[j]]}`;
        }
        
        const tableClm = document.createElement("th")
        raw.append(tableClm)
        const foodImg = document.createElement("img")
        foodImg.src = `${foodMenu[foodMenu.length-1][fill[4]]}`
        if (foodMenu[foodMenu.length-1][fill[4]] ==''){
            foodImg.src = '../assets/logo.png'
        }
        foodImg.setAttribute("style", "width:40px")
        tableClm.append(foodImg)
        // tableClm.textContent = `${foodMenu[0][fill[j]]}`;
    }
}

function createFirstRow (){
for (let i=0; i< 1; i++){
    const raw = document.createElement('tr')
    tableForm.append(raw)
        for (let j=0; j<fill.length;j++){
    
    const tableClm = document.createElement("th")
    raw.append(tableClm)
    tableClm.textContent = `${foodMenu[0][fill[j]]}`;
    }}
}
createFirstRow()

