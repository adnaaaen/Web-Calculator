var expression = ""
var count = 0
function updateEntry(){
    let entryValue = document.getElementById("user-input").innerHTML = expression
    console.log("Entry updated")
}

function addExpression(passId){
    let idValue = document.getElementById(passId).value 
    if (count <= 27)
    {
        expression += idValue
        count ++
        updateEntry()
    }
}

function clearEntry(){
    if (expression != ""){
        expression = ""
        count = 0
        updateEntry()
    }
}