"use strict";

let foodMenu = [];
// create constructor for the menu
function menuGenerator(id, name, type, price, imgUrl) {
    this.ID = id;
    this.Name = name;
    this.Type = type;
    this.Price = price;
    this.Image = imgUrl;
    foodMenu.push(this)
}

// declare an integer for the id and an array to save date from the form in it
let foodId = 0, foodArray = [];
// get the form and add event listener to it
const foodFrom = document.getElementById("foodForm");
foodFrom.addEventListener("submit", handleFood);

const table = document.getElementById("table")
const tableForm = document.createElement('table')
table.append(tableForm)

// create the event listener function to push our data into foodArray each time the user press submit
function handleFood(event) {
    event.preventDefault();
    let newDish = new menuGenerator(foodId += 1, `${event.target.foodName.value}`, `${event.target.foodTypes.value}`, `${event.target.price.value}`, `${event.target.imgUrl.value}`)
    foodArray.push(newDish)
    saveData()
}

// create function to save data from the form into it as .json
function saveData() {
    let stringifiedMenu = JSON.stringify(foodArray);
    localStorage.setItem("foodMenu", stringifiedMenu);
}

