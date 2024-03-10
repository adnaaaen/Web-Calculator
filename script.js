var opr_show = document.getElementById('opr-show')
var globalExpression = ""
var displayExp = "" 
var count = 0
var entryValue = document.getElementById("user-input")
var dot_click = 0

function updateEntry(){
    entryValue.innerHTML = displayExp
    console.log("Entry updated")
}

function addExpression(passId){
    let idValue = document.getElementById(passId).value
    if (count < 10)
    {
        if(idValue == '.')
        {
            if (dot_click == 1)
            {
                return
            }
            if (displayExp == "")
            {
                displayExp += "0."
                updateEntry()
                dot_click ++
                return
            }
            dot_click ++
        }
        displayExp += idValue
        count ++
        updateEntry()
    }
}

function clearEntry(){
    globalExpression = ""
    count = 0
    displayExp = ""
    opr_show.innerHTML = ""
    opr_show.style.color = 'white'
    dot_click = 0
    updateEntry()
}

function backSpace()
{
    if(displayExp != ""){
        let exp_len = displayExp.length
        if(exp_len != 1)
        {
            displayExp = displayExp.slice(0, exp_len-1)
            updateEntry()
            count --
            return
        }
        displayExp = ""
        count --
        updateEntry()
        return
    }
}

function update_after_opr(){
    displayExp = ""
    updateEntry()
    count = 0 
}

function addOpr(opr_id)
{
    var operand = document.getElementById(opr_id).value
    console.log(operand)
    if(displayExp != "" || operand == '-')
    {
        globalExpression += displayExp
        if(operand == '×')
        {
            globalExpression += '*'
        }
        else if(operand == '÷')
        {
            globalExpression += '/'
        }
        else
        {
            globalExpression += operand
        }

        opr_show.innerHTML = operand
        update_after_opr()
    }
}

function getResult(){
    globalExpression += displayExp
    let result = eval(globalExpression)
    console.log(globalExpression)
    result = result.toFixed(2)
    clearEntry()
    opr_show.innerHTML = 'A'
    opr_show.style.color = 'rgb(0,200,100)'
    entryValue.innerHTML = result 
}