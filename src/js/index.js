document.body.addEventListener("click", function () {
  var audio = document.getElementById("background-audio");
  if (audio.paused) {
    audio.play();
  }
});

const botoes = document.querySelectorAll(".botoes-carrossel .botao");

const imagens = document.querySelectorAll(".carrosel .imagem"); 

const informacoes = document.querySelectorAll(".conteudo .informacoes");

botoes.forEach((botao, index) =>  {

  botao.addEventListener("click", () =>{ 
  
  imagens.forEach((imagem) => imagem.classList.remove("ativa")); 
  
  informacoes.forEach((info) => info.classList.remove("ativa")); 
  
  botoes.forEach((btn) => btn.classList.remove("selecionado")); 
  
  imagens[index].classList.add("ativa"); 
  
  informacoes[index].classList.add("ativa"); 
  
  botao.classList.add("selecionado");

})
})



