var criptografar = document.querySelector("#btn-cripto");
criptografar.addEventListener("click", function(){
  event.preventDefault();
  var texto = document.querySelector("#input-texto").value;
  var textoCriptografado = criptografaTexto(texto);
  var saidaMensagem = document.querySelector("#msg");
  saidaMensagem.value = textoCriptografado;
  var formulario = document.querySelector("#form-adiciona");
  formulario.reset();
  var resultado = document.querySelector("h2");
  resultado.textContent = "Mensagem criptografada:";
} );

function criptografaTexto(texto){
  var textoCriptografado = texto
  .replace(/e/gi,"enter")
  .replace(/i/gi,"imes")
  .replace(/a/gi,"ai")
  .replace(/o/gi,"ober")
  .replace(/u/gi, "ufat");

  return textoCriptografado;
}
