"use strict";

let foodMenu = [], foodId = 0, fill = ["ID", "Name", "Type", "Price", "Image"];
// create constructor for the menu
function menuGenerator(id, name, type, price, imgUrl) {
    this.ID = id;
    this.Name = name;
    this.Type = type;
    this.Price = price;
    this.Image = imgUrl;
    foodMenu.push(this)
}

// create the first row in our menu
const firstRow = new menuGenerator("ID", "Name", "Type", "Price JD", "Image")
const table = document.getElementById("table")
const tableForm = document.createElement('table')
table.append(tableForm)


createFirstRow()
getData();



// create a function to retrieve the data from the json file from the index page
function getData() {
    let retrievedMenu = localStorage.getItem("foodMenu");
    // convert the string to array
    let parsedMenu = JSON.parse(retrievedMenu)

    // create instances from the data
    if (parsedMenu != null) {
        for (let i = 0; i < parsedMenu.length; i++) {

            new menuGenerator(foodId += 1, parsedMenu[i].Name, parsedMenu[i].Type, parsedMenu[i].Price, parsedMenu[i].imgUrl);

        }
    }
    // callback createTable function to render my data in a table on statistics page
    createTable(parsedMenu);
}

function createFirstRow() {
    for (let i = 0; i < 1; i++) {
        const raw = document.createElement('tr')
        tableForm.append(raw)
        for (let j = 0; j < fill.length; j++) {

            const tableClm = document.createElement("th")
            raw.append(tableClm)
            tableClm.textContent = `${foodMenu[0][fill[j]]}`;
        }
    }
}

function createTable(parsedMenu) {
    for (let i = 0; i < parsedMenu.length; i++) {
        const raw = document.createElement('tr')
        tableForm.append(raw)
        for (let j = 0; j < fill.length - 1; j++) {

            const tableClm = document.createElement("th")
            raw.append(tableClm)
            tableClm.textContent = `${parsedMenu[i][fill[j]]}`;
        }
        const tableClm = document.createElement("th")
        raw.append(tableClm)
        const foodImg = document.createElement("img")
        foodImg.src = `${parsedMenu[i][fill[4]]}`
        if (parsedMenu[i][fill[4]] == '') {
            foodImg.src = '../assets/logo.png'
        }
        foodImg.setAttribute("style", "width:40px")
        tableClm.append(foodImg)
    }
}




