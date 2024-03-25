// console.log("hello, world!");
window.onload = onLoadFunc;

var text_input;

function onLoadFunc() {
    text_input = document.getElementById("text");
    // text_input.setAttribute("value", "2+2");

    // console.log(text_input);
}

function onButtonPressed(evt) {
    // console.log(evt.innerHTML);
    text_input.value += evt.innerHTML;
}

function onButtonOpPressed(evt){
    text_input.value += " " + evt.innerHTML + " ";
}


function onButtonEqualPressed()
{
    var result;
    const [num1, op, num2] = text_input.value.split(" ");
    // console.log(num1, op, num2);
    // console.log(op);

    switch(op)
    {
        case "+": {
            result = parseFloat(num1) + parseFloat(num2);
            text_input.value = result.toString();
            break;
        }
        case "-": {
            result = parseFloat(num1) - parseFloat(num2);
            text_input.value = result.toString();
            break;
        }
        case "*": {
            result = parseFloat(num1) * parseFloat(num2);
            text_input.value = result.toString();
            break;
        }
        case "/": {
            result = parseFloat(num1) / parseFloat(num2);
            text_input.value = result.toString();
            break;
        }
        default:
        {
            console.log("ahh");
            break;

        }
    }
}

function onButtonClearPressed() {
    text_input.value = "";
}

