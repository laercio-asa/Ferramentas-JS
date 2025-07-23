let botoes = ''
for (let i = 0; i <= 10; i++) {
    let botao = 
        `<button class="btn btn-primary" onclick="tabuada(${i});">${i}</button>`;
    console.log(i);
    botoes = botoes + '&nbsp;' + botao;
    // botoes+=`&nbps;${botao}`;
    console.log(botoes);
}

document.getElementById("valores").innerHTML = botoes;
