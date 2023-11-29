const valueBox = document.getElementById("value-box");
const myVal = document.getElementById("values-return");
const myPercent = document.getElementById("percent-box");

function addTask(){
        if(valueBox.value === ''){
        alert("Enter Value");
        }
    
    else{
        let X = document.createElement("h3");
        X.innerHTML = percentage(valueBox.value, myPercent.value);
        myVal.appendChild(X);

        };
        valueBox.value = "";
        myPercent.value = "";
};




function percentage(value, percent){ 
        return value * percent;
        
}


