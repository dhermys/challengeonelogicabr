var descriptografar = document.querySelector("#btn-descripto");
descriptografar.addEventListener("click", function(){
  event.preventDefault();
  var texto = document.querySelector("#input-texto").value;
  var textoDescriptografado = descriptografaTexto(texto);
  var saidaMensagem = document.querySelector("#msg");
  saidaMensagem.value = textoDescriptografado;
  var formulario = document.querySelector("#form-adiciona");
  formulario.reset();
  var resultado = document.querySelector("h2");
  resultado.textContent = "Mensagem descriptografada:";
} );

function descriptografaTexto(texto){
  var textoDescriptografado = texto
  .replace(/enter/gi, "e")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/ober/gi, "o")
  .replace(/ufat/gi,"u");
  
  return textoDescriptografado;
}