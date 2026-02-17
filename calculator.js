let values = [];
let numbers1 = [];
let numbers2 = [];
let ops = [];
function calculate(){
    let result;
    let x = Number(document.getElementById('num1').value);
    let y = Number(document.getElementById("num2").value);
    let op = document.getElementById("op").value;

    if(op === "+" && !isNaN(x) && !isNaN(y)){
        result = x + y;
        values.push(result);
        numbers1.push(x);
        numbers2.push(y);
        ops.push(op);
    }
    else if(op === "-" && !isNaN(x) && !isNaN(y)){
        result = x - y;
        values.push(result);
        numbers1.push(x);
        numbers2.push(y);
        ops.push(op);
    }
    else if(op === "*" && !isNaN(x) && !isNaN(y)){
        result = x * y;
        values.push(result);
        numbers1.push(x);
        numbers2.push(y);
        ops.push(op);
    }
    else if(op === "/" && !isNaN(x) && !isNaN(y)){
        result = x / y;
        values.push(result);
        numbers1.push(x);
        numbers2.push(y);
        ops.push(op);
    }
    else if(op === "%" && !isNaN(x) && !isNaN(y)){
        result = x % y;
        values.push(result);
        numbers1.push(x);
        numbers2.push(y);
        ops.push(op);
    }

    document.getElementById("calc").reset();
}

function cancel(){
    let min = values[0];
    let max = values[0];
    let avg = 0;
    let sum = 0;
    for(i in values){
        if(values[i] < min){
            min = values[i];
        }
        if(values[i] > max){
            max = values[i];
        }
        sum += values[i];
    }
    avg = sum / values.length;

    /* Table 1 */
    document.getElementById("result").innerHTML += "<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>";
    for(i in numbers1) {
        document.getElementById("result").innerHTML +=
            "<tr><td>" + numbers1[i] + "</td><td>" + ops[i] + "</td><td>" + numbers2[i] + "</td><td>" + values[i] + "</td></tr>";
    }

    /* Table 2 */
    document.getElementById("result").innerHTML += "<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Sum</th></tr>"
    + "<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + sum + "</td></tr>"
}
