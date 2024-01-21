// ****** SELECT ITEMS **********
// select all needed items this is always step one 

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
// set up variables to be used later

let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// add eventlistener to submit button on our form 

form.addEventListener("submit" ,addItem );

// ****** FUNCTIONS **********
// add functions then reference them in the eventlistener
function addItem(e){
    e.preventDefault();
} 

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********