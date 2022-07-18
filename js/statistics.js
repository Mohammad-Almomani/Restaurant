"use strict";

let foodId = 0, foodMenu = [], Price = [], Dish = [], typesCount = [];
let fill = ["ID", "Name", "Type", "Price", "Image"];
let Types = ["Fruit and vegetables", "Starchy food", "Dairy", "Protein", "Fat"];

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
        parsedMenu.map(a => new menuGenerator(foodId += 1, a.Name, a.Type, a.Price, a.imgUrl));
    }

    // callback createTable function to render my data in a table on statistics page
    createTable(parsedMenu);

    // call back functions to extract the data needed for the charts
    barsChartsData(parsedMenu);
    getTypeCount(parsedMenu);
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

// cdn libraries part
// functions to extract the needed data for the charts

function barsChartsData(parsedMenu) {
    return parsedMenu.map(dish => Price.push(dish.Price) && Dish.push(dish.Name))
}

function getTypeCount(parsedMenu) {
    let typeFilter = parsedMenu.map(a => a.Type);
    return Types.map(mainType => typesCount.push(typeFilter.filter((dishType) => (dishType === mainType)).length));
}

// bars chart
let data = {
    labels: Dish,
    datasets: [{
        label: 'Price in JD:',
        backgroundColor: 'red',
        borderColor: 'blue',
        data: Price,
    }]
};

let config = {
    type: 'bar',
    data: data,
    options: {}
};

let myChart = new Chart(
    document.getElementById('barChart'),
    config
);

// pie chart
data = {
    labels: Types,
    datasets: [{
        label: 'My First Dataset',
        data: typesCount,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 120, 20)',
            'rgb(200, 50, 130)',
            'rgb(54, 162, 235)',
            'rgb(280, 15, 9)'
        ],
        hoverOffset: 10,
        borderWidth: 2
    }]
};
config = {
    type: 'doughnut',
    data: data,
};
myChart = new Chart(
    document.getElementById('doughnutChart'),
    config
);