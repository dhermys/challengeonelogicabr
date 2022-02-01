var copiar = document.querySelector("#btn-copy");
copiar.addEventListener("click", function(){
  var copia = document.querySelector("#msg");
  navigator.clipboard.writeText(copia.value);
  var resultado = document.querySelector("h2");
  resultado.textContent = "Aguardando nova mensagem...";
});