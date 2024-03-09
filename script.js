var expression = ""
var count = 0
function updateEntry(){
    let entryValue = document.getElementById("user-input").innerHTML = expression
    console.log("Entry updated")
}

function addExpression(passId){
    let idValue = document.getElementById(passId).value 
    if (count <= 9)
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
        bsCount = 0
        updateEntry()
    }
}

bsCount = 1
function backSpace()
{
    if(expression != ""){
        let exp_len = expression.length
        if(expression.length != 1)
        {
            expression = expression.slice(0, exp_len-bsCount)
            updateEntry()
            return
        }
        expression = ""
        updateEntry()
        return
    }
}