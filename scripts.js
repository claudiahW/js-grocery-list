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

form.addEventListener("submit" ,addItem);

// ****** FUNCTIONS **********
// add functions then reference them in the eventlistener
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    // set up loop to iterate through three options once submit button is clicked
    if(value && !editFlag){

    } //here if value is not equal to empty string and we do not edit then some code will run 
    else if( value && editFlag){

    } //here though if the value is still not equal to an empty string but i do edit some function will happen
    else{
       displayAlert("please enter value", "danger");
    }
} 
// display alert 
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********