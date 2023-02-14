function elResult() {
    return document.getElementById('result');
}

function insert(num) {
    const numero = elResult().innerHTML
    elResult().innerHTML = numero + num;
}

function clean() {
    elResult().innerHTML = "";
    document.querySelector('.numbers-calculator').innerHTML = "";
}

function calcular() {
    const result = elResult().innerHTML
    if (result) { 
        document.querySelector('.numbers-calculator').innerHTML = result;
        elResult().innerHTML = String(eval(result.replaceAll(',', '.'))).replaceAll('.', ',');
    }
}

