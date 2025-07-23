console.log("teste js");

function converterTemp() {
    let tipo = document.getElementById("tipo").value;
    let temp = parseFloat(document.getElementById("temp-info").value);
    console.log(tipo, temp);
    console.log(typeof temp);
    if (tipo == "") {
        alert("Ei!!! Escolha o tipo!");
        document.getElementById("tipo").focus();
        return;
    }
    if (typeof temp !== 'number' || isNaN(temp)) {
        alert("Não é numero");
        return;
    }
    console.log("o calculo continuou");
    let resultado;
    if (tipo == '1') {
        console.log("Biblioteca Math")
        console.log((temp * 9 / 5) + 32);
        console.log(((temp * 9 / 5) + 32) * 100);
        console.log(Math.round(((temp * 9 / 5) + 32) * 100));
        console.log(Math.round(((temp * 9 / 5) + 32) * 100) / 100);
        console.log("Biblioteca toFixed");
        console.log(((temp * 9 / 5) + 32).toFixed(2));
        //resultado = Math.round(((temp * 9 / 5) + 32)*100)/100;
        resultado = parseFloat(((temp * 9 / 5) + 32).toFixed(2));
    }
    else if (tipo == "2") {
        resultado = parseFloat(((temp - 32) * 5 / 9).toFixed(2));
    }
    else {
        alert("Ah abestado, pq fez isto!!!")
        return;
    }
    document.getElementById("temp-convert").value = resultado;
    console.log(resultado);
}

document.getElementById("limpar").addEventListener("click",
    function () { 
        limpar("tipo"); 
        limpar("temp-info"); 
        limpar("temp-convert");
     });

function limpar(id) {
    document.getElementById(id).value = "";
}