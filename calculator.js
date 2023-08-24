let inputField = document.getElementById("input")


const getValue=(value)=>{
    inputField.value+=value
}

function compute(){
console.log("clicked");
    const value=(inputField.value).toString().trim()
    const values=value.split(/(?=[+-/*])/)
    const initialValue= parseFloat(values[0])
    const lastvalue= parseFloat(values[1].slice(1))
    const action = values[1][0]
    let result=null

    // console.log("initial Value is "+initialValue);
    // console.log("Action is "+action);
    // console.log("last Value is "+lastValue);

    if(action==="+"){
        result= initialValue + lastvalue
    } else if(action==="-"){
        result= initialValue - lastvalue
    } else if(action === "/"){
        result= initialValue / lastvalue
    } else if(action==="*"){
        result= initialValue * lastvalue
    }

    inputField.value=result
}

function clearFn(){
    inputField.value=null
}

function backspace(){
    const value=(inputField.value).toString()

    let valueArr=[]

    for(let char of value){
        valueArr.push(char)
    }
    
    valueArr.pop()
    let reducedValue= valueArr.join("")

    inputField.value=reducedValue
}