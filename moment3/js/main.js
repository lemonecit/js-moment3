/*
Här lägger du din JavaScript-kod
pile2100 - 28/09/2021 
*/

// variabler

    let elInputTxt = document.getElementById("newtodo");

    let elMsgTxt = document.getElementById("message");
    let elMakeTodoList = document.getElementById("todolist");

// buttons
    let elSubmotBtn = document.getElementById("newtodobutton");
    let elClearBtn = document.getElementById("clearbutton");
// for loop statement
    let i = "";

// händelsehanterare 
    elSubmotBtn.addEventListener("click", doSubmit);
    elClearBtn.addEventListener("click", doClear);
    elInputTxt.addEventListener("keyup", checkData);

// Web browser loads 
    window.onload = init;

    function init() {
    // button is enabled to true 
        elSubmotBtn.disabled = true;
        // Call function loadData
        loadData();
    }

    // check if this value is high than 5 characters 

        function checkData() {

        let input = elInputTxt.value;
            // go through the loop and check which of them is true or false
            if (input.length < 5) {
                // Output a error message in span#message
            elMsgTxt.innerHTML = "Måste vara över 5 tecken";
            elSubmotBtn.disabled = true;

            } 

            else {
                // Otherwise output and can use the button 
            elMsgTxt.innerHTML = "";
            elSubmotBtn.disabled = false;
            }
        }
     
        // Adding new element and build up tree for article 
        function doSubmit(){

            let input = elInputTxt.value;
            let makeNewEl = document.createElement("article");
            let makeTextNode = document.createTextNode(input);
            makeNewEl.appendChild(makeTextNode);
            makeNewEl.className =  "Todo";
            elMakeTodoList.appendChild(makeNewEl);
            elInputTxt.value = "";
            elSubmotBtn.disabled = true;

            //    Anropa loadData function and save in localstorage!

            storeTodoList();

        }

           // Store to localstorage
        function storeTodoList(){
        let loadTodoList = document.getElementsByClassName("Todo");
        // lagra
        let createTodoArray = [];
            for (let i=0 ; i < loadTodoList.length ; i++) {
            createTodoArray.push(loadTodoList[i].innerHTML);
            }
            localStorage.setItem("loadTodoList", JSON.stringify(createTodoArray));
        }
        // Retrieve data from localstorage
        function loadData() {
        loadTodoList = JSON.parse(localStorage.getItem("loadTodoList"));
            // Checking length if null or not 
            if (loadTodoList != null) {
                for(i=0;i<loadTodoList.length;i++) {
                let makeNewEl = document.createElement("article");
                let makeTextNode = document.createTextNode(loadTodoList[i]);
                makeNewEl.appendChild(makeTextNode);
                makeNewEl.className =  "Todo";
                elMakeTodoList.appendChild(makeNewEl);

            

                makeNewEl.addEventListener("click", function(e) {

                    e.target.remove();
                    storeTodoList();
    
                });

              


                }



            }
            

       }

    //    Delete all in localStorage  

    function doClear() {
            // Make clear in localstorage 
            localStorage.clear();
            // Call functions
            loadData();
            deleteItem();
        }
    // Delete all article list with event elMakeTodoList 
    function deleteItem(){
        // Delete all item in the list away
        elMakeTodoList.innerHTML = "";

    }

