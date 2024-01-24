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
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add id 
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;
    // append child 
    list.appendChild(element);

    // display alert
    displayAlert("item added to the list","success");

    // show container
    container.classList.add("show-container");

    // add to local storage
    addToLocalStorage(id,value);

    // set back to default
    setBackToDefault();

    } else if( value && editFlag){

    } 
    else{
       displayAlert("please enter value", "danger");
    }
} 
// display alert 
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    },1000);
}
//set back to default 
function setBackToDefault(){
    grocery.value= "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
};
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
}



// ****** SETUP ITEMS **********