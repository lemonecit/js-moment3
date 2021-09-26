/*
Här lägger du din JavaScript-kod
pile2100 - 
*/



// variabler

let elInputTxt = document.getElementById("newtodo");
let elSubmotBtn = document.getElementById("newtodobutton");
let elMsgTxt = document.getElementById("message");
let elMakeTodoList = document.getElementById("todolist");
let elClearBtn = document.getElementById("clearbutton");

// händelsehanterare 

elSubmotBtn.addEventListener("click", doSubmit);
elClearBtn.addEventListener("click", doClear);
elInputTxt.addEventListener("keyup", checkData);

// Add value 

function addItem() {
    let input = elInputTxt.value;
    let makeNewEl = document.createElement("article");
    let makeTextNode = document.createTextNode(input);
    makeNewEl.appendChild(makeTextNode);
    makeNewEl.className =  "Todo";


    elMakeTodoList.appendChild(makeNewEl);


    localStorage.setItem('todolist', input);

    loadData();

}

// Web browser loads 
window.onload = init;


function init() {

    elSubmotBtn.disabled = true;

    loadData();
 
 

}





function checkData() {

    let input = elInputTxt.value;

if (input.length < 5) {
  
    elMsgTxt.innerHTML = "Måste vara över 5 tecken";
    elSubmotBtn.disabled = true;

} 

else {

    elMsgTxt.innerHTML = "";
    elSubmotBtn.disabled = false;

}


}


// Submit to store this value 


function doSubmit(){
    let input = elInputTxt.value;

    // lagra
   localStorage.setItem('newtodo', input);

//    Anropa loadData function 
        loadData();
        addItem();
}

function loadData() {

    let getOut = localStorage.getItem('newtodo');

elMsgTxt.innerHTML = "Stored your data into todo list: " + getOut;


}

// clear this value from the storage 

function doClear() {
    localStorage.clear();
}




