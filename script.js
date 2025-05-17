let botao = document.querySelector("#botao");
botao.style.background="rgb(160, 232, 238)";

botao.addEventListener("mouseover",e =>{
    botao.style.background="rgb(192, 186, 26)"
})

botao.addEventListener("mouseout",e =>{
    botao.style.background="rgb(160, 232, 238)"
})

botao.addEventListener("click",e =>{
    botao.innerHTML="Seja bem vindo, espero que o conteúdo lhe agrade!"
})    