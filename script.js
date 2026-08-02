let display = document.getElementById("display");



function appendValue(value){

    display.value += value;

}



const clearDisplay = () => {

    display.value = "";

};



function deleteLast(){

    display.value = display.value.slice(0,-1);

}



const calculate = function(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

    }

};