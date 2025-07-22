console.log("teste js");

function converterTemp() {
    let tipo = document.getElementById("tipo").value;
    let temp = 
    parseFloat(document.getElementById("temp-info").value);
    console.log(tipo, temp);
    console.log(typeof temp);
    if (tipo=="") {
        alert("Ei!!! Escolha o tipo!");
        document.getElementById("tipo").focus();
        return;
    }
    if (typeof temp !== 'number'   ) { 
        alert("Não é numero");
        return;
    }
    console.log("o calculo continuou");

}